<template>
  <div class="progress-contain" :style="{width:barWidth + 'px'}">
    <div class="bar">
      <div class="inner" :style="barStyle"></div>
    </div>
    <div class="text" v-show="showText">{{percent}}%</div>
  </div>
</template>

<script>
export default {
  name: "rtyProgress",
  props: {
    barWidth: {
      type: Number,
      default: 330
    },
    innerColor: {
      type: String,
      default: "#409eff"
    },
    percent: {
      type: Number,
      default: 0,
      validator: val => val >= 0 && val <= 100
    },
    showText: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    barStyle() {
      let style = {};
      style.width = this.percent + "%";
      style.background = this.innerColor;
      return style;
    }
  }
};
</script>

<style scoped lang="scss">
.progress-contain {
  display: flex;
  align-items: center;
  margin: 10px 0;
  .bar {
    flex: 1;
    background: #ebeef5;
    height: 6px;
    border-radius: 3px;
    position: relative;
    .inner {
      position: absolute;
      height: 100%;
      border-radius: 3px;
    }
  }
  .text {
    width: 45px;
    margin-left: 5px;
  }
}
</style>