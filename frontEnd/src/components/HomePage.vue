<template>
  <div class="home-page">
    <div class="home-page__intro">
      <h3 class="home-page__title">Time And Attendance Tracking System</h3>
      <p class="home-page__content">Time and attendance tracking system concept landing page.Time and attendance tracking system concept landing page.Time and attendance tracking system concept landing page</p>
      <button class="btn btn-primary home-page__button">Get Started</button>
    </div>
    <div class="home-page__background">
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.home-page {
  display: flex;
  width: 100%;
}
.home-page__intro {
  width: 40%;
  margin: 140px 30px 280px;
  position: relative
}
.home-page__title {
  font-size: 38px;
  font-weight: 700;
  margin-bottom: 40px;
}
.home-page__content {
  font-size: 18px;
}
.home-page__button {
  width: 240px;
  height: 60px;
  font-size: 24px;
  border-radius: 50px;
  margin: auto;
  margin-top: 30px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.home-page__background {
  background-image: url(https://www.timelabs.in/images/moduleBox/ATTENDANCE.png);
  width: 100%;
  height: 100vh;
  background-size: 80%;
  background-repeat: no-repeat;
}
</style>