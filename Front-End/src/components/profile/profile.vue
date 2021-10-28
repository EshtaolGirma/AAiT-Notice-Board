<template>
  <div class="body-container">
    <div class="form-container">
      <div class="card form-card">
        <div class="card-body">
          <h5 class="card-title">Edit Profile</h5>
          <form>
            <div class="row">
              <div class="col">
                <label for="username">Username</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                />
              </div>
              <div class="col">
                <label for="email">Email Address</label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email address"
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="username">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                />
              </div>
              <div class="col">
                <label for="username">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                />
              </div>
            </div>

            <div class="row">
              <div class="col">
                <label for="username">Department</label>
                <!-- <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputGroupSelect01">Department</label>
                                </div> -->
                <select class="custom-select" id="inputGroupSelect01">
                  <option selected>Department</option>
                  <option value="BioMed">BioMedical Engineering</option>
                  <option value="Chemical">Chemical Engineering</option>
                  <option value="Civil">Civil Engineering</option>
                  <option value="Electrical">Electrical Engineering</option>
                  <option value="Mechanical">Mechanical Engineering</option>
                  <option value="SITE">SITE</option>
                </select>
              </div>
              <div class="col">
                <label for="username">Year</label>
                <!-- <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputGroupSelect01">Year</label>
                                </div> -->
                <select class="custom-select" id="inputGroupSelect01">
                  <option selected>Year</option>
                  <option value="1">First</option>
                  <option value="2">Second</option>
                  <option value="3">Third</option>
                  <option value="4">Fourth</option>
                  <option value="5">Fifth</option>
                </select>
              </div>
            </div>
            <button type="button" class="btn btn-success btn-detail-submit">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>

    <div class="col-3 form-card mb-5">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Edit Password</h5>
          <form>
            <div class="form-group-2">
              <div class="form-group-2-item">
                <label for="password">Current Password</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Old Password"
                />
              </div>
              <div class="form-group-2-item">
                <label for="password"> New Password</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="New Password"
                />
              </div>
              <div class="form-group-2-item">
                <label for="re-password">Repeat New Password</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="New password"
                />
              </div>
              <button type="button" class="btn btn-success btn-password-submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
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

label {
  padding-bottom: 10px;
  padding-left: 8px;
}

input {
  border: 1px solid black;
  border-radius: 10px;
}

.body-container {
  width: 83%;
  /* border: 1px solid; */
  position: absolute;
  right: 2vh;
  top: 8vh;
}

.form-container {
  z-index: 1;
}

.form-card {
  box-shadow: 1px 1px 20px 2px #928c8c;
  border-radius: 10px;
  margin: 100px;
  margin-bottom: 10px;
  margin-top: 25px;
  z-index: 200;
}

.card-body {
  text-align: start;
}

.card-body {
  position: relative;
}

.btn-success {
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
.btn-success:hover {
  background: #121c41;
}

.btn-detail-submit {
  margin-left: 30px;
  padding-inline: 20px;
}

.row {
  padding-bottom: 30px;
  padding-right: 30px;
  padding-left: 30px;
}

.input-group-prepend {
  padding-right: 20px;
}

.custom-select {
  width: 100%;
  height: 40px;
  border-radius: 10px;
  padding-left: 10px;
}

.form-group-2 {
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}

.btn-password-submit {
  margin-top: 20px;
  padding-inline: 20px;
}

.form-group-2-item {
  margin-top: 20px;
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