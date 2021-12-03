<template>
  <div class="navbar__wrap">
    <a class="closebtn" v-on:click="closeNav"><i class="fas fa-times"></i></a>
    <div class="nav-link">
      <i class="fa fa-fw fa-home"></i>
      <router-link :to="{ name: 'AttendanceAdmin'}">Dashboard</router-link>
    </div>
    <div class="nav-link">
      <i class="fas fa-users"></i>
      <router-link :to="{ name: 'EmployeeDetail'}">Employee</router-link>
    </div>
    <div class="nav-link">
      <i class="fas fa-calendar-alt"></i>
      <router-link :to="{ name: 'HolidayManagement'}">Holiday</router-link>
    </div>
    <div class="nav-link">
      <i class="fas fa-check-circle"></i>
      <router-link :to="{name: 'LeaveManagement'}">Leave</router-link>
    </div>
    <div class="nav-link">
      <i class="far fa-list-alt"></i>
      <router-link :to="{ name: 'TaskManagement'}">Task</router-link>
    </div>
    <div class="nav-link">
      <i class="fas fa-file"></i>
      <a href="#">HR Policies</a>
    </div>
    <div class="nav-link">
      <i class="fas fa-money-check-alt"></i>
      <a href="#">Salary</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  methods: {
    closeNav() {
      this.$emit("close-nav")
    }
  }
};
</script>

<style>
/* Style the navigation bar */
.navbar__wrap {
  width: 0;
  max-height: 800px;
  background-color: white;
  border: 1px solid #ccc;
  height: 100%;
  position: fixed;
  overflow-x: hidden;
  top: 0;
  left: 0;
  transition: 0.5s;
  padding-top: 115px;
}
.navbar__wrap .closebtn i{
  position: absolute;
  top: 18px;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}
.navbar__wrap .nav-link {
  display: flex;
  padding: 28px 36px 6px 6px;
  text-decoration: none;
  border-bottom: 1px solid #ccc;
  position: relative;
}
.navbar__wrap .nav-link i {
  font-size: 28px;
  margin-right: 8px;
  color: rgb(22, 22, 22);
}

.navbar__wrap .nav-link a {
  text-decoration: none;
  color: rgb(22, 22, 22);
  font-size: 18px;
  font-weight: 500;
  display: inline-block;
  align-self: flex-end;
  position: absolute;
  left: 46px;
  bottom: 2px;
}

/* Navbar links on mouse-over */
.navbar__wrap .nav-link a:hover {
  color: #78b43d;
}

/* Current/active navbar link */
.active {
  background-color: #04aa6d;
}

/* Add responsiveness - will automatically display the navbar vertically instead of horizontally on screens less than 500 pixels */
@media screen and (max-width: 500px) {
  .navbar__wrap .nav-link a {
    display: none;
    display: block;
  }
}
</style>