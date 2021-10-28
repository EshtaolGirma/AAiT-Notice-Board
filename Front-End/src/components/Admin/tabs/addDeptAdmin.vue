<template>
  <h3 class="tab-title" style="margin-left: 50px; color: #121c41">
    Add Department Admin
  </h3>
  <hr />

  <div class="card form-container">
    <div class="card-body">
      <h5 class="card-title">Department Admin Form</h5>
    </div>
    <form>
      <div class="row">
        <div class="col">
          <label for="username">Username</label>
          <input
            type="text"
            class="form-control"
            disabled
            placeholder="@Admin"
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
          <input type="text" class="form-control" placeholder="First name" />
        </div>
        <div class="col">
          <label for="username">Last Name</label>
          <input type="text" class="form-control" placeholder="Last name" />
        </div>
      </div>

      <div class="row">
        <div class="col-6">
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
      </div>

      <div class="row">
        <div class="col">
          <label for="username">Password</label>
          <input type="password" class="form-control" placeholder="****" />
        </div>
        <div class="col">
          <label for="username">Repeat Password</label>
          <input type="password" class="form-control" placeholder="****" />
        </div>
      </div>

      <button type="button" class="btn btn-success btn-detail-submit">
        Add
      </button>
    </form>
  </div>
</template>

<style scoped>
.card {
  margin: 50px;
  margin-bottom: 25px;
  margin-top: 25px;
}
a {
  text-decoration: none;
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
  width: 180px;
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

input {
  resize: none;
  border: 1px solid black;
  border-radius: 10px;
}

label {
  padding-bottom: 10px;
  padding-left: 8px;
}

.row {
  padding-bottom: 30px;
  padding-right: 30px;
  padding-left: 30px;
}

.custom-select {
  width: 100%;
  height: 40px;
  border-radius: 10px;
  padding-left: 10px;
}

.btn-detail-submit {
  margin-left: 30px;
  margin-bottom: 50px;
  padding-inline: 20px;
}
</style>