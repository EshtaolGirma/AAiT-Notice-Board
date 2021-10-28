import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home.vue";
import Courses from "../components/courses/courses.vue";
import Departments from "../components/departments/departments.vue";
import Profile from "../components/profile/profile.vue";
import Signup from "../components/user/signup.vue";
import Login from "../components/user/login.vue";
import Admin from "../components/Admin/adminView.vue";
import About from "../components/Info/about.vue";
import ContentUs from "../components/Info/contact-us.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/courses",
    name: "Courses",
    component: Courses,
  },
  {
    path: "/departments",
    name: "Departments",
    component: Departments,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact-us",
    name: "Contact-Us",
    component: ContentUs,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
