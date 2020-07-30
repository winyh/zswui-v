import Vue from "vue";
import App from "./App.vue";
import router from "./router";
/**全部加载 */
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
//import { PButton } from "../packages";

//console.log(PButton);

Vue.config.productionTip = false;
Vue.use(Antd);

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
