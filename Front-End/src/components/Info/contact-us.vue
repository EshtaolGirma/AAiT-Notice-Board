<template>
  <div class="body-container">
    <div class="container">
      <div class="title-container">
        <h2 class="title">Contact Us</h2>
        <p>
          &Lorem ipsum dolor sit amen consenter a nipissing elite. Quam expedite
          esse est quadrat aligned
        </p>
      </div>

      <div class="form-container">
        <form>
          <label class="form-group" for="sender-email">
            <input
              type="Name"
              class="form-control"
              id="sender-Name"
              aria-describedby="NameHelp"
              placeholder="Enter Name"
            />
          </label>

          <label class="form-group" for="sender-password">
            <input
              type="email"
              class="form-control"
              id="sender-email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </label>

          <label class="form-group" for="email">
            <textarea
              class="form-control question-textarea"
              rows="2"
              placeholder="Your Message"
            ></textarea>
          </label>

          <div class="form-group btn-group">
            <button type="submit" class="btn btn-outline-success send-message">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.body-container {
  width: 80%;
  /* border: 1px solid; */
  position: absolute;
  right: 2vh;
  top: 8vh;
}

.container {
  padding-top: 5%;
  padding-bottom: 5%;
  padding-inline: 15%;
  background: rgb(63, 63, 63, 0.5);
  border-radius: 10px;
  color: #fff;
  width: 90%;
  margin: 50px;
  margin-bottom: 25px;
  margin-top: 25px;
}

.title-container {
  text-align: center;
  margin-bottom: 30px;
}

.title {
  font-weight: 700;
  font-size: 30px;
  text-transform: uppercase;
  margin-bottom: 8px;
}

label {
  width: 100%;
}

input,
textarea,
input:focus,
textarea:focus {
  color: #fff;
  background: transparent;
  border: none;
  border-radius: 0;
  outline: none;
  outline-width: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  resize: none;
}

input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: #fff;
}

.form-group {
  margin-bottom: 30px;
  background-color: none;
}

.btn-group {
  width: 100%;
}
.btn-outline-success {
  background: #2e4081;
  border-radius: 15px;
  border: none;
  height: 50px;
  margin-inline: 60%;
  /* width: 90px; */
  /* margin: 10px 0 10px 0; */
  color: #fff;
  font-weight: 700;
  font-size: 16px;
}
.btn-outline-success:hover {
  background: #121c41;
}

/* .send-message {
  margin-top: 15px;
  margin-inline: 35%;
  padding: 10px;
  font-size: 20px;
  font-weight: 900;
  text-transform: uppercase;
}

.btn-outline-success {
  color: #fff;
  border: 1px solid #fff;
  border-radius: 0;
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