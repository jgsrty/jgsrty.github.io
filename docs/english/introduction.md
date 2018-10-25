# 导读

本文将介绍 SW-BW-UI 的安装方式和基本的用法。

### 引入 组件库

在 main.js 中写入以下内容：

```js
import Vue from "vue";
import swUI from "@swhy/sw-bw-ui/dist/sw-bw-ui.min";
import "@swhy/sw-bw-ui/dist/sw-bw-ui.min.css";
import App from "./App.vue";

Vue.use(swUI);

new Vue({
  el: "#app",
  components: { App }
});
```

### 开始使用

至此，一个基于 Vue 和 sw-bw-ui 的开发环境已经搭建完毕，现在就可以编写代码了。

启动开发模式：

`npm run dev`

编译：

`npm run build`

各个组件的使用方法请参阅它们各自的文档。
