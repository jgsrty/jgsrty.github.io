<template>
  <transition name="fade">
    <div class="rty-pop flex-center-center" v-show="visible">
      <div class="pop">{{text}}</div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: "气泡提示"
    },
    fade: {
      type: Number,
      default: 1500
    }
  },
  watch: {
    visible(val) {
      if (val) {
        setTimeout(() => {
          this.$emit("update:visible", false);
        },this.fade);
      }
    }
  }
};
</script>

<style scoped lang="scss">
/* flex */
.flex-center-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.rty-pop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index:2018;
  background: rgba(255, 255, 255, 0);
  .pop {
    color: #fff;
    background: rgba(0, 0, 0, 0.8);
    padding: 10px;
    border-radius: 6px;
  }
}
</style>