<template>
  <footer class="footer">
    <div class="container">
      <div class="left">
        <div class="col-a">
          <router-link class="header" :to="{ name: 'Home' }"
            >Attendance</router-link
          >
          <ul>
            <li>
              <a href="#"><youTube class="svg-icon" /></a>
            </li>
            <li>
              <a href="#"><twitter class="svg-icon" /></a>
            </li>
            <li>
              <a href="#"><instagram class="svg-icon" /></a>
            </li>
            <li>
              <a href="#"><linkedin class="svg-icon" /></a>
            </li>
          </ul>
        </div>
        <div class="col-b">
          <ul>
            <router-link class="link" :to="{ name: 'Home' }">About</router-link>
            <router-link class="link" :to="{}">Service</router-link>
            <router-link class="link" :to="{}">Community</router-link>
            <router-link class="link" :to="{ name: 'Login' }"
              >Login In / Register</router-link
            >
          </ul>
        </div>
      </div>
      <div class="right">
        <p>Copyright 2021 All Rights Reserved</p>
      </div>
    </div>
  </footer>
</template>

<script>
import youTube from "../assets/Icons/youtube-brands.svg";
import twitter from "../assets/Icons/twitter-brands.svg";
import instagram from "../assets/Icons/instagram-brands.svg";
import linkedin from "../assets/Icons/linkedin-brands.svg";
export default {
  name: "footer-vue",
  components: {
    youTube,
    twitter,
    instagram,
    linkedin,
  },
  computed: {},
};
</script>

<style scoped>
.footer {
  width: 100%;
  margin-top: auto;
  padding: 38px 28px;
  background-color: #303030;
}
.container {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.container > div {
  display: flex;
  flex: 1;
}

.left {
  gap: 32px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer .container .header {
  text-align: center;
  font-size: 24px;
  color: #fff;
  margin-bottom: 16px;
  text-decoration: none;
  font-weight: 600;
}

.footer .container ul {
  gap: 16px;
  list-style: none;
  display: flex;
}

.footer .container .col-a,
.col-b {
  gap: 32px;
  display: flex;
  flex: 1;
}

.footer .container .col-a {
  flex-direction: column;
}

.footer .container .col-a h2 {
  text-align: center;
}

.footer .container .col-a ul {
  margin-top: auto;
}

.footer .container .col-a ul li {
  display: flex;
  align-items: center;
}
.footer .container .col-a ul li .svg-icon {
  width: 24px;
  height: auto;
  color: #fff;
}

.footer .container .left .col-b ul {
  height: 100%;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
}

.footer .container .left .col-b .link {
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  text-decoration: none;
}

.footer .container .right {
  gap: 32px;
  color: #fff;
  align-items: center;
  flex-direction: column;
}

.footer .container p {
  margin-top: auto;
}

@media (min-width: 800px) {
  .footer .container {
    flex-direction: row;
    gap: 0px;
  }
  .footer .container .left {
    flex-direction: row;
    align-items: initial;
    gap: 0;
  }
  .footer .container .left .header {
    text-align: initial;
  }
  .footer .container .left .col-a,
  .col-b {
    gap: 0;
  }
  .footer .container .left .col-a h2 {
    text-align: initial;
  }
  .footer .container .left .col-b ul {
    flex-direction: column;
  }
  .footer .container .right {
    align-items: flex-end;
    gap: 0;
  }
}
</style>
