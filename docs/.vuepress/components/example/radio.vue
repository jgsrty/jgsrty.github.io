<template>
  <div style="margin-top:20px">
    <rty-radio
      v-for="(i,ind) in radioList"
      :key="ind"
      v-model="radio"
      @change="getRadio"
      :label="i.value"
    >{{i.name}}</rty-radio>
  </div>
</template>

<script>
import rtyRadio from "../src/rtyRadio";
export default {
  components: {
    rtyRadio
  },
  data() {
    return {
      radio: 0,
      radioList: [
        {
          value: 0,
          name: "选项A"
        },
        {
          value: 1,
          name: "选项B"
        },
        {
          value: 2,
          name: "选项C"
        },
        {
          value: 3,
          name: "选项D"
        }
      ]
    };
  },
  methods: {
    getRadio(val) {
      console.log("当前选择--" + this.radio);
      console.log("当前选择--" + val);
    }
  }
};
</script>

<style scoped>
</style>