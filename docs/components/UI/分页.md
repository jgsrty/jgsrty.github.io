# 分页 pagination
当数据量过多时，使用分页分解数据。

## 示例
<example-pagination></example-pagination>

## 使用方法
``` html
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
```
``` js
<script>
export default {
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
```

## 配置选项
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-|-|-|-|-|
| currentPage | 当前页 | Number | - | 1 |
| pageCount | 分页总页数 | Number | - | - |
| pagerNum | 页码显示数量，超过此数量会省略 | Number | 大于等于 5 且小于等于 21 的奇数 | 7 |
| prev | 上一页文本 | String | - | 上一页 |
| next | 下一页文本 | String | - | 下一页 |