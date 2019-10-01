<template>
  <div class="page-defalut">
    <el-container>
      <el-header>
        <my-header></my-header>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>
        <my-footer></my-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import myHeader from "@/components/header/index.vue";
import myFooter from "@/components/footer/index.vue";
export default {
    components: {
      myHeader,
      myFooter
    }
}
</script>

<style lang="scss">
  @import "@/assets/css/public/layout.scss";
  // @import "@/assets/css/public/header.scss"
  header{
    height: 197px !important;
    overflow: hidden;
  }
  main{
    padding:0px !important;
    margin:0px!important;
    width:100%!important;
  }
  main >  .wapper > .el-row{
      background: #fff;
  }
    main >  .wapper .page-index{
      margin:0 auto;
      width:1190px;
    }
  footer{

  }
</style>