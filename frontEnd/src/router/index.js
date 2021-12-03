import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ForgotPassword from "../views/ForgotPassword"
import AttendanceAdmin from "../views/AttendanceAdmin"
import AttendanceEmployee from "../views/AttendanceEmployee"
import EmployeeDetail from "../views/EmployeeDetail"
import LeaveManagement from "../views/LeaveManagement"
import HolidayManagement from "../views/HolidayManagement"
import TaskManagement from "../views/TaskManagement"
import DailyReport from "../views/DailyReport"

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: "Login",
      requiresAuth: false,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      title: "Register",
      requiresAuth: false,
    },
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
    
    meta: {
      title: "Forgot Password",
      requiresAuth: false,
    },
  },
  {
    path: "/employee-detail",
    name: "EmployeeDetail",
    component: EmployeeDetail,
    meta: {
      title: "Employee Detail",
      requiresAuth: false,
    },
  },
  {
    path: "/attendance-admin",
    name: "AttendanceAdmin",
    component: AttendanceAdmin,
    meta: {
      title: "Attendance Admin",
      requiresAuth: false,
    },
  },
  {
    path: "/attendance-employee",
    name: "AttendanceEmployee",
    component: AttendanceEmployee,
    meta: {
      title: "Attendance Employee",
      requiresAuth: false,
    },
  },
  {
    path: "/leave-management",
    name: "LeaveManagement",
    component: LeaveManagement,
    meta: {
      title: "Leave Management",
      requiresAuth: false,
    },
  },
  {
    path: "/holiday-management",
    name: "HolidayManagement",
    component: HolidayManagement,
    meta: {
      title: "Holiday Management",
      requiresAuth: false,
    },
  },
  {
    path: "/task-management",
    name: "TaskManagement",
    component: TaskManagement,
    meta: {
      title: "Task Management",
      requiresAuth: false,
    },
  },
  {
    path: "/daily-report",
    name: "DailyReport",
    component: DailyReport,
    meta: {
      title: "Daily Report",
      requiresAuth: false,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if(authRequired && !loggedIn) {
    return next('/login')
  }

  next();
})

export default router