<template>
  <button @click="clickBtn" class="default" :class="[type?type:'',size?size:'']">{{textWord}}</button>
</template>

<script>
export default {
  name: "rtyButton",
  props: {
    text: {
      type: String,
      default: "default"
    },
    type: {
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: "default"
    }
  },
  computed: {
    textWord() {
      if (this.text == "default") {
        return "默认按钮";
      } else if (this.text == "primary") {
        return "主要按钮";
      } else if (this.text == "success") {
        return "成功按钮";
      } else if (this.text == "warning") {
        return "警告按钮";
      } else if (this.text == "danger") {
        return "危险按钮";
      } else {
        return this.text;
      }
    }
  },
  methods: {
    clickBtn(event) {
      this.$emit('click', event);
    }
  },
};
</script>

<style scoped lang="scss">
//默认按钮
.default {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  border-color: #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
  &:active {
    color: #3a8ee6;
    border-color: #3a8ee6;
    outline: none;
  }
}
// 按钮大小
.medium {
  padding: 10px 20px;
}
.small {
  padding: 9px 15px;
  border-radius: 3px;
  font-size: 12px;
}
.mini {
  padding: 7px 15px;
  border-radius: 3px;
  font-size: 12px;
}
//主要
.primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
  &:active {
    background: #3a8ee6;
    border-color: #3a8ee6;
    color: #fff;
  }
}
//success
.success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }
  &:active {
    background: #5daf34;
    border-color: #5daf34;
    color: #fff;
  }
}
//warning
.warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover {
    background: #ebb563;
    border-color: #ebb563;
    color: #fff;
  }
  &:active {
    background: #cf9236;
    border-color: #cf9236;
    color: #fff;
  }
}
//danger
.danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover {
    background: #f78989;
    border-color: #f78989;
    color: #fff;
  }
  &:active {
    background: #dd6161;
    border-color: #dd6161;
    color: #fff;
  }
}
</style>