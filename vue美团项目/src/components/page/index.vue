<template>
  <div class="wapper">
    <div class="page-index">
      <el-row>
        <el-col :span="5">
          <Menu />
        </el-col>
        <el-col :span="19">
          <right-banner />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <container />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <offerContainer />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <recommend />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <btnNav />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Menu from "../main/menu.vue";
import rightBanner from "../main/right-banner.vue";
import container from "../main/container.vue";
import recommend from "../main/recommend.vue";
import offerContainer from "../main/offerContainer.vue";
import btnNav from "../main/btnNav.vue";
export default {
  components: {
    Menu,
    rightBanner,
    container,
    recommend,
    offerContainer,
    btnNav,
  }
};
</script>
<style lang="scss">
@import "@/assets/css/public/main/index.scss";
@import "@/assets/css/public/main/left-banner.scss";
@import "@/assets/css/public/main/right-banner.scss";
@import "@/assets/css/public/main/container.scss";
</style>