<template>
  <h3 class="tab-title" style="margin-left: 50px; color: #121c41">
    Add Department
  </h3>
  <hr />

  <div class="card form-container">
    <div class="card-body">
      <h5 class="card-title">Department</h5>
    </div>
    <form @submit.prevent="submit" method="post">
      <div class="title field">
        <label>Name <span style="color: red; font-size: 24px">*</span></label>
        <input
          type="text"
          class="form-control"
          placeholder="Name"
          v-model="name"
        />
      </div>

      <div class="title field">
        <label
          >Description <span style="color: red; font-size: 24px">*</span></label
        >
        <textarea
          type="text"
          class="form-control"
          placeholder="description"
          v-model="description"
        />
      </div>

      <hr />
      <div class="row sub-group">
        <div class="col-6">
          <h6>Department Dean Detail</h6>
        </div>
      </div>
      <div class="col-6">
        <div class="title field">
          <label
            >Dean's Name
            <span style="color: red; font-size: 24px">*</span></label
          >
          <input
            type="text"
            class="form-control"
            placeholder="Name"
            v-model="deanName"
          />
        </div>
      </div>

      <div class="row">
        <div class="col">
          <div class="title field">
            <label
              >Dean's Office
              <span style="color: red; font-size: 24px">*</span></label
            >
            <input
              type="text"
              class="form-control"
              placeholder="Office Address"
              v-model="deanOffice"
            />
          </div>
        </div>
        <div class="col">
          <div class="title field">
            <label
              >Dean's Office Hours
              <span style="color: red; font-size: 24px">*</span></label
            >
            <input
              type="text"
              class="form-control"
              placeholder="Hours"
              v-model="deanOfficeHour"
            />
          </div>
        </div>
      </div>

      <hr />
      <div class="row sub-group">
        <div class="col-6">
          <h6>Advisory Detail</h6>
        </div>
      </div>
      <div class="col-6">
        <div class="title field">
          <label
            >Advisory's Name
            <span style="color: red; font-size: 24px">*</span></label
          >
          <input
            type="text"
            class="form-control"
            placeholder="Name"
            v-model="advisorName"
          />
        </div>
      </div>

      <div class="row">
        <div class="col">
          <div class="title field">
            <label
              >Advisory's
              <span style="color: red; font-size: 24px">*</span></label
            >
            <input
              type="text"
              class="form-control"
              placeholder="Office Address"
              v-model="advisorOffice"
            />
          </div>
        </div>
        <div class="col">
          <div class="title field">
            <label
              >Advisory's Office Hours
              <span style="color: red; font-size: 24px">*</span></label
            >
            <input
              type="text"
              class="form-control"
              placeholder="Hours"
              v-model="advisorOfficeHour"
            />
          </div>
        </div>
      </div>

      <div class="title field">
        <p style="color: red; font-size: 18px; text-align: left">
          {{ error }}
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
    dept: Object,
  },
  data() {
    return {
      name: "",
      description: "",
      deanName: "",
      deanOffice: "",
      deanOfficeHour: "",
      advisorName: "",
      advisorOffice: "",
      advisorOfficeHour: "",
      error: "",
    };
  },
  methods: {
    submit(e) {
      if (
        this.name !== "" &&
        this.description !== "" &&
        this.deanName !== "" &&
        this.deanOffice !== "" &&
        this.deanOfficeHour !== "" &&
        this.advisorName !== "" &&
        this.advisorOffice !== "" &&
        this.advisorOfficeHour !== ""
      ) {
        fetch("http://localhost:3000/api/Department", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: this.name,
            description: this.description,
            deanName: this.deanName,
            deanOffice: this.deanOffice,
            deanOfficeHour: this.deanOfficeHour,
            advisorName: this.advisorName,
            advisorOffice: this.advisorOffice,
            advisorOfficeHour: this.advisorOfficeHour,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            window.location.reload();
          })
          .catch((err) => console.log(err.message));
      } else {
        this.error = "please fill out the required fields";
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

.sub-group {
  padding-bottom: 10px;
  padding-right: 30px;
  padding-left: 30px;
}

textarea,
input {
  resize: none;
  border-radius: 10px;
  border: 1px solid black;
}

label {
  padding-bottom: 10px;
  padding-left: 8px;
}

.btn-detail-submit {
  margin-left: 30px;
  margin-bottom: 50px;
  padding-inline: 20px;
}
</style>