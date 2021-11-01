<template>
  <div class="body-container2">
    <div class="container2">
      <h3 style="margin-top: 15px; margin-bottom: 40px; color: #121c41">
        Course Detail
      </h3>
      <!-- course detail row -->

      <table class="table">
        <tbody>
          <tr>
            <th scope="row">Description</th>

            <td style="padding-left: 175px">
              <p>
                {{course.description}}
              </p>
            </td>
          </tr>
          <tr>
            <th scope="row">ECTS</th>
            <td style="padding-left: 175px">{{course.ECTS}}</td>
          </tr>
          <tr>
            <th scope="row">Credit Hour</th>
            <td style="padding-left: 175px">{{course.creditHour}}</td>
          </tr>
        </tbody>
      </table>
      <!-- end of course ECTS row -->

      <table class="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Office</th>
            <th scope="col">Office Hours</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Lecturer</th>

            <td>Dr. Manjunath</td>
            <td>Pharm 101</td>
            <td>
              <p>
                Mon 9:00-12:00, <br />
                Thu 14:00-17:00
              </p>
            </td>
          </tr>
          <tr>
            <th scope="row">Lab Assistance</th>
            <td>Dr. Manjunath</td>
            <td>Pharm 101</td>
            <td>
              <p>
                Mon 9:00-12:00, <br />
                Thu 14:00-17:00
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Tabs navigation control  -->
    <nav>
      <div class="nav nav2 nav-tabs" id="nav-tab" role="tablist">
        <a
          class="nav-item nav-link active"
          id="nav-discussion-tab"
          data-toggle="tab"
          href="#nav-discussion"
          role="tab"
          aria-controls="nav-discussion"
          aria-selected="true"
          >Discussion</a
        >
        <a
          class="nav-item nav-link"
          id="nav-material-tab"
          data-toggle="tab"
          href="#nav-material"
          role="tab"
          aria-controls="nav-material"
          aria-selected="false"
          >Course Material</a
        >

        <a
          class="nav-item nav-link"
          id="nav-add-course-material-tab"
          data-toggle="tab"
          href="#nav-add-course-material"
          role="tab"
          aria-controls="nav-add-course-material"
          aria-selected="false"
          >Add New Course Material</a
        >
      </div>
    </nav>
    <!-- end of tabs navigation control -->

    <!-- tabs content -->
    <div class="tab-content" id="nav-tabContent">
      <!-- course discussion tab -->
      <div
        class="tab-pane fade show active"
        id="nav-discussion"
        role="tabpanel"
        aria-labelledby="nav-discussion-tab"
      >
        <Discussion class="discussion" :course="course"/>
      </div>
      <!-- end of course discussion tab -->

      <!-- course material tab -->
      <div
        class="tab-pane fade"
        id="nav-material"
        role="tabpanel"
        aria-labelledby="nav-material-tab"
      >
        <Material :course="course"/>
      </div>
      <!-- end of course material tab -->

      <!-- Add new course material tab -->
      <div
        class="tab-pane fade"
        id="nav-add-course-material"
        role="tabpanel"
        aria-labelledby="nav-add-course-material-tab"
      >
        <AddMaterial :course="course"/>
      </div>
      <!-- end of add new course material tab -->
    </div>
    <!-- end of tabs content -->
  </div>
</template>

<script>
import Discussion from "./tabs/discussionTab.vue";
import Material from "./tabs/materialTab.vue";
import AddMaterial from "./tabs/adminView/addMaterialTab.vue";

export default {
  data(){
    return{
        course:{},
        id: this.$route.query.id,
        
    }

  },
  components: {
    Discussion,
    Material,
    AddMaterial,
  },
  mounted(){
    fetch('http://localhost:3000/api/Department/' + this.id)
    .then(res => res.json())
    .then(data => {this.course = data; console.log(data);})
    .catch(err => console.log(err.message))
  }
};
</script>

<style>
.body-container2 {
  width: 80%;
  /* border: 1px solid; */
  position: absolute;
  right: 2vh;
  top: 8vh;
  text-align: start;
  padding-bottom: 200px;
}
.container2,
.nav2 {
  margin: 50px;
  margin-bottom: 25px;
  margin-top: 25px;
}

.tab-pane {
  margin-top: 50px;
}

@media (max-width: 1120px) {
  .body-container2 {
    width: 78%;
  }
}
@media (max-width: 1000px) {
  .body-container2 {
    width: 76%;
  }
}
@media (max-width: 900px) {
  .body-container2 {
    width: 73%;
  }
}
@media (max-width: 750px) {
  .body-container2 {
    width: 70%;
  }
}

@media (max-width: 768px) {
  .body-container2 {
    width: 97%;
  }
}
</style>