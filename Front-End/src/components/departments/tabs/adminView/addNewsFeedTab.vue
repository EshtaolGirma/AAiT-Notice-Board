<template>
  <div>
  <h3 class="tab-title" style="margin-left: 50px; color: #121c41">
    Post New News Feed
  </h3>
  <hr />

  <div class="card form-container">
    <div class="card-body">
      <h5 class="card-title">News Feed</h5>
    </div>
    <form @submit.prevent="submit" method="post">
      <div class="title field">
          <p v-if="error.length" style="color: red;">
          <b>error(s):</b>
          <ul>
          <li v-for="err in error" :key="err">{{ err }}</li>
          </ul>
          </p>
      </div>
      
      <div class="title field">
        <label for="username">Title</label>
        <input type="text" class="form-control" placeholder="Title" v-model="title"/>
      </div>
      <div class="title message field">
        <label for="email">Message body</label>
        <textarea v-model="message"
          class="form-control question-textarea"
          rows="5"
          placeholder="Message"
        ></textarea>
      </div>

      <button type="submit" value="Submit" class="btn btn-success btn-detail-submit">
        Post
      </button>
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
      title: "",
      message: "",
      id: "",
      error: [],
    };
  },

  methods: {
    submit(e) {
      this.id = this.dept._id;
      if (this.title !== "" && this.message !== "") {
        fetch("http://localhost:3000/api/NewsFeed", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: this.title,
            description: this.message,
            deptId: this.id,
            postDate: new Date(),
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
      if (this.title == "") {
        this.error.push("title is required");
      }
      if (this.message == "") {
        this.error.push("message is required");
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
  /* border: 1px dashed red; */
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
.title {
  text-align: start;
}
.hide {
  display: none;
}
</style>