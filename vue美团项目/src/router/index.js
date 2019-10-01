import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from "@/views/default"
import blankPage from "@/views/blank"
import Index from "@/components/page/index.vue"
import changeCity from "@/components/page/changeCity"
import goodList from "@/components/page/goodList"
Vue.use(Router)

export default new Router({
  // 路由子路由显示则父亲路由一定显示。
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "defalut",
      component: defaultPage,
      redirect:"/index",
      children: [
        {
          path:"/index",
          name: "Index",
          component:Index
        },
        {
          path: "/changeCity",
          name: "changeCity",
          component: () => import("@/components/page/changeCity.vue")
        },
        {
          path: "/goodList",
          name: "goodList",
          component: () => import("@/components/page/goodList.vue")
        }
      ]
    }, {
      path: "/blank",
      name: "blankPage",
      component: blankPage
    }
  ]
})

