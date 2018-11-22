# 加载 loading
加载效果，全屏加载中及指定目标区域加载

## 示例
<example-loading></example-loading>

## 使用方法
``` html
<template>
  <div>
    <div style="margin:20px 0">
      <rty-button :text="'全屏loading'" :type="'primary'" @click="displayLoad1"></rty-button>
      <rty-loading :visible="showLoading1"></rty-loading>
    </div>
    <div>
      <rty-button :text="'局部loading'" :type="'primary'" @click="displayLoad2"></rty-button>
      <div style="position:relative;width:500px;height:200px;border:1px solid #333;margin-top:10px">
        <rty-loading :visible="showLoading2" :position="'absolute'"></rty-loading>
      </div>
    </div>
  </div>
</template>
```
``` js
<script>
export default {
  data() {
    return {
      showLoading1: false,
      showLoading2: false,
    }
  },
  methods: {
    displayLoad1() {
      this.showLoading1 = true
      setTimeout(() => {
        this.showLoading1 = false
      },2000)
    },
    displayLoad2() {
      this.showLoading2 = true
      setTimeout(() => {
        this.showLoading2 = false
      },2000)
    }
  },
};
</script>
```

## 配置选项
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-|-|-|-|-|
| visible | 是否显示loading | Boolean | - | false |
| position | 切换全屏/指定区域加载loading | String | fixed/absolute | absolute |
> 使用position属性控制loading显示区域时，需要注意的是，区域加载loading是通过定位控制的，如果指定区域加载loading，需要在区域父元素增加position:relative属性，否则在复杂页面中会出现混乱