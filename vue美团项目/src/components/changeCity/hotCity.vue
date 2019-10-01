<template>
  <div class="m-hcity">
    <dl>
      <span>热门城市:</span>
      <dd v-for="(item, index) in citys" :key="index">
          {{ item.name }}
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  data() {
    return {
      citys: []
    };
  },
  created() {
    this.$axios
      .get("api/meituan/city/cityList.json?appkey=wlz1997_1564064546855")
      .then(
        res => {
            this.citys = res.data.data;
        //   console.log(res);
        },
        err => {
          console.log(err);
        }
      );
  }
};
</script>

<style lang="scss">
    @import "@/assets/css/public/changeCity/hot.scss"
</style>