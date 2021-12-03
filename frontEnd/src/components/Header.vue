<template>
  <header class="wrap">
    <nav class="container">
      <div class="branding">
        <button v-on:click="openNavigation" class="branding-button">Attendance</button>
        <Navigation id="navigation" v-on:close-nav="setNoneWidth"/>
      </div>
      <div class="nav-links">
        <ul v-show="!mobile" class="nav-links__menu">
          <router-link class="link" :to="{}">About</router-link>
          <router-link class="link" :to="{}">Service</router-link>
          <router-link class="link" :to="{ name: 'CreatePost' }">Community</router-link
          >
          <router-link class="link" :to="{ name: 'Login' }">Login/Register</router-link
          >
        </ul>
        <div
          :class="{ 'mobile-user-menu': mobile }"
          class="profile"
          ref="profile"
        >
          <span>{{ this.$store.state.profileInitials }}</span>
          <div v-show="profileMenu" class="profile-menu">
            <div class="info">
              <p class="initials">{{ this.$store.state.profileInitials }}</p>
              <div class="right">
                <p>
                  {{ this.$store.state.profileFirstName }}
                  {{ this.$store.state.profileLastName }}
                </p>
                <p>{{ this.$store.state.profileUsername }}</p>
                <p>{{ this.$store.state.profileEmail }}</p>
              </div>
            </div>
            <div class="options">
              <div class="option">
                <router-link class="option" :to="{ name: 'Profile' }">
                  <userIcon class="icon" />
                  <p>Profile</p>
                </router-link>
              </div>
              <div class="option">
                <router-link class="option" :to="{ name: 'Admin' }">
                  <adminIcon class="icon" />
                  <p>Admin</p>
                </router-link>
              </div>
              <div class="option">
                <signOutIcon class="icon" />
                <p>Sign Out</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <menuIcon class="menu-icon" v-show="mobile" />
    <transition name="mobile-nav">
      <ul class="mobile-nav" v-show="mobileNav">
        <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
        <router-link class="link" :to="{ name: 'Blogs' }">ABC</router-link>
        <router-link class="link" :to="{ name: 'CreatePost' }"
          >Create Post</router-link
        >
        <router-link class="link" :to="{ name: 'Login' }"
          >Login/Register</router-link
        >
      </ul>
    </transition>
  </header>
</template>

<script>
import menuIcon from "../assets/Icons/bars-regular.svg";
import userIcon from "../assets/Icons/user-alt-light.svg";
import adminIcon from "../assets/Icons/user-crown-light.svg";
import signOutIcon from "../assets/Icons/sign-out-alt-regular.svg";
import Navigation from './Navigation';

export default {
  name: "Header",
  components: {
    Navigation,
    menuIcon,
    userIcon,
    adminIcon,
    signOutIcon
  },
  data() {
    return {
      profileMenu: null,
      mobile: null,
      mobileNav: null,
      windownWidth: null,
    };
  },
  created() {},
  methods: {
    openNavigation() {
      document.getElementById("navigation").style.width = "250px";
      this.$emit('open-navigation');
    },
    setNoneWidth() {
      document.getElementById("navigation").style.width = "0";
      this.$emit('close-app-wrap')
    }
  },
  computed: {},
};
</script>

<style scoped>
.wrap {
  background-color: #fff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 99;
  height: 100px;
}

.container {
  display: flex;
  align-items: center;
}

.branding-button {
  transition: all 0.5s ease;
  cursor: pointer;
  padding: 16px 36px;
  background-color: #303030;
  color: #fff;
  border-radius: 20px;
  border: none;
  text-transform: uppercase;
}

.wrap .link {
  font-weight: 500;
  padding: 0 8px;
  transition: 0.3s color ease;
  margin-right: 32px;
}

.link:last-child {
  margin-right: 0;
}

.wrap .link:hover {
  color: #1eb8b8;
  text-decoration: none;
}

.container {
  display: flex;
  padding: 25px 0;
}

.branding {
  margin: auto;
}

.header {
  font-weight: 600;
  font-size: 24px;
  color: #000;
  text-decoration: none;
}

.nav-links {
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
}

.nav-links__menu {
  margin: 0;
}

.profile {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  background-color: #303030;
}

span {
  pointer-events: none;
}

.profile-menu {
  position: absolute;
  top: 60px;
  right: 0;
  width: 250px;
  background-color: #303030;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.info {
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #fff;
}

.initials {
  position: initial;
  width: 40px;
  height: 40px;
  background-color: #fff;
  color: #303030;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.right p:nth-child(1) {
  font-size: 14px;
}

.right p:nth-child(2),
p:nth-child(3) {
  font-size: 12px;
}

.options {
  padding: 15px;
}
.option {
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}
.options .option .icon {
  width: 18px;
  height: auto;
}

.options .option:last-child {
  margin-bottom: 0px;
}

.options .option p {
  font-size: 14px;
  margin-left: 12px;
}

.mobile-user-menu {
  margin-right: 40px;
}

.menu-icon {
  cursor: pointer;
  position: absolute;
  top: 32px;
  right: 25px;
  height: 25px;
  width: auto;
}

.mobile-nav {
  padding: 20px;
  width: 70%;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  background-color: #303030;
  top: 0;
  left: 0;
}

.mobile-nav .link {
  padding: 15px 0;
  color: #fff;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 1s ease;
}
.mobile-nav-enter {
  transform: translateX(-250px);
}
.mobile-nav-enter-to {
  transform: translateX(0);
}
.mobile-nav-leave-to {
  transform: translateX(-250px);
}

</style>