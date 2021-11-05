<template>
  <h3 class="tab-title" style="margin-left: 50px; color: #121c41">All users</h3>
  <hr />
  <div class="container">
    <table class="table" style="text-align: left">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Department</th>
          <th scope="col">Year</th>
          <th scope="col">Positing</th>
          <th scope="col">Remove</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user._id">
          <td>
            <img
              src="https://matx-react.ui-lib.com/assets/images/face-1.png "
              class="rounded-circle"
              alt="profile picture"
              width="40"
            />
            &nbsp; &nbsp; {{ user.username }}
          </td>
          <td>
            <span v-if="user.deptId">{{ user.deptId.name }}</span>
          </td>
          <td>{{ user.year }}</td>
          <td>
            <button type="button" class="btn btn-link">
              <i class="fas fa-check-circle fa-lg"></i>
            </button>
          </td>
          <td>
            <button
              v-on:click="remove(user._id)"
              type="button"
              class="btn btn-link"
            >
              <i class="fas fa-trash-alt fa-lg"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },

  mounted() {
    this.get();
  },

  methods: {
    get() {
      fetch("http://localhost:3000/api/User/student")
        .then((res) => res.json())
        .then((data) => {
          this.users = data;
          console.log(data);
        })
        .catch((err) => console.log(err.message));
    },

    remove(id) {
      if (confirm("Are you sure you want to delete this user?")) {
        fetch("http://localhost:3000/api/User/student/" + id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          // body: JSON.stringify({: this.title}),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            this.get();
            // window.location.reload();
          })
          .catch((err) => console.log(err.message));
      }
    },
  },
};
</script>



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