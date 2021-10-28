<template>
  <div class="body-container" id="content">
    <div class="newsfeed-card-container">
      <!-- news feed card -->
      <div class="card newsfeed">
        <div class="card-body">
          <div class="green-box"></div>
          <h5 class="card-title">Card title</h5>
          <hr />
          <!-- <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> -->
          <p class="card-text">
            One Family Entrance ticket of the graduation ceremony on Saturday
            Oct 9, 2021 is prepared for students listed on the attachment and
            additional 2 students Yusra and Eyuel From IT. You can take the
            tickets on Oct 8,2021 from Department office on office hours.
          </p>
          <p class="card-text">
            One Family Entrance ticket of the graduation ceremony on Saturday
            Oct 9, 2021 is prepared for students listed on the attachment and
            additional 2 students Yusra and Eyuel From IT. You can take the
            tickets on Oct 8,2021 from Department office on office hours.
          </p>
        </div>
      </div>
      <!-- end of news feed card -->
      <!-- news feed card -->
      <div class="card newsfeed">
        <div class="card-body">
          <div class="green-box"></div>
          <h5 class="card-title">Card title</h5>
          <!-- <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> -->
          <hr />
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the
            card title and make up the bulk of the card's content. Some quick
            example text to build on the card title and make up the bulk of the
            card's content.
          </p>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <!-- end of news feed card -->
      <!-- news feed card -->
      <div class="card newsfeed">
        <div class="card-body">
          <div class="green-box"></div>
          <h5 class="card-title">Lard title</h5>
          <!-- <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> -->
          <hr />
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
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
  props: {
    msg: String,
  },
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
