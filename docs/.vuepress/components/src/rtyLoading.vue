<template>
  <div class="rty-loading flex-center-center" :style="{position:position}" v-show="visible">
    <div class="load-effect"></div>
  </div>
</template>

<script>
export default {
  props: {
    position: {
      type: String,
      default: "fixed"
    },
    visible: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.flex-center-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.rty-loading {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2018;
  background: rgba(0, 0, 0, 0.05);
}
.load-effect {
  width: 40px;
  height: 40px;
  border: 2px solid;
  border-color: #409eff #409eff transparent;
  border-radius: 50%;
  box-sizing: border-box;
  animation: loading 1s linear infinite;
}
@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>