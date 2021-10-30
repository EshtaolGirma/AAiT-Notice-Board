<template>
<div>
  <h3 class="tab-title" style="margin-left: 50px; color: #121c41">
    {{dept.name}}'s News Feed 
  </h3>
  <hr />

  <div class="newsfeed-card-container">
    <div class="card newsfeed" v-for="news in dept.newsFeeds" :key="news._id">
      <div class="card-body">
        <div class="green-box"></div>
        <h5 class="card-title">{{news.title}}</h5>
        <hr />
        <!-- <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> -->
        <p class="card-text">
         {{news.description}}
        </p>
      </div>
    </div>
  </div>

  
  </div>
</template>

<script>
  export default{
    props:{
        dept:{
          type: Object
        }
    },
     data(){
       return{

       }
     }
  }
</script>

<style scoped>
a {
  text-decoration: none;
}

.tab-title {
  padding-top: 30px;
  text-align: start;
}

.newsfeed-card-container {
  z-index: 1;
}
.newsfeed {
  box-shadow: 1px 1px 20px 2px #928c8c;
  border-radius: 7px;
  margin: 50px;
  margin-bottom: 25px;
  margin-top: 25px;
  z-index: 200;
}
.card-body {
  text-align: start;
}

.card-body {
  position: relative;
}
.green-box {
  width: 5px;
  height: 2.5rem;
  background: #121c41;
  position: absolute;
  top: 0.5rem;
  left: 0;
}
</style>