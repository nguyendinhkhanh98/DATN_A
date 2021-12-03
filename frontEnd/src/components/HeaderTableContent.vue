<template>
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
      <label for="table-content__select-id" class="table-content__select-label"
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
</template>

<script>
import { mapGetters } from 'vuex'


export default {
  name: "HeaderTableContent",
  components: {
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
  },
};
</script>

<style scoped>
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
</style>