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
            v-model="pagination.itemPerPage"
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
            >Record per page: {{ pagination.itemPerPage }}</label
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
            v-model="searchItem"
            v-on:keyup="searchInTheList(searchItem)"
          />
        </div>
      </div>
      <table id="dtBasicExample" class="table table-bordered table__employee-detail">
        <thead>
          <tr>
            <th scope="col" class="table-item">
              Date <i class="fas fa-sort"></i>
            </th>
            <th scope="col" class="table-item">
              In Time <i class="fas fa-sort"></i>
            </th>
            <th scope="col" class="table-item">
              Out Time <i class="fas fa-sort"></i>
            </th>
            <th scope="col" class="table-item">
              Administrator Remarks <i class="fas fa-sort"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in paginatedItems" v-bind:key="index">
            <th scope="row">{{ item.date }}</th>
            <td>{{ item.inTime }}</td>
            <td>{{ item.outTime }}</td>
            <td></td>
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
              v-for="item in this.pagination.filteredItems"
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

    <!-- Form edit data -->
    <div class="modal fade modalEditClass" id="modalFormEdit" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header text-center">
            <h4 class="modal-title w-100 font-weight-bold text-secondary ml-5">Edit form</h4>
            <button type="button" class="close text-secondary" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body mx-3">
            <div class="md-form mb-5">
              <input type="text" id="formNameEdit" class="form-control validate">
              <label data-error="wrong" data-success="right" for="formNameEdit">Name</label>
            </div>

            <div class="md-form mb-5">
              <input type="text" id="formPositionEdit" class="form-control validate">
              <label data-error="wrong" data-success="right" for="formPositionEdit">Position</label>
            </div>

            <div class="md-form mb-5">
              <input type="text" id="formOfficeEdit" class="form-control validate">
              <label data-error="wrong" data-success="right" for="formOfficeEdit">Office</label>
            </div>

            <div class="md-form mb-5">
              <input type="text" id="formAgeEdit" class="form-control validate">
              <label data-error="wrong" data-success="right" for="formAgeEdit">Age</label>
            </div>

            <div class="md-form mb-5">
              <input type="text" id="formDateEdit" class="form-control datepicker">
              <label data-error="wrong" data-success="right" for="formDateEdit">Date</label>
            </div>

            <div class="md-form mb-5">
              <input type="text" id="formSalaryEdit" class="form-control validate">
              <label data-error="wrong" data-success="right" for="formSalaryEdit">Salary</label>
            </div>


          </div>
          <div class="modal-footer d-flex justify-content-center editInsideWrapper">
            <button class="btn btn-outline-secondary btn-block editInside" data-dismiss="modal">Edit
              form
              <i class="fas fa-paper-plane-o ml-1"></i>
            </button>
          </div>
        </div>
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