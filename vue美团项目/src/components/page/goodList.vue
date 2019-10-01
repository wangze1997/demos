<template>
  <div class="page-product">
    <el-row>
        <crumbs />
    </el-row>
    <el-row>
        <el-col :span="19">
            <el-row>
                <categroy />
            </el-row>
            <el-row></el-row>
        </el-col>
        <el-col :span="5"></el-col>
    </el-row>
    <el-row>

    </el-row>
  </div>
</template>

<script>
import crumbs from "../goodList/crumbs"
import categroy from "../goodList/categroy"


export default {
  components: {
    crumbs,
    categroy
  },
  created() {
    this.$store.state.flag = true;
  },
  beforeRouteLeave(to, from, next) {
    this.$store.state.flag = false;
    next();
  }
};
</script>
<style lang="scss">
@import "@/assets/css/public/goodList/index.scss";
</style>