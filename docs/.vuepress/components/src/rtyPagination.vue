<template>
  <ul @click="onPagerClick" class="rty-pagination flex-align-center">
    <li v-if="currentPage>1" class="prev">{{prev}}</li>
    <li :class="{active: currentPage == 1}">1</li>
    <li v-if="preMore" class="omit">...</li>
    <li v-for="(page,ind) in pagers" :key="ind" :class="{active:currentPage == page}">{{page}}</li>
    <li v-if="nextMore" class="omit">...</li>
    <li :class="{active: currentPage == pageCount}">{{pageCount}}</li>
    <li v-if="currentPage < pageCount" class="next">{{next}}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      preMore: false,
      nextMore: false
    };
  },
  props: {
    //当前页
    currentPage: {
      type: Number,
      default: 1
    },
    //总页数
    pageCount: Number,
    //页码显示数量
    pagerNum: {
      type: Number,
      default: 7
    },
    prev: {
      type: String,
      default: "上一页"
    },
    next: {
      type: String,
      default: "下一页"
    }
  },
  computed: {
    pagers() {
      //大于5页时加载省略分页
      let halfPage = (this.pagerNum - 1) / 2;
      let pageCount = this.pageCount;
      let preMoreFlag = false;
      let nextMoreFlag = false;
      let arr = [];
      if (pageCount > this.pagerNum) {
        if (this.currentPage > this.pagerNum - halfPage) {
          preMoreFlag = true;
        }
        if (this.currentPage < pageCount - halfPage) {
          nextMoreFlag = true;
        }
      }
      //组合页码
      if (preMoreFlag && !nextMoreFlag) {
        let startPage = pageCount - (this.pagerNum - 2);
        for (let i = startPage; i < pageCount; i++) {
          arr.push(i);
        }
      } else if (!preMoreFlag && nextMoreFlag) {
        for (let i = 2; i < this.pagerNum; i++) {
          arr.push(i);
        }
      } else if (preMoreFlag && nextMoreFlag) {
        const offset = Math.floor(this.pagerNum / 2) - 1;
        for (
          let i = this.currentPage - offset;
          i <= this.currentPage + offset;
          i++
        ) {
          arr.push(i);
        }
      } else {
        for (let i = 2; i < pageCount; i++) {
          arr.push(i);
        }
      }
      this.preMore = preMoreFlag;
      this.nextMore = nextMoreFlag;
      return arr;
    }
  },
  methods: {
    onPagerClick(e) {
      let target = e.target;
      if (target.tagName === "UL") {
        return;
      }
      //省略
      if (target.className.indexOf("omit") !== -1) {
        return;
      }
      //上一页
      let newPage = Number(target.textContent);
      if (target.className.indexOf("prev") !== -1) {
        newPage = this.currentPage - 1;
      }
      //下一页
      if (target.className.indexOf("next") !== -1) {
        newPage = this.currentPage + 1;
      }
      if (newPage !== this.currentPage) {
        this.$emit("change", newPage);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.flex-align-center {
  display: flex;
  align-items: center;
}
.rty-pagination {
  margin: 0;
  padding: 8px;
  list-style: none;
  .active {
    color: #409eff;
  }
  li {
    cursor: pointer;
    margin: 0 4px;
    font-size: 13px;
    min-width: 22px;
    text-align: center;
    &:hover {
      color: #409eff;
    }
  }
  .omit {
    cursor: default;
    padding: 0;
  }
}
</style>