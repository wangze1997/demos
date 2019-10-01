<template>
  <div class="header m-header">
    <el-row class="demo">
      <top-bar />
    </el-row>
    <el-row   :class="{changePadi:flag}">
      <search-bar />
    </el-row>
  </div>
</template>
<script>
import topBar from "./topBar";
import searchBar from "./searchBar"
export default {
  computed: {
    flag() {
      return this.$store.state.flag;
    }
  },
  components: {
    topBar,
    searchBar
  }
};
</script>

<style lang="scss">
@import "@/assets/css/public/header/index.scss";
.changePadi{
  padding-bottom:0px !important;
  height:122px !important;
}
</style>