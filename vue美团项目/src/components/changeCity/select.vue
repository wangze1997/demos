<template>
  <div :disabled="disabled" class="choose-wrap" @click.stop="showWrapper" v-document-click="documentClick">
    <div class="choose">
      <span>{{ data }}</span>
      <i class="el-icon-caret-bottom"></i>
      <div class="mt-content" :class="{'active':flag}">
        <h2>省份</h2>
        <div class="wrapper">
          <div class="col">
            <span
              class="mt-item"
              v-for="(item, index) in cityList1"
              :key="index"
            >{{item.provinceName}}</span>
          </div>
          <div class="col">
            <span
              class="mt-item"
              v-for="(item, index) in cityList2"
              :key="index"
            >{{item.provinceName}}</span>
          </div>
          <div class="col">
            <span
              class="mt-item"
              v-for="(item, index) in cityList3"
              :key="index"
            >{{item.provinceName}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data","disabled"],
  methods: {
    showWrapper() {
        if(this.disabled){
             this.flag = true;
        }
    },
    documentClick() {
      this.flag = false;
    }
  },
  data() {
    return {
      cityList: [],
      cityList1: null,
      cityList2: null,
      cityList3: null,
      flag: false,

    };
  },
  created() {
    // /api/meituan/city/province.json
    this.$axios
      .get("api/meituan/city/province.json?appkey=wlz1997_1564064546855")
      .then(
        res => {
          this.cityList = res.data.data;
          this.cityList1 = this.cityList.splice(0,12);
          this.cityList2 = this.cityList.splice(0,12);
          this.cityList3 = this.cityList.splice(0,10);
        },
        err => {
          console.log(err);
        }
      );
  }
};
</script>

<style lang="scss" >
@import "@/assets/css/public/changeCity/select.scss";
@import "@/assets/css/public/changeCity/iselect.scss";
</style>