<template>
  <div style="margin-top:10px">
    <rty-button :text="'打开气泡提示'" :type="'primary'" @click="showPop = true"></rty-button>
    <rty-pop :visible.sync="showPop" :fade="2500" :text="'气泡提示'"></rty-pop>
  </div>
</template>

<script>
import rtyButton from "../src/rtyButton";
import rtyPop from "../src/rtyPop";
export default {
  components: {
    rtyButton,
    rtyPop
  },
  data() {
    return {
      showPop: false
    };
  }
};
</script>

<style scoped>
</style>