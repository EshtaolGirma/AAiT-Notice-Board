        
<template>
  <div class="frm">
    <div class="form-content">
      <h2>Login</h2>
      <div class="error"></div>

      <form>
        <div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              v-model="username"
              placeholder="User Name"
              required
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              v-model="password"
              placeholder="password"
              required
            />
          </div>
        </div>

        <div>
          <div class="last">
            <button class="register" type="submit" value="Submit">Login</button>
          </div>
          <div class="text">
            <small class="">
              Don't Have An Account?
              <router-link :to="{ name: 'Signup' }" class="ml-2">
                <b>Register</b>
              </router-link>
            </small>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.frm {
  width: 80%;
  /* border: 1px solid; */
  position: absolute;
  right: 2vh;
  top: 8vh;
}
.form-content {
  border-radius: 10px;
  position: relative;
  background: rgb(63, 63, 63, 0.5);
  padding: 10px 0;
  margin: 50px;
  margin-bottom: 25px;
  margin-top: 25px;
}
.form-group {
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  width: 35%;
  height: 50px;
}
.form-content .form-group input {
  appearance: unset;
  display: block;
  height: 50px;
  padding-top: 10px;
  padding-left: 30px;
  border: none;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid #ccc;
}
.form-content .form-group input::-webkit-input-placeholder {
  color: white;
  font-size: 16px;
}

input::-moz-placeholder {
  /* Firefox 19+ */
  color: #e5e5e5;
  font-size: 16px;
}
input:-ms-input-placeholder {
  /* IE 10+ */
  color: #e5e5e5;
  font-size: 16px;
}
input:-moz-placeholder {
  /* Firefox 18- */
  color: #e5e5e5;
  font-size: 16px;
}
.register {
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
.register:hover {
  background: #121c41;
}
h2 {
  margin: 40px 0 20px 0;
  color: white;
}
/* .form-content h2::after {
  background: #fff;
  width: 73px;
  height: 3px;
  content: "";
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
} */
.text {
  margin-bottom: 40px;
  /* font-size: 14px; */
}
@media (max-width: 1120px) {
  .frm {
    width: 78%;
  }
}
@media (max-width: 1000px) {
  .frm {
    width: 76%;
  }
}
@media (max-width: 900px) {
  .frm {
    width: 73%;
  }
}
@media (max-width: 750px) {
  .frm {
    width: 70%;
  }
}

@media (max-width: 768px) {
  .frm {
    width: 97%;
  }
}
</style>