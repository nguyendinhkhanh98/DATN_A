<template>
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
</template>

<script>
export default {
  name: "FooterTableContent",
  
};
</script>

<style>
.footer-table-content {
  display: flex;
  justify-content: space-between;
  margin: 8px 16px;
}
.footer-table-content__label {
  font-size: 16px;
}
</style>