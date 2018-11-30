# 单选框 Radio
在一组选项中进行单选

## 示例
<example-radio></example-radio>

## 使用方法
``` html
<template>
  <div>
    <rty-radio
      v-for="(i,ind) in radioList"
      :key="ind"
      v-model="radio"
      @change="getRadio"
      :label="i.value"
    >{{i.name}}</rty-radio>
  </div>
</template>
```
``` js
<script>
export default {
  data() {
    return {
      radio: 0,
      radioList: [
        {
          value: 0,
          name: "选项A"
        },
        {
          value: 1,
          name: "选项B"
        },
        {
          value: 2,
          name: "选项C"
        },
        {
          value: 3,
          name: "选项D"
        }
      ]
    };
  },
  methods: {
    getRadio(val) {
      console.log(val);
    }
  }
};
</script>
```

## 配置选项
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-|-|-|-|-|
| v-model | 选中/默认选中的值 | Number/String/Boolean | - | - |
| label | Radio选框的值 | Number/String/Boolean | - | - |