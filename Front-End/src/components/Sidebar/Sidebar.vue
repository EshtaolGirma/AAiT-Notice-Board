<template>
  <div class="wrapper">
    <!-- Sidebar  -->
    <nav id="sidebar">
      <div class="sidebar-header">
        <router-link to="/"
          ><img src="../../assets/logo.png" style="width: 180px" alt="logo" />
          <!-- <span style="font-size: 18px">AAiT Notice</span> -->
        </router-link>
      </div>

      <ul class="list-unstyled components">
        <li>
          <router-link to="/"><i class="fas fa-home"></i>Home</router-link>
        </li>

        <li>
          <router-link to="/about"
            ><i class="fas fa-question-circle"></i>About</router-link
          >
        </li>
        <li>
          <a
            href="#pageSubmenu"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle"
            ><i class="fas fa-book"></i>Departments</a
          >
          <ul class="collapse list-unstyled" id="pageSubmenu">
            <li>
              <router-link to="/"><i class="fas fa-book"></i>Pre</router-link>
            </li>
            <li>
              <router-link to="/"
                ><i class="fas fa-microscope"></i>BioMedical</router-link
              >
            </li>
            <li>
              <router-link to="/"
                ><i class="fas fa-bong"></i>Chemical</router-link
              >
            </li>
            <li>
              <router-link to="/"
                ><i class="fas fa-drafting-compass"></i>Civil</router-link
              >
            </li>
            <li>
              <router-link to="/"
                ><i class="fas fa-car-battery"></i>Electrical</router-link
              >
            </li>
            <li>
              <router-link to="/">
                <i class="fas fa-wrench"></i>Mechanical</router-link
              >
            </li>
            <li>
              <router-link to="/"
                ><i class="fas fa-laptop-code"></i>SITE</router-link
              >
            </li>
          </ul>
        </li>
        <li></li>
        <li>
          <a
            href="#pageSubmenu2"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle"
            ><i class="fas fa-user"></i>Accounts</a
          >
          <ul class="collapse list-unstyled" id="pageSubmenu2">
            <li>
              <router-link to="/profile"
                ><i class="fas fa-user-circle"></i>Profile</router-link
              >
            </li>
            <li>
              <router-link to="/"
                ><i class="fas fa-cog"></i>Settings</router-link
              >
            </li>
            <li>
              <router-link to="/"
                ><i class="fas fa-sign-out-alt"></i>Logout</router-link
              >
            </li>
          </ul>
        </li>

        <li>
          <router-link to="/contact-us"
            ><i class="fas fa-id-card-alt"></i>Contact Us</router-link
          >
        </li>
      </ul>
    </nav>

    <!-- Page Content  -->
    <div id="content">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button
            type="button"
            id="sidebarCollapse"
            class="btn"
            style="background: #121c41"
          >
            <i class="fas fa-align-left" style="color: #fff"></i>
            <!-- <span>Toggle Sidebar</span> -->
          </button>

          <ul class="nav navbar-nav ml-auto">
            <li class="nav-item active">
              <router-link to="/">
                Mark &nbsp; &nbsp;
                <img
                  src="https://matx-react.ui-lib.com/assets/images/face-1.png "
                  class="rounded-circle"
                  alt="profile picture"
                  width="35"
                />
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
p {
  font-family: "Poppins", sans-serif;
  font-size: 1.1em;
  font-weight: 300;
  line-height: 1.7em;
  color: #999;
}

a,
a:hover,
a:focus {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
}

.navbar {
  padding: 5px 10px;
  background: #fff;
  border: none;
  border-radius: 0;
  margin-bottom: 40px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.navbar-btn {
  box-shadow: none;
  outline: none !important;
  border: none;
}

/* ---------------------------------------------------
    SIDEBAR STYLE
----------------------------------------------------- */

.wrapper {
  display: flex;
  width: 100%;
}

#sidebar {
  width: 250px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 999;
  background: #121c41;
  color: #fff;
  transition: all 0.3s;
  text-align: left;
  padding: 7px;
}

#sidebar.active {
  margin-left: -250px;
}

#sidebar .sidebar-header {
  padding-left: 25px;
  /* background: rgb(240, 237, 237); */
}

#sidebar ul.components {
  padding: 10px 0;
}

#sidebar ul p {
  color: #fff;
  padding: 10px;
}

#sidebar ul li a {
  padding: 15px;
  font-size: 1em;
  display: block;
}

#sidebar ul li a:hover {
  /* color: #293666; */
  background: #707380;
}

#sidebar ul li.active > a,
a[aria-expanded="true"] {
  color: #fff;
  background: #1d2852;
}

a[data-toggle="collapse"] {
  position: relative;
}

.dropdown-toggle::after {
  display: block;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}

ul ul a {
  font-size: 0.9em !important;
  padding-left: 30px !important;
  background: #313f7a;
}

ul.CTAs {
  padding: 20px;
}

ul.CTAs a {
  text-align: center;
  font-size: 0.9em !important;
  display: block;
  border-radius: 5px;
  margin-bottom: 5px;
}

a.download {
  background: #fff;
  color: #7386d5;
}

a.article,
a.article:hover {
  background: #6d7fcc !important;
  color: #fff !important;
}

/* ---------------------------------------------------
    CONTENT STYLE
----------------------------------------------------- */

#content {
  width: calc(100% - 250px);
  /* padding-bottom: 40px; */
  min-height: 100vh;
  transition: all 0.3s;
  position: absolute;
  top: 0;
  right: 0;
}

#content.active {
  width: 100%;
}
.fas {
  padding-right: 15px;
}
/* ---------------------------------------------------
    MEDIAQUERIES
----------------------------------------------------- */

@media (max-width: 768px) {
  #sidebar {
    margin-left: -250px;
  }
  #sidebar.active {
    margin-left: 0;
  }
  #content {
    width: 100%;
  }
  #content.active {
    width: calc(100% - 250px);
  }
  #sidebarCollapse span {
    display: none;
  }
}
</style>
