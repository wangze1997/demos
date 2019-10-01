<template>
  <div>
    <!-- router-view 控制路由显示区,这是最初的路由显示区
    router就是通过控制dom元素的隐藏实现的,如果配置子路由的话,子路由展现则父亲路由一定展现-->
    <router-view />
  </div>
</template>


<script>

export default {
  name: "App",
  components: {}
};
</script>

<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
  text-decoration: none;
  list-style: none;
}
</style>



