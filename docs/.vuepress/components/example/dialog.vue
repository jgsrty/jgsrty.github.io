<template>
  <div>
    <div style="margin:20px 0">
      <rty-button @click="firstDialog = true" :text="'点击打开Dialog'" :type="'primary'"></rty-button>
      <rty-dialog :visible.sync="firstDialog" :header="'标题'" :width="'250px'">
        <div>dialog内容</div>
        <div slot="footer">
          <rty-button :text="'取消'" @click="firstDialog = false"></rty-button>
          <rty-button :text="'确定'" @click="firstDialog = false" :type="'primary'"></rty-button>
        </div>
      </rty-dialog>
    </div>
    <div>
      <rty-button @click="secondDialog = true" :text="'点击打开自定义Dialog'" :type="'primary'"></rty-button>
      <rty-dialog :visible.sync="secondDialog">
        <div>
          <rty-progress :percent='55' :innerColor="'#d4333c'"></rty-progress>
        </div>
      </rty-dialog>
    </div>
  </div>
</template>

<script>
import rtyButton from "../src/rtyButton";
import rtyProgress from "../src/rtyProgress";
import rtyDialog from "../src/rtyDialog";
export default {
  components: {
    rtyButton,
    rtyProgress,
    rtyDialog
  },
  data() {
    return {
      firstDialog: false,
      secondDialog: false
    };
  }
};
</script>

<style scoped>
</style>