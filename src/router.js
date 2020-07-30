import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const router = new Router({
  linkExactActiveClass: "exact",
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/transOrder"
    },
    {
      path: "/easyTable",
      name: "easyTable",
      component: () => import(/* webpackChunkName: "easyTableDom" */ "@/example/easyTableDom")
    }
  ]
});

export default router;
