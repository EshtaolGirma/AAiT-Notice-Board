<template>
  <h3 class="tab-title" style="margin-left: 50px; color: #121c41">
    Add Department Admin
  </h3>
  <hr />

  <div class="card form-container">
    <div class="card-body">
      <h5 class="card-title">Department Admin Form</h5>
    </div>
    <form @submit.prevent="submit" method="post">
      <div class="row">
        <div class="col">
          <label for="username">Username <span style="color: red; font-size: 24px">*</span></label>
          <input
            type="text"
            class="form-control"
            placeholder="@Admin"
            v-model="username"
          />
        </div>
        <div class="col">
          <label for="email">Email Address <span style="color: red; font-size: 24px">*</span></label>
          <input
            type="email"
            class="form-control"
            placeholder="Email address"
            v-model="email"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-6">
          <label for="username">Department <span style="color: red; font-size: 24px">*</span></label>
          <!-- <div class="input-group-prepend">
                        <label class="input-group-text" for="inputGroupSelect01">Department</label>
                    </div> -->
          <select
            class="custom-select"
            id="inputGroupSelect01"
            v-model="deptId"
          >
            <option :value="dept._id" v-for="dept in departs" :key="dept._id">
              {{ dept.name }}
            </option>
            <!-- <option value="Chemical">Chemical Engineering</option>
            <option value="Civil">Civil Engineering</option>
            <option value="Electrical">Electrical Engineering</option>
            <option value="Mechanical">Mechanical Engineering</option>
            <option value="SITE">SITE</option> -->
          </select>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <label for="username">Password <span style="color: red; font-size: 24px">*</span></label>
          <input
            type="password"
            class="form-control"
            placeholder="****"
            v-model="password"
          />
        </div>
        <div class="col">
          <label for="username">Repeat Password <span style="color: red; font-size: 24px">*</span></label>
          <input
            type="password"
            class="form-control"
            placeholder="****"
            v-model="repeat_pass"
          />
        </div>
      </div>
      <div class="title field" style="text-align:left">
          <p v-if="error.length" style="color: red;">
          <b>error(s):</b>
          <ul>
          <li v-for="err in error" :key="err">{{ err }}</li>
          </ul>
          </p>
      </div>

      <button
        type="submit"
        value="Submit"
        class="btn btn-success btn-detail-submit"
      >
        Add
      </button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    deptAdmin: Object,
  },
  data() {
    return {
      departs: [],
      error: [],
      username: "",
      email: "",
      password: "",
      repeat_pass: "",
      deptId: "",
    };
  },
  mounted() {
    fetch("http://localhost:3000/api/Department")
      .then((res) => res.json())
      .then((data) => (this.departs = data))
      .catch((err) => console.log(err.message));
  },

  methods: {
    submit(e) {
      if (
        this.username !== "" &&
        this.email !== "" &&
        this.password !== "" &&
        this.repeat_pass !== "" &&
        this.password == this.repeat_pass &&
        this.deptId !== ""
      ) {
        fetch("http://localhost:3000/api/User/deptAdmin", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: this.username,
            email: this.email,
            password: this.password,
            repeat_pass: this.repeat_pass,
            deptId: this.deptId,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            window.location.reload();
          })
          .catch((err) => console.log(err.message));
      }
      this.error = [];
      if (
        this.username == "" ||
        this.email == "" ||
        this.password == "" ||
        this.repeat_pass == "" ||
        this.deptId == ""
      ) {
        this.error.push("please fill out the required fields");
      }
      if (this.password !== this.repeat_pass) {
        this.error.push("password must be the same");
      }

      e.preventDefault();
    },
  },
};
</script>


<style scoped>
.card {
  margin: 50px;
  margin-bottom: 25px;
  margin-top: 25px;
}
a {
  text-decoration: none;
}

.tab-title {
  padding-top: 30px;
  text-align: start;
}

.form-container {
  border: none;
  box-shadow: 0 1px 20px 0 rgb(69 90 100 / 8%);
}

.btn-success {
  background: #2e4081;
  border-radius: 15px;
  border: none;
  height: 50px;
  width: 180px;
  margin: 30px 0 30px 0;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
}
.btn-success:hover {
  background: #121c41;
}

.field {
  padding-bottom: 30px;
  padding-right: 30px;
  padding-left: 30px;
}

input {
  resize: none;
  border: 1px solid black;
  border-radius: 10px;
}

label {
  padding-bottom: 10px;
  padding-left: 8px;
}

.row {
  padding-bottom: 30px;
  padding-right: 30px;
  padding-left: 30px;
}

.custom-select {
  width: 100%;
  height: 40px;
  border-radius: 10px;
  padding-left: 10px;
}

.btn-detail-submit {
  margin-left: 30px;
  margin-bottom: 50px;
  padding-inline: 20px;
}
</style>