<template>
  <div>
    <div style="margin:20px 0;">
      <rty-pagination :prev="'prev'" :next="'next'" @change="changePage" :currentPage="currPage1" :pageCount="10"></rty-pagination>
    </div>
    <div style="margin:20px 0;display:flex;justify-content:center;align-items:center">
      <rty-pagination :pagerNum="5" @change="changePage2" :currentPage="currPage2" :pageCount="1000"></rty-pagination>
    </div>
  </div>
</template>

<script>
import rtyPagination from "../src/rtyPagination";
export default {
  components: {
    rtyPagination
  },
  data() {
    return {
      currPage1: 1,
      currPage2: 99
    }
  },
  methods: {
    changePage(val) {
      this.currPage1=val
    },
    changePage2(val) {
      this.currPage2=val
    }
  },
};
</script>

<style scoped>
</style>