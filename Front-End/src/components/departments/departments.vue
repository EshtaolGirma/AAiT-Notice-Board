<template>
  <div class="body-container">
    <div class="container">
      <h3 style="margin-top: 15px; margin-bottom: 40px; color: #121c41">
        Department Detail
      </h3>

      <!-- end of department dean row -->

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
            <th scope="row">Dean</th>

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
            <th scope="row">Advisor</th>
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
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <a
          class="nav-item nav-link active"
          id="nav-news-feed-tab"
          data-toggle="tab"
          href="#nav-news-feed"
          role="tab"
          aria-controls="nav-news-feed"
          aria-selected="true"
          >News Feed</a
        >

        <a
          class="nav-item nav-link"
          id="nav-course-tab"
          data-toggle="tab"
          href="#nav-course"
          role="tab"
          aria-controls="nav-course"
          aria-selected="false"
          >Courses</a
        >

        <a
          class="nav-item nav-link"
          id="nav-post-news-feed-tab"
          data-toggle="tab"
          href="#nav-post-news-feed"
          role="tab"
          aria-controls="nav-post-news-feed"
          aria-selected="true"
          >Post News Feed</a
        >

        <a
          class="nav-item nav-link"
          id="nav-add-course-tab"
          data-toggle="tab"
          href="#nav-add-course"
          role="tab"
          aria-controls="nav-add-course"
          aria-selected="false"
          >Add New Courses</a
        >
      </div>
    </nav>
    <!-- end of tabs navigation control -->

    <!-- tabs content -->
    <div class="tab-content" id="nav-tabContent">
      <!-- news feed tab -->
      <div
        class="tab-pane fade show active"
        id="nav-news-feed"
        role="tabpanel"
        aria-labelledby="nav-news-feed-tab"
      >
        <NewsFeed :dept="depart" />
      </div>
      <!-- end of news feed tab -->

      <!-- courses tab -->
      <div
        class="tab-pane fade"
        id="nav-course"
        role="tabpanel"
        aria-labelledby="nav-course-tab"
      >
        <CourseTab :dept="depart" />
      </div>
      <!-- end of courses tab -->

      <!-- post news feed tab -->
      <div
        class="tab-pane fade show"
        id="nav-post-news-feed"
        role="tabpanel"
        aria-labelledby="nav-post-news-feed-tab"
      >
        <PostNewsFeed  :dept="depart"/>
      </div>
      <!-- end of post news feed tab -->

      <!-- add courses tab -->
      <div
        class="tab-pane fade"
        id="nav-add-course"
        role="tabpanel"
        aria-labelledby="nav-add-course-tab"
      >
        <AddCourse :dept="depart"/>
      </div>
      <!-- end of add courses tab -->
    </div>
    <!-- end of tabs content -->
  </div>
</template>

<script>
import CourseTab from "./tabs/coursesTab.vue";
import NewsFeed from "./tabs/newsFeedTab.vue";
import PostNewsFeed from "./tabs/adminView/addNewsFeedTab.vue";
import AddCourse from "./tabs/adminView/addCourseTab.vue";

export default {
  data(){
    return{
        depart:{},
        id: this.$route.query.id,
        
    }

  },
  components: {
    CourseTab,
    NewsFeed,
    PostNewsFeed,
    AddCourse,
  },
 
  updated(){
    if ( this.id != this.$route.query.id){
      this.id = this.$route.query.id;
      fetch('http://localhost:3000/api/Department/' + this.id)
      .then(res => res.json())
      .then(data => {this.depart = data; console.log(data);})
      .catch(err => console.log(err.message))
    }
    
  },
  mounted(){
    fetch('http://localhost:3000/api/Department/' + this.id)
    .then(res => res.json())
    .then(data => {this.depart = data; console.log(data);})
    .catch(err => console.log(err.message))

  }
};
</script>
<style scoped>
a {
  text-decoration: none;
}

.container,
.nav {
  width: 90%;
  margin: 50px;
  margin-bottom: 25px;
  margin-top: 25px;
}
/* .table{
  max-width: fit-content;
} */

.body-container {
  width: 80%;
  /* border: 1px solid; */
  position: absolute;
  right: 2vh;
  top: 8vh;
}
@media (max-width: 1120px) {
  .body-container {
    width: 78%;
  }
}
@media (max-width: 1000px) {
  .body-container {
    width: 76%;
  }
}
@media (max-width: 900px) {
  .body-container {
    width: 73%;
  }
}
@media (max-width: 750px) {
  .body-container {
    width: 70%;
  }
}

@media (max-width: 768px) {
  .body-container {
    width: 97%;
  }
}

</style>