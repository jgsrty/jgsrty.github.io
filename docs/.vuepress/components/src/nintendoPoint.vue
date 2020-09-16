<template>
  <div>
    <h3 style="text-align:center;margin-bottom:0">任天堂tb点卡购买比例</h3>
    <div class="point-table">
      <table class="table">
        <tr>
          <th v-show="pcMode">版本</th>
          <th>美元</th>
          <th>人民币</th>
          <th style="width:170px;">比例</th>
        </tr>
        <tr v-for="(item, ind) in table" :key="ind">
          <td v-show="pcMode">
            <input v-model="item.title" />
          </td>
          <td>
            <input
              class="number"
              @input="changeDollar(ind)"
              v-model="item.dollar"
              type="number"
            />
          </td>
          <td>
            <input
              class="number"
              @input="changeRmb(ind)"
              v-model="item.rmb"
              type="number"
            />
          </td>
          <td>
            <span :class="miniPriceInd === ind ? 'mini' : ''">{{
              item.ratioText
            }}</span>
          </td>
        </tr>
        <tr class="bottom-btn">
          <td :colspan="pcMode?4:3" @click="addNewItem">添加新行</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pcMode: true,
      miniPriceInd: "",
      table: [],
      tableItem: {
        title: "",
        dollar: "",
        rmb: "",
        ratio: "",
        ratioText: "",
      },
    };
  },
  mounted() {
    this.pcMode = /Mobile/i.test(navigator.userAgent) ? false : true;
    console.log(this.mobileMode)
    this.table.push(JSON.parse(JSON.stringify(this.tableItem)));
  },
  methods: {
    addNewItem() {
      this.table.push(JSON.parse(JSON.stringify(this.tableItem)));
    },
    changeDollar(ind) {
      if (this.table[ind].rmb) {
        this.table[ind].ratioText = this.calculateRate(
          this.table[ind].rmb,
          this.table[ind].dollar,
          ind
        );
        if (this.table[ind].dollar) {
          this.miniPrice();
        }
      }
    },
    changeRmb(ind) {
      if (this.table[ind].dollar) {
        this.table[ind].ratioText = this.calculateRate(
          this.table[ind].rmb,
          this.table[ind].dollar,
          ind
        );
        if (this.table[ind].rmb) {
          this.miniPrice();
        }
      }
    },
    calculateRate(dollar, rmb, ind) {
      let rate = (dollar / rmb).toFixed(3);
      this.table[ind].ratio = rate;
      return `1美金约需${rate}人民币`;
    },
    miniPrice() {
      if (this.table.length > 1) {
        let mini = Math.min.apply(
          Math,
          this.table.map((item) => {
            return parseFloat(item.ratio);
          })
        );
        this.table.filter((item, ind) => {
          if (parseFloat(item.ratio) === mini) {
            this.miniPriceInd = ind;
          }
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.point-table {
  display: flex;
  justify-content: center;
  .table {
    .bottom-btn {
      text-align: center;
      cursor: pointer;
    }
  }
}
table {
  // border-right: 1px solid #dadbdc;
  // border-bottom: 1px solid #dadbdc;
  border-collapse: collapse;
}
tr > th {
  border-left: 1px solid #dadbdc;
  border-top: 1px solid #dadbdc;
  background: #dadbdc;
  padding: 4px 0;
  padding-left: 20px;
  padding-right: 20px;
  text-align: left;
}
tr > td {
  border-left: 1px solid #dadbdc;
  border-top: 1px solid #dadbdc;
  padding: 4px 20px;
  input {
    width: 80px;
    height: 20px;
    text-align: center;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .number {
    width: 40px;
  }
  .mini {
    color: #389d70;
  }
}
</style>
