# 导读

个人vue组件库

### 安装

``` bash
npm install rty-vue-components --save
```

### 引入

#### 全局引入

``` js
//main.js
import 'rty-vue-components/dist/rty-vue-components.min.css'
import { rtyButton } from 'rty-vue-components'
Vue.component('rtyButton',rtyButton)
```

#### 单个引入

``` js
import { rtyButton } from 'rty-vue-components'
export default {
  components:{ rtyButton }
};
```

### 使用

``` html
<rty-button></rty-button>
```