<template>
  <div class="container__content">
    <div class="container__task-bar">
      <button type="button" class="btn btn-primary task-bar__add" v-on:click="addItems">Add Employee</button>
      <button type="button" class="btn btn-primary task-bar__detail">Employee Detail</button>
    </div>
    <div class="container__table">
      <div class="table-content__header">
        <div class="form-group table-content__select">
          <select
            class="form-control table-content__select-page"
            id="table-content__select-id"
            name="action"
            v-model="itemPerPage"
            v-on:change="onChangePerPage"
          >
            <option
              v-for="optionItem in optionItems"
              v-bind:key="optionItem"
              v-bind:value="optionItem"
            >
              {{ optionItem }}
            </option>
          </select>
          <label
            for="table-content__select-id"
            class="table-content__select-label"
            >Record per page: {{ itemPerPage }}</label
          >
        </div>
        <div class="table-content__search">
          <label
            for="table-content__search-input"
            class="table-content__search-label"
            >Search:</label
          >
          <input
            type="text"
            id="table-content__search-input"
            class="table-content__search-input"
            v-model="keySearch"
            v-on:keyup="searchInTheList()"
          />
        </div>
      </div>
      <table class="table table-bordered table__employee-detail">
        <thead>
          <tr>
            <th scope="col" class="table-item">Task Given To</th>
            <th scope="col" class="table-item">Task <i class="fas fa-sort"></i></th>
            <th scope="col" class="table-item">Out come <i class="fas fa-sort"></i></th>
            <th scope="col" class="table-item"></th>
            <th scope="col" class="table-item"></th>
            <th scope="col" class="table-item"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Anh Hong</th>
            <td>Test Module</td>
            <td></td>
            <td><button type="button" class="btn btn-primary">Edit</button></td>
            <td><button type="button" class="btn btn-danger">Reply for Outcome</button></td>
            <td><button type="button" class="btn btn-warning">Close</button></td>
          </tr>
        </tbody>
      </table>
      <div class="footer-table-content">
        <span class="footer-table-content__label"
          >Showing 41 to 46 entires</span
        >
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a
                class="page-link"
                @click="selectPage(pagination.currentPage - 1)"
                v-bind:class="{
                  disabled:
                    this.pagination.currentPage == this.pagination.items[0] ||
                    this.pagination.items.length === 0,
                }"
              >
                Previous
              </a>
            </li>
            <li
              class="page-item"
              v-for="item in pagination.filteredItems"
              v-bind:key="item"
            >
              <a
                class="page-link"
                v-on:click="selectPage(item)"
                v-bind:class="{ 'is-info': item === pagination.currentPage }"
              >
                {{ item }}
              </a>
            </li>
            <li class="page-item">
              <a
                class="page-link"
                @click="selectPage(pagination.currentPage + 1)"
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
// import Navigation from "../components/Navigation";
// import HeaderTableContent from "../components/HeaderTableContent"
import { mapGetters } from 'vuex'


export default {
  name: "Content",
  components: {
    // Navigation,
    // HeaderTableContent
  },
  data() {
    return {
      keySearch: "",
      itemPerPage: 3,
    };
  },
  computed: {
    ...mapGetters([
      'optionItems',
      'items',
      'selectedItems',
      'filteredItems',
      'pagination',
      'paginatedItems',
      'payloadData'
    ]),
  },
  created() {
    this.$store.dispatch("setPagination", {
      itemPerPage: 3,
      keySearch: "",
      range: 5,
      currentPage: 2,
    })
    this.$store.dispatch("selectPage", {
      keySearch: "",
      itemPerPage: 3,
      currentPage: 1,
      range: 5,
    })
  },
  methods: {
    searchInTheList() {
      this.$store.dispatch("searchInTheList", {
        ...this.payloadData,
        keySearch: this.keySearch,
        itemPerPage: this.itemPerPage,
        currentPage: 1,
      })
    },

    onChangePerPage() {
      this.$store.dispatch("setPagination", {
        ...this.payloadData,
        itemPerPage: this.itemPerPage,
        currentPage: 1,
      })
    },

    selectPage(item) {
      this.$store.dispatch("selectPage", {
        ...this.payloadData,
        currentPage: item,
        itemPerPage: this.itemPerPage,
        keySearch: this.keySearch,
      })
    },
    addItems() {
      
    }
  },
};
</script>

<style scoped>
/* Table */
.container__content {
  display: flex;
  flex-direction: column;
  padding: 40px;
}
.container__task-bar {
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 8px;
}
.task-bar__add {
  width: 150px;
  height: 38px;
}
.task-bar__detail {
  margin-right: 20px;
  width: 150px;
  height: 38px;
}
.container__table {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
}
.table__employee-detail {
  overflow-x: auto;
}
.table-item i {
  display: inline-block;
  margin-left: 12px;
}
/* Modified */
.is-info {
  background-color: rgb(76, 101, 240);
}

/* Header Table Content */
.table-content__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
}

.table-content__select {
  display: flex;
  align-items: center;
}
.table-content__select-label {
  color: #000;
  font-size: 16px;
  margin: 0 0 0 8px;
}
.table-content__select-page {
  width: 80px;
}

select.form-control:not([size]):not([multiple]) {
  height: 32px !important;
}

.table-content__search-label {
  margin-right: 8px;
}
.table-content__search-input {
  text-indent: 10px;
  border: 1px solid #7c7b7b;
  border-radius: 3px;
  height: 30px;
}
.table-content__search-input:focus {
  outline: none;
}

/* Footer Table Content */
.footer-table-content {
  display: flex;
  justify-content: space-between;
  margin: 8px 16px;
}
.footer-table-content__label {
  font-size: 16px;
}
</style>