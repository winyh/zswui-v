import Button from "./button";
import Input from "./input";

// 组件集合，用于遍历
const components = [Button, Input];

console.log({ components });

// 定义 install 方法
const install = function(Vue) {
  if (install.installed) return;
  console.log("installed ----- all");
  // 遍历注册全局组件
  components.map((component) => Vue.component(component.name, component));
};

// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export {
  install, // 导出的对象必须具备一个 install 方法
  Button, // 组件列表
  Input,
};

export default {
  install, // 导出的对象必须具备一个 install 方法
  Button, // 组件列表
  Input,
};
