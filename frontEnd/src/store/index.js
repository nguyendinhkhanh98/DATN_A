import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";

// import { account } from './modules/account';
import { alert } from './modules/alert';

Vue.use(Vuex);
// const _ = require("lodash");

export default new Vuex.Store({
  state: {
    optionItems: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    searchItem: "",
    keySearch: "",
    items: [
      {
        id: 1,
        employeeName: "admin",
        username: "admin",
        password: "admin",
        inTime: null,
        outTime: null,
        salary: 100,
        selected: false,
      },
      {
        id: 2,
        employeeName: "khanh",
        username: "khanh",
        password: "khanh",
        inTime: null,
        outTime: null,
        salary: 100,
        selected: false,
      },
      {
        id: 3,
        employeeName: "dung",
        username: "dung",
        password: "dung",
        inTime: null,
        outTime: null,
        salary: 100,
        selected: false,
      },
      {
        id: 4,
        employeeName: "duc",
        username: "duc",
        password: "duc",
        inTime: null,
        outTime: null,
        salary: 100,
        selected: false,
      },
      {
        id: 5,
        employeeName: "tuan",
        username: "tuan",
        password: "tuan",
        inTime: null,
        outTime: null,
        salary: 100,
        selected: false,
      },
      {
        id: 6,
        employeeName: "chau",
        username: "chau",
        password: "chau",
        inTime: null,
        outTime: null,
        salary: 100,
        selected: false,
      },
      {
        id: 7,
        employeeName: "quan",
        username: "quan",
        password: "quan",
        inTime: null,
        outTime: null,
        salary: 100,
        selected: false,
      },
      {
        id: 8,
        employeeName: "cuong",
        username: "cuong",
        password: "cuong",
        inTime: null,
        outTime: null,
        salary: 100,
        selected: false,
      },
      {
        id: 9,
        employeeName: "cuong",
        username: "cuong",
        password: "cuong",
        inTime: null,
        outTime: null,
        salary: 100,
        selected: false,
      },
      {
        id: 10,
        employeeName: "cuong",
        username: "cuong",
        password: "cuong",
        inTime: null,
        outTime: null,
        salary: 100,
        selected: false,
      },
      {
        id: 11,
        employeeName: "cuong",
        username: "cuong",
        password: "cuong",
        inTime: null,
        outTime: null,
        salary: 100,
        selected: false,
      },
      {
        id: 12,
        employeeName: "cuong",
        username: "cuong",
        password: "cuong",
        inTime: null,
        outTime: null,
        salary: 100,
        selected: false,
      },
      {
        id: 13,
        employeeName: "cuong",
        username: "cuong",
        password: "cuong",
        inTime: null,
        outTime: null,
        salary: 100,
        selected: false,
      },
      {
        id: 14,
        employeeName: "cuong",
        username: "cuong",
        password: "cuong",
        inTime: null,
        outTime: null,
        salary: 100,
        selected: false,
      },
      {
        id: 15,
        employeeName: "cuong",
        username: "cuong",
        password: "cuong",
        inTime: null,
        outTime: null,
        salary: 100,
        selected: false,
      },
    ],
    filteredItems: [],
    paginatedItems: [],
    selectedItems: [],
    pagination: {
      items: [],
      filteredItems: [],
      currentPage: null,
    },
    payloadData: {
      itemPerPage: 3,
      keySearch: "",
      currentPage: null,
      range: 5,
    },
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
  },
  getters: {
    filteredItems: (state) => {
      return state.filteredItems
    },

    paginatedItems: (state) => {
      return state.paginatedItems
    },

    pagination: (state) => {
      return state.pagination
    },

    selectedItems: (state) => {
      return state.selectedItems
    },

    items: (state) => {
      return state.items
    },

    optionItems: (state) => {
      return state.optionItems
    },

    payloadData: (state) => {
      return state.payloadData
    },

    paginationData: (state) => {
      return state.paginationData
    },

    userInfo: (state) => {
      return state.userInfo
    }
  },
  mutations: {
    SET_PAGINATION( state , payload ) {
      state.filteredItems = state.items.filter((ele) => {
        if(!payload) return ele;
        if(!payload.keySearch) {
          return ele
        }else {
          // co keysearch
          return ele.employeeName.toLowerCase().includes(payload.keySearch.toLowerCase())
        }
      })
      let numberOfPage = Math.ceil(
        state.filteredItems.length / payload.itemPerPage
      );
      state.pagination.items = [];
      for (var i = 0; i < numberOfPage; i++) {
        state.pagination.items.push(i + 1);
      }
      let start = 0
      let end = 0
      if (payload.currentPage < payload.range - 2) {
        start = 1
        end = start + payload.range - 1
      }
      else if (payload.currentPage <= state.pagination.items.length && payload.currentPage > state.pagination.items.length - payload.range + 2) {
        start = state.pagination.items.length - payload.range + 1
        end = state.pagination.items.length
      }
      else {
        start = payload.currentPage - 2
        end = payload.currentPage + 2
      }
      if (start < 1) {
        start = 1
      }
      if (end > state.pagination.items.length) {
        end = state.pagination.items.length
      }
      state.pagination.filteredItems = []
      for (var x = start; x <= end; x++) {
        state.pagination.filteredItems.push(x);
      }
      state.paginatedItems = state.filteredItems.filter((v, k) => {
        return Math.ceil((k + 1) / payload.itemPerPage) == payload.currentPage
      })
    },

    SEARCH_IN_THE_LIST(state, payload) {
      state.filteredItems = state.items.filter((ele) => {
        if(!payload) return ele;
        if(!payload.keySearch) {
          return ele
        }else {
          // co keysearch
          return ele.employeeName.toLowerCase().includes(payload.keySearch.toLowerCase())
        }
      })
      // state.filteredItems.forEach((v, k) => {
      //   v.id = k + 1;
      // })
      let numberOfPage = Math.ceil(
        state.filteredItems.length / payload.itemPerPage
      );
      state.pagination.items = [];
      for (var i = 0; i < numberOfPage; i++) {
        state.pagination.items.push(i + 1);
      }
      let start = 0
      let end = 0
      if (payload.currentPage < payload.range - 2) {
        start = 1
        end = start + payload.range - 1
      }
      else if (payload.currentPage <= state.pagination.items.length && payload.currentPage > state.pagination.items.length - payload.range + 2) {
        start = state.pagination.items.length - payload.range + 1
        end = state.pagination.items.length
      }
      else {
        start = payload.currentPage - 2
        end = payload.currentPage + 2
      }
      if (start < 1) {
        start = 1
      }
      if (end > state.pagination.items.length) {
        end = state.pagination.items.length
      }
      state.pagination.filteredItems = []
      for (var x = start; x <= end; x++) {
        state.pagination.filteredItems.push(x);
      }
      state.paginatedItems = state.filteredItems.filter((v, k) => {
        return Math.ceil((k + 1) / payload.itemPerPage) == payload.currentPage
      })
    },

    SELECT_PAGE(state, payload) {
      state.pagination.currentPage = payload.currentPage
      state.filteredItems = state.items.filter((ele) => {
        if(!payload) return ele;
        if(!payload.keySearch) {
          return ele
        }else {
          // co keysearch
          return ele.employeeName.toLowerCase().includes(payload.keySearch.toLowerCase())
        }
      })
      // state.filteredItems.forEach((v, k) => {
      //   v.id = k + 1;
      // })
      let numberOfPage = Math.ceil(
        state.filteredItems.length / payload.itemPerPage
      );
      state.pagination.items = [];
      for (var i = 0; i < numberOfPage; i++) {
        state.pagination.items.push(i + 1);
      }
      let start = 0
      let end = 0
      if (payload.currentPage < payload.range - 2) {
        start = 1
        end = start + payload.range - 1
      }
      else if (payload.currentPage <= state.pagination.items.length && payload.currentPage > state.pagination.items.length - payload.range + 2) {
        start = state.pagination.items.length - payload.range + 1
        end = state.pagination.items.length
      }
      else {
        start = payload.currentPage - 2
        end = payload.currentPage + 2
      }
      if (start < 1) {
        start = 1
      }
      if (end > state.pagination.items.length) {
        end = state.pagination.items.length
      }
      state.pagination.filteredItems = []
      for (var x = start; x <= end; x++) {
        state.pagination.filteredItems.push(x);
      }
      state.paginatedItems = state.filteredItems.filter((v, k) => {
        return Math.ceil((k + 1) / payload.itemPerPage) == payload.currentPage
      })
    },
    ADD_ITEM(state, payload) {
      state.items.unshift(payload)
    },
    EDIT_INFO_ITEM(state, payload) {
      state.items = state.items.map(item => item.id === payload.id ? payload: item)
    },
    DELETE_ITEM(state, payload) {
      state.items = state.items.filter(item => item.id != payload)
    },
    UPDATE_USERINFO(state, payload) {
      state.userInfo = payload;
    }
  },
  actions: {
    setPagination({ commit }, payload) {
      commit("SET_PAGINATION", payload);
    },

    searchInTheList({ commit }, payload) {
      commit("SEARCH_IN_THE_LIST", payload);
    },

    selectPage({ commit }, payload) {
      commit("SELECT_PAGE", payload)
    },

    addItem( {commit}, payload) {
      console.log(payload)
      commit("ADD_ITEM", payload)
    },

    editInfoItem({ commit }, payload) {
      commit("EDIT_INFO_ITEM", payload)
    },  

    deleteItem({commit}, payload) {
      commit("DELETE_ITEM", payload)
    },

    updateUserInfo({commit}, payload) {
      commit("UPDATE_USERINFO", payload)
    }
  },
  modules: {
    // account,
    alert
  }
})