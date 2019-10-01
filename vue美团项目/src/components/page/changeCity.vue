<template>
  <div class="page-changeCity">
    <el-row>
       <province />
    </el-row>
    <el-row>
      <hot-city />
    </el-row>
    <el-row>
      <visit-city />
    </el-row>
    <el-row>
      <m-category />
    </el-row>
  </div>
</template>

<script>
import province from "@/components/changeCity/province";
import hotCity from "@/components/changeCity/hotCity";
import visitCity from "@/components/changeCity/visitCity";
import mCategory from "@/components/changeCity/category";

export default {
  name: "changeCity",
  created() {
    this.$store.state.flag = true;
  },
  beforeRouteLeave(to, from, next) {
      this.$store.state.flag = false;
      next();
  },
  components: {
    province,
    hotCity,
    visitCity,
    mCategory
  }
};
</script>
