<template>
  <h3 class="tab-title" style="margin-left: 50px; color: #121c41">All users</h3>
  <hr />
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Department</th>
          <th scope="col">Year</th>
          <th scope="col">Positing</th>
          <th scope="col">Remove</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </th>
          <td>
            <img
              src="https://matx-react.ui-lib.com/assets/images/face-1.png "
              class="rounded-circle"
              alt="profile picture"
              width="50"
            />
            &nbsp; &nbsp; Mark
          </td>
          <td>civil</td>
          <td>3</td>
          <td>
            <button type="button" class="btn btn-link">
              <i class="fas fa-check-circle fa-lg"></i>
            </button>
          </td>
          <td>
            <button type="button" class="btn btn-link">
              <i class="fas fa-trash-alt fa-lg"></i>
            </button>
          </td>
        </tr>
        <tr>
          <th scope="row">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </th>
          <td>
            <img
              src="https://matx-react.ui-lib.com/assets/images/face-1.png "
              class="rounded-circle"
              alt="profile picture"
              width="50"
            />
            &nbsp; &nbsp; Mark
          </td>
          <td>civil</td>
          <td>3</td>
          <td>
            <button type="button" class="btn btn-link">
              <i class="fas fa-ban fa-lg"></i>
            </button>
          </td>
          <td>
            <button type="button" class="btn btn-link">
              <i class="fas fa-trash-alt fa-lg"></i>
            </button>
          </td>
        </tr>
        <tr>
          <th scope="row">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </th>
          <td>
            <img
              src="https://matx-react.ui-lib.com/assets/images/face-1.png "
              class="rounded-circle"
              alt="profile picture"
              width="50"
            />
            &nbsp; &nbsp; Mark
          </td>
          <td>civil</td>
          <td>3</td>
          <td>
            <button type="button" class="btn btn-link">
              <i class="fas fa-check-circle fa-lg" v-if="access == allowed"></i>
              <i class="fas fa-ban fa-lg" v-if="access == not - allowed"></i>
            </button>
          </td>
          <td>
            <button type="button" class="btn btn-link">
              <i class="fas fa-trash-alt fa-lg"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<style scoped>
.container {
  width: 90%;
  margin: 50px;
  margin-bottom: 25px;
  margin-top: 25px;
}
.fa-check-circle {
  color: #2ecc71;
}

.fa-ban {
  color: #e74c3c;
}

.fa-trash-alt {
  color: #e74c3c;
}
</style>