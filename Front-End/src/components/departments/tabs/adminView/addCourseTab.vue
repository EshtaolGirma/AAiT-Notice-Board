<template>
  <div>
    <h3 class="tab-title" style="margin-left: 50px; color: #121c41">
      Add New course
    </h3>
    <hr />

    <div class="card form-container">
      <div class="card-body">
        <h5 class="card-title">Course Detail</h5>
      </div>
      <form @submit.prevent="submit" method="post">
        <div class="form-group">
          <div class="title field col-6">
            <label for="username" class="title">Course Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Name"
              v-model="course_name"
            />
          </div>

          <div class="row field">
            <div class="col title">
              <label for="username">Year</label>

              <div class="row col-8">
                <div class="col">
                  <input type="radio" name="year"  value="1" v-model="year" />
                  <label for="username">1</label>
                </div>
                <div class="col">
                  <input type="radio" name="year" value="2" v-model="year" />
                  <label for="username">2</label>
                </div>
                <div class="col">
                  <input type="radio" name="year" value="3" v-model="year" />
                  <label for="username">3</label>
                </div>

                <div class="col">
                  <input type="radio" name="year" value="4" v-model="year" />
                  <label for="username">4</label>
                </div>
                <div class="col">
                  <input type="radio" name="year" value="5" v-model="year" />
                  <label for="username">5</label>
                </div>
              </div>
            </div>
            <div class="col title">
              <label for="username">Semester</label>
              <div class="row col-8">
                <div class="col">
                  <input type="radio" name="semester" value="1" v-model="semseter" />
                  <label for="username">Semester I</label>
                </div>
                <div class="col">
                  <input type="radio" name="semester" value="2" v-model="semseter" />
                  <label for="username">Semester II</label>
                </div>
              </div>
            </div>
          </div>

          <div class="row field">
            <div class="col title">
              <label for="username">ECTS</label>
              <input
                type="number"
                class="form-control"
                placeholder="0.00"
                v-model="ECTS"
              />
            </div>
            <div class="col title">
              <label for="username">Credit Hours</label>
              <input
                type="number"
                class="form-control"
                placeholder="0.00"
                v-model="C_hours"
              />
            </div>
          </div>
          <div class="message field title">
            <label for="email">Course General Description</label>
            <textarea
              v-model="description"
              class="form-control question-textarea"
              rows="5"
              placeholder="Objective of the course"
            ></textarea>
          </div>
          <!-- <button type="button" class="btn btn-success btn-detail-submit">Post</button> -->
        </div>

        <div class="form-group">
          <div class="field col-7 title">
            <label for="lec-name">Lecturer Name</label>
            <div class="input-group lec">
              <select
                class="custom-select"
                id="inputGroupSelect01"
                v-model="prefix"
              >
                <option value="Dr.">Dr.</option>
                <option value="Mr.">Mr.</option>
                <option value="Ms.">Ms.</option>
              </select>
              <div class="input-group-prepend col-10">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Name"
                  v-model="Lr_name"
                />
              </div>
            </div>
          </div>

          <div class="row field">
            <div class="col title">
              <label for="username">Office</label>
              <input
                v-model="office"
                type="text"
                class="form-control"
                placeholder="Office Address"
              />
            </div>
            <div class="col title">
              <label for="username">Office Hours</label>
              <input
                v-model="office_h"
                type="text"
                class="form-control"
                placeholder="Monday 9:00-12:00, Friday 14:00-17:00..."
              />
            </div>
          </div>

          <div class="field col-7 title">
            <label for="lec-name">Lab Assistance Name</label>
            <div class="input-group lec">
              <select
                class="custom-select"
                id="inputGroupSelect01"
                v-model="La_prefix"
              >
                <!-- <option selected>Prefix</option> -->
                <option value="Dr.">Dr.</option>
                <option value="Mr.">Mr.</option>
                <option value="Ms.">Ms.</option>
              </select>
              <div class="input-group-prepend col-10">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Name"
                  v-model="La_name"
                />
              </div>
            </div>
          </div>

          <div class="row field">
            <div class="col title">
              <label for="username">Office</label>
              <input
                v-model="La_office"
                type="text"
                class="form-control"
                placeholder="Office Address"
              />
            </div>
            <div class="col title">
              <label for="username">Office Hours</label>
              <input
                v-model="La_office_hr"
                type="text"
                class="form-control"
                placeholder="Monday 9:00-12:00, Friday 14:00-17:00..."
              />
            </div>
          </div>
          

          <button type="submit" value="Submit" class="btn btn-success btn-detail-submit">
            Post
          </button>

          <div class="title field">
            <p v-if="error.length" style="color: red;">
            <b>error(s):</b>
            <ul>
            <li v-for="err in error" :key="err">{{ err }}</li>
            </ul>
            </p>
          </div>
        </div>
        <div>
          {{course_name}}
          {{year}}
          {{semseter}}
          {{ECTS}}
          {{C_hours}}
          {{description}}
          {{prefix}}
          {{Lr_name}}
          {{office}}
          {{office_h}}
          {{La_prefix}}
          {{La_name}}
          {{La_office}}
          {{La_office_hr}}
          
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    dept: Object,
  },
  data() {
    return {
      course_name: "",
      year: 0,
      semseter: 0,
      ECTS: 0,
      C_hours: 0,
      description: "",
      prefix: "",
      Lr_name: "",
      office: "",
      office_h: "",
      La_prefix: "",
      La_name: "",
      La_office: "",
      La_office_hr: "",
      error: [],
    };
  },
  methods: {
    submit(e) {
      if (this.course_name !== "" && this.ECTS !== "") {
        console.log("i am here");
        fetch("http://localhost:3000/api/Course", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            deptId: this.dept._id,
            course_name: this.course_name,
            year: this.year,
            semseter: this.semseter,
            ECTS: this.ECTS,
            C_hours: this.C_hours,
            description: this.description,
            prefix: this.prefix,
            Lr_name: this.Lr_name,
            office: this.office,
            office_h: this.office_h,
            La_prefix: this.La_prefix,
            La_name: this.La_name,
            La_office: this.La_office,
            La_office_hr: this.La_office_hr,
          }),
        })
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((err) => console.log(err.message));
      }
      this.error = [];
      if (this.course_name == "") {
        this.error.push("name is required");
      }
      if (this.ECTS == "") {
        this.error.push("ECTS is required");
      }
      e.preventDefault();
    },
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
}
.card {
  margin: 50px;
  margin-bottom: 25px;
  margin-top: 25px;
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
  width: 150px;
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

textarea,
input {
  resize: none;
  border-radius: 10px;
}

label {
  padding-bottom: 10px;
  /* padding-left: 8px; */
}
.title {
  text-align: start;
}

.btn-detail-submit {
  margin-left: 30px;
  margin-bottom: 50px;
  padding-inline: 20px;
}

.lec {
  display: flex;
  justify-content: space-between;
}

.custom-select {
  border: 1px solid #ced4da;
  border-radius: 10px;
}
</style>