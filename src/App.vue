<template>
  <div id="app">
    <a-layout>
      <a-layout-sider theme="light">
        <router-link :to="{ path: '/easyTable' }">easyTable</router-link>
      </a-layout-sider>
      <a-layout>
        <a-layout-content>
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout>

  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
//import PButton from "../packages/button/index";

export default {
  name: "App",
  components: {

  },
};
</script>

<style lang="less" >
#app {
  background: #fff;
}
</style>
