<template>
  <div class="body-container">
    <div class="container2">
      <h3 style="margin-top: 15px; margin-bottom: 40px; color: #121c41">
        Admin control Center
      </h3>
    </div>
    <!-- Tabs navigation control  -->
    <nav>
      <div class="nav nav2 nav-tabs" id="nav-tab" role="tablist">
        <a
          class="nav-item nav-link active"
          id="nav-user-list-tab"
          data-toggle="tab"
          href="#nav-user-list"
          role="tab"
          aria-controls="nav-user-list"
          aria-selected="true"
          >User List</a
        >

        <a
          class="nav-item nav-link"
          id="nav-deptAdmin-list-tab"
          data-toggle="tab"
          href="#nav-deptAdmin-list"
          role="tab"
          aria-controls="nav-deptAdmin-list"
          aria-selected="false"
          >Department Admins List</a
        >

        <a
          class="nav-item nav-link"
          id="nav-add-deptAdmin-tab"
          data-toggle="tab"
          href="#nav-add-deptAdmin"
          role="tab"
          aria-controls="nav-add-deptAdmin"
          aria-selected="false"
          >Add New Department Admin</a
        >

        <a
          class="nav-item nav-link"
          id="nav-add-department-tab"
          data-toggle="tab"
          href="#nav-add-department"
          role="tab"
          aria-controls="nav-add-department"
          aria-selected="false"
          >Add New Department</a
        >
      </div>
    </nav>
    <!-- end of tabs navigation control -->

    <!-- tabs content -->
    <div class="tab-content" id="nav-tabContent">
      <!-- list of users tab -->
      <div
        class="tab-pane fade show active"
        id="nav-user-list"
        role="tabpanel"
        aria-labelledby="nav-user-list-tab"
      >
        <UserList />
      </div>
      <!-- end of list of users tab -->

      <!-- list of department admin tab -->
      <div
        class="tab-pane fade"
        id="nav-deptAdmin-list"
        role="tabpanel"
        aria-labelledby="nav-deptAdmin-list-tab"
      >
        <DeptAdminList />
      </div>
      <!-- end of list of department admin tab -->

      <!-- Add new department admin tab -->
      <div
        class="tab-pane fade"
        id="nav-add-deptAdmin"
        role="tabpanel"
        aria-labelledby="nav-add-deptAdmin-tab"
      >
        <AddDeptAdmin />
      </div>
      <!-- end of add new department admin tab -->

      <!-- Add new department tab -->
      <div
        class="tab-pane fade"
        id="nav-add-department"
        role="tabpanel"
        aria-labelledby="nav-add-department-tab"
      >
        <AddDepartment />
      </div>
      <!-- end of add new department tab -->
    </div>
    <!-- end of tabs content -->
  </div>
</template>

<script>
import AddDepartment from "./tabs/addDepartment.vue";
import AddDeptAdmin from "./tabs/addDeptAdmin.vue";
import DeptAdminList from "./tabs/deptAdminList.vue";
import UserList from "./tabs/userList.vue";

export default {
  components: {
    AddDepartment,
    AddDeptAdmin,
    DeptAdminList,
    UserList,
  },
};
</script>

<style>
.container2,
.nav2 {
  margin: 50px;
  margin-bottom: 25px;
  margin-top: 25px;
}
.body-container {
  width: 80%;
  /* border: 1px solid; */
  position: absolute;
  right: 2vh;
  top: 8vh;
}

.tab-pane {
  margin-top: 50px;
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