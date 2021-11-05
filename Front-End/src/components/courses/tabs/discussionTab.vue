<template>
  <div>
    <h3 class="tab-title" style="margin-left: 50px; color: #121c41">
      Ask Questions
    </h3>
    <hr />
    <div class="question">
      <div v-for="ar in arr" :key="ar">
        <div class="question">
          <p class="username">@{{ ar.username }}</p>
          <h5>{{ ar.message }}</h5>
          <a
            data-toggle="collapse"
            v-bind:href="'#' + ar._id"
            role="button"
            aria-selected="false"
          >
            <i class="fas fa-reply"></i> Reply
          </a>
        </div>

        <div class="collapse row" v-bind:id="ar._id">
          <div class="col-1 indention">.</div>
          <div class="col-10 replies">
            <div class="reply" v-for="rep in ar.replies" :key="rep">
              <p class="username">@{{ rep.user }}</p>
              <p>{{ rep.text }}</p>
            </div>

            <hr />

            <hr />
            <!-- reply adding form -->
            <div class="post-reply">
              <form @submit.prevent="postreply(e, ar._id)" method="post">
                <label for="exampleFormControlTextarea1">
                  <h5>Reply</h5>
                </label>
                <!-- <input
                  type="hidden"
                  v-model="comment_id"
                  :value="rep._id"
                /> -->
                <div class="row">
                  <div class="form-group col-11 no-padding-right">
                    <div class="title">
                      <p style="color: red">
                        {{ rerror }}
                      </p>
                    </div>
                    <textarea
                      v-model="reply"
                      class="form-control question-textarea"
                      rows="1"
                      placeholder="Feel free to ask the class"
                    ></textarea>
                  </div>
                  <div class="col-1 no-padding-left">
                    <button
                      type="submit"
                      value="Submit"
                      class="btn btn-success btn-post-reply"
                    >
                      Post
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <!-- end of question adding form -->
            <hr />
          </div>
        </div>
      </div>

      <!-- question adding form -->
      <div class="post-question">
        <form @submit.prevent="submit" method="post">
          <label for="exampleFormControlTextarea1">
            <h5>Talk To The Class</h5>
          </label>
          <div class="title">
            <p style="color: red">
              {{ cerror }}
            </p>
          </div>
          <div class="row">
            <div class="form-group col-9 no-padding-right">
              <textarea
                v-model="comment"
                class="form-control question-textarea"
                rows="1"
                placeholder="Feel free to ask the class"
              ></textarea>
            </div>
            <div class="col-3">
              <button
                type="submit"
                value="Submit"
                class="btn btn-success btn-post-question"
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- end of question adding form -->
</template>

<script>
export default {
  props: {
    course: Object,
  },
  data() {
    return {
      comment_id: "",
      comment: "",
      reply: "",
      arr: [],
      cerror: "",
      rerror: "",
      username: "gelete",
    };
  },
  mounted() {
    fetch("http://localhost:3000/api/Discussion/" + this.course._id)
      .then((res) => res.json())
      .then((data) => {
        this.arr = data;
        console.log(data);
      })
      .catch((err) => console.log(err.message));
  },
  methods: {
    submit(e) {
      if (this.comment !== "") {
        fetch("http://localhost:3000/api/Discussion", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            courseID: this.course._id,
            username: this.username,
            question: this.comment,
          }),
        })
          .then((res) => res.json())
          .then((data) => {console.log(data); window.location.reload();})
          .catch((err) => console.log(err.message));
      } else {
        this.cerror = "empty post";
      }
      e.preventDefault();
    },
    // },
    postreply(e, comment_id) {
      if (this.reply !== "") {
        fetch("http://localhost:3000/api/Discussion/reply", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            comment_id: comment_id,
            username: this.username,
            reply: this.reply,
          }),
        })
          .then((res) => res.json())
          .then((data) => {console.log(data);  window.location.reload();})
          .catch((err) => console.log(err.message));
      }
      else{
        this.rerror = "empty post";
      }
      e.preventDefault();
    },
  },
};
</script>

<style scoped>
.question {
  margin: 50px;
  margin-bottom: 25px;
  margin-top: 25px;
}
.username {
  margin-bottom: 0;
}

.username {
  font-weight: 600;
}

/* .indention {
  border-right: 1px solid #121c41;
  height: 100%;
  width: 100%;
} */

textarea {
  resize: none;
  border-radius: 15px 0 0 15px;
  border: 1px dashed #121c41;
}

.btn {
  width: 100%;
  height: 100%;
  border-radius: 0 15px 15px 0;
  background: #2e4081;

  margin: 15px 0 0px 0;

  /* font-weight: 700; */
  font-size: 16px;
}
.btn:hover {
  background: #121c41;
}

.no-padding-left {
  padding-left: 0;
}

.no-padding-right {
  padding-right: 0;
}
.title {
  text-align: start;
}
</style>
