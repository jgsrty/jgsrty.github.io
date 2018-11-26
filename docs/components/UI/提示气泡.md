# 气泡提示 pop
简洁气泡提示信息，自动关闭

## 示例
<example-pop></example-pop>

## 使用方法
``` html
<template>
  <div>
    <rty-button :text="'打开气泡提示'" :type="'primary'" @click="showPop"></rty-button>
  </div>
</template>
```
``` js
<script>
export default {
  methods: {
    showPop() {
      this.$rtyPop();
    }
  }
};
</script>
```

## 配置选项
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-|-|-|-|-|
| text | 气泡提示内容 | String | - | 气泡提示 |
| fade | 气泡提示持续时间-单位（秒） | Number | - | 1500 |



