<template>
  <div class="m-hcity">
    <dl>
      <span>最近访问:</span>
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
      .get("api/meituan/city/recents.json?appkey=wlz1997_1564064546855")
      .then(
        res => {
            this.citys = res.data.data;
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );
  }
};
</script>
