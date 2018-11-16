<template>
  <div>
    <rty-progress></rty-progress>
    <rty-progress :percent='percent[0]'></rty-progress>
    <rty-progress :percent='percent[1]' :innerColor="innerColor"></rty-progress>
    <rty-progress :percent='percent[2]' :showText="showText"></rty-progress>
    <rty-progress :percent='percent[3]' :innerColor="innerColor" :barWidth="barWidth"></rty-progress>
  </div>
</template>

<script>
  import rtyProgress from "../src/rtyProgress";
  export default {
    components: {
      rtyProgress
    },
    data() {
      return {
        percent: [34, 68, 46, 55],
        innerColor: "#F56C6C",
        showText: false,
        barWidth: 500
      };
    }
  }
</script>

<style scoped>

</style>