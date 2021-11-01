<template>
  <div class="body-container" id="content">
    <div class="newsfeed-card-container" >
      <!-- news feed card -->
      <div class="card newsfeed" v-for="news in newsFeed" :key="news._id" >
        <div class="card-body">
          <div class="green-box"></div>
          <h5 class="card-title">{{news.title}}</h5>
          <p style="color: gray">{{news.postDate}}</p>
          <hr />
          <!-- <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> -->
          <p class="card-text">
           {{news.description}}
          </p>
        </div>
      </div>
      <!-- end of news feed card -->
     
     
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return{
      newsFeed: [],
      date: Date
    }
    
  },
  mounted(){
    fetch('http://localhost:3000/api/NewsFeed')
    .then(res => res.json())
    .then(data => {this.newsFeed = data.data})
    .catch(err => console.log(err.message))      
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body-container {
  width: 80%;
  /* border: 1px solid; */
  position: absolute;
  right: 2vh;
  top: 8vh;
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
