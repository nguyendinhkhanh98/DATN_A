<template>
  <div class="form-wrap">
    <form class="register">
      <p class="login-register">
        Already have an account?
        <router-link class="router-link" :to="{ name: 'Login' }"
          >Login</router-link
        >
      </p>
      <h2>Create Account</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="First Name" name="firstName"
            v-model="user.firstname" 
            v-validate="'required'"
            :class="{ 'is-invalid' : submitted && !errors.has('firstName') }"
          />
          <div class="invalid-feedback"
            v-if="submitted && error.has('firstName')"
          >
            {{errors.first('firstName')}}</div>
          <user class="icon" />
        </div>
        <div class="input">
          <input type="text" placeholder="Last Name" name="lastName"
            v-model="user.lastName" 
            v-validate="'required'"
            :class="{ 'is-invalid' : submitted && !errors.has('lastName') }"
          />
          <div class="invalid-feedback"
            v-if="submitted && error.has('lastName')"
          >
            {{errors.first('lastName')}}</div>
          <user class="icon" />
        </div>
        <div class="input">
          <input type="text" placeholder="User Name" name="username"
            v-model="user.username" 
            v-validate="'required'"
            :class="{ 'is-invalid' : submitted && !errors.has('username') }"
          />
          <div class="invalid-feedback"
            v-if="submitted && error.has('username')"
          >
            {{errors.first('username')}}</div>
          <user class="icon" />
        </div>
        <div class="input">
          <input type="text" placeholder="Email" name="email"
            v-model="user.email" 
            v-validate="'required'"
            :class="{ 'is-invalid' : submitted && !errors.has('email') }"
          />
          <div class="invalid-feedback"
            v-if="submitted && error.has('email')"
          >
            {{errors.first('email')}}</div>
          <email class="icon" />
        </div>
        <div class="input">
          <input type="text" placeholder="Password" name="password"
            v-model="user.password" 
            v-validate="'required'"
            :class="{ 'is-invalid' : submitted && !errors.has('password') }"
          />
          <div class="invalid-feedback"
            v-if="submitted && error.has('password')"
          >
            {{errors.first('password')}}</div>
          <password class="icon" />
        </div>
        <div v-show="error" class="error">{{ this.errorMsg }}</div>
      </div>
      <button @click.prevent="handleSubmit">Sign Up</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
import email from "../assets/Icons/envelope-regular.svg";
import password from "../assets/Icons/lock-alt-solid.svg";
import user from "../assets/Icons/user-alt-light.svg";

import { mapState, mapActions } from 'vuex' 

export default {
  name: "Register",
  components: {
    email,
    password,
    user,
  },
  data() {
    return {
      user: {
        firstname: "",
        lastName: "",
        username: "",
        password: "",
        email: "",
      },
      submitted: false
    }
  },
  computed: {
    ...mapState('account', ['status'])
  },
  methods: {
    ...mapActions('account', ['register']),
    handleSubmit() {
      this.submitted = true;
      this.$validator.validate().then(valid => {
        if(valid) {
          this.register(this.user)
        } else {
          // thong bao ...
        }
      })
    }
  },
};
</script>

<style scoped>
.register h2 {
  max-width: 350px;
}
.form-wrap {
  overflow: hidden;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-self: center;
  margin: 0 auto;
  width: 90%;
}
.register {
  padding: 0 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
}

.form-wrap form .inputs .input input {
  width: 100%;
  border: none;
  background-color: #f2f7f6;
  padding: 4px 4px 4px 30px;
  height: 50px;
}
.form-wrap form .inputs .input {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
}
.form-wrap form .inputs .input i {
  position: absolute;
  left: 6px;
}

button {
  transition: all 0.5s ease;
  cursor: pointer;
  margin-top: 24px;
  padding: 12px 24px;
  background-color: #303030;
  color: #fff;
  border-radius: 20px;
  border: none;
  text-transform: uppercase;
}
</style>
