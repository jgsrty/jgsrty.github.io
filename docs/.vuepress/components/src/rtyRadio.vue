<template>
  <label class="rty-radio">
    <span class="radio-input">
      <span
        class="input-cover"
        :class="[{'input-cover-checked':model===label}]"
      ></span>
      <input
        type="radio"
        class="input-radio"
        v-model="model"
        :value="label"
        @click="handleChange"
      >
    </span>
    <span class="radio-text">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: "rtyRadio",
  props: {
    value: "",
    label: ""
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      }
    }
  },
  methods: {
    handleChange() {
      setTimeout(() => {
        this.$emit("change", this.model);
      }, 0);
    }
  }
};
</script>

<style scoped lang="scss">
.rty-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-left: 15px;
  .radio-text {
    font-size: 14px;
    cursor: pointer;
  }
  .radio-input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .input-cover {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .input-cover-checked {
      border-color: #409eff;
      background: #409eff;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
    .input-radio {
      position: absolute;
      opacity: 0;
      margin: 0;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
    }
  }
}
</style>