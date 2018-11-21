<template>
  <transition name="fade">
    <div class="rty-dialog flex-center-center" v-show="visible" @click.self="clickModel">
      <div class="content" :style="{width:width}">
        <div class="title flex-align-center">
          <slot name="header">
            <span class="left">{{header}}</span>
          </slot>
          <span class="close" @click="handleClose">x</span>
        </div>
        <div class="body">
          <slot></slot>
        </div>
        <div class="footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
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
    header: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: "30%"
    },
    clickEmpty: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    // console.log(this.$slots.footer);
  },
  methods: {
    handleClose() {
      this.$emit("update:visible", false);
    },
    clickModel() {
      if (this.clickEmpty) {
        this.handleClose();
      }
    }
  }
};
</script>

<style scoped lang="scss">
/* transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
/* flex */
.flex-center-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex-align-center {
  display: flex;
  align-items: center;
}
.rty-dialog {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
  z-index: 2018;
  background: rgba(0, 0, 0, 0.5);
  .content {
    background: #fff;
    padding: 20px;
    border-radius: 2px;
    color: #909399;
    .title {
      position: relative;
      margin: 0;
      .left {
        font-size: 18px;
        color: #333;
      }
      .close {
        cursor: pointer;
        position: absolute;
        right: 0;
        padding: 0 2px;
      }
    }
    .body {
      padding: 30px;
    }
    .footer {
      text-align: right;
    }
  }
}
</style>