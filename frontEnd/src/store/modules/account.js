import { userService } from "../../services";
import router from '../../router';

const user = JSON.parse(localStorage.getItem('user'));

const state = user ? { status: { loggedIn: true }, user } : { status: {}, user: null }

const actions = {
  login({ dispatch, commit }, { username, password }) {
    commit('loginRequest', { username });
    userService.loginUser(username, password)
      .then(
        user => {
          commit('loginSuccess', user);
          router.push('/');
        },
        error => {
          commit('loginFailure', error);
          dispatch('alert/error', error, {root: true});
        }
      )
  },

  logout({commit}) {
    userService.logoutUser;
    commit("logout");
  },

  register({dispatch, commit}, user) {
    commit("registerRequest", user);
    userService.registerUser(user)
      .then(
        user => {
          commit("registerSuccess", user); // mở thông báo đã đăng kí thành công
          // commit updateUserInfo

          router.push('/login');
          setTimeout(() => {
            dispatch("alert/success", 'Registration successful', {root: true});
          })
        },
        error => {
          commit("registerFailure", error);
          dispatch("alert/error", error), {root: true};
        }
      )
  }
};

const mutations = {
  loginRequest(state, user) {
    state.status = {loggedIn: true};
    state.user = user;
  },
  logginSuccess(state, user) {
    state.status = {logginIn: true}
    state.user = user
  },
  loginFailure(state) {
    state.status = {}
    state.user = null
  },
  logout(state) {
    state.status = {};
    state.user = null
  },
  registerRequest(state) {
    state.status = { registering: true };
  },
  registerSuccess(state) {
      state.status = {};
  },
  registerFailure(state) {
      state.status = {};
  }
}

export const account = {
  namespaced: true,
  state,
  actions,
  mutations
}