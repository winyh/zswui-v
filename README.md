<p align="center">
  <a href="https://winyh.github.io/zswui-v/">
    <img width="200" src="https://github.com/winyh/zswui-v/blob/master/public/snowman.svg">
  </a>
</p>

<h1 align="center">zswui-v</h1>

<p align="center">Vue UI组件库  代号：雪人</p>

<div align="center">

![](https://img.shields.io/npm/l/zswui-v) ![](https://img.shields.io/npm/v/zswui-v) ![](https://img.shields.io/npm/dm/zswui-v) ![](https://img.shields.io/github/issues/winyh/zswui-v) ![](https://img.shields.io/github/languages/code-size/winyh/zswui-v) ![](https://img.shields.io/github/stars/winyh/zswui-v) ![](https://img.shields.io/github/last-commit/winyh/zswui-v)

</div>

基于 Vue CLI 构建的 UI 组件库.实现了组件开发测试预览，组件文档，打包发布到 npm 一系列功能，详细教程请查看 [wiki](https://github.com/winyh/zswui-v/wiki)

#### 使用方法

全局安装

```bash
npm install zswui-v --save
```

```js
// 入口文件引入（main.js）
import zswui from "zswui-v";
import "zswui-v/lib/zswui-v.css";

Vue.use(zswui);

// 组件里使用
<Button>PLG</Button>;
```

#### 按需加载

> 需要安装插件 `babel-plugin-import`

```bash
npm install babel-plugin-import --save-dev
```

#### 按需使用

```js
<template>
    <div>
        <Button>测试</Button>
        <Input></Input>
    </div>
</template>

<script>
import { Button, Input } from "zswui-v";

export default {
  name: "App",
  components: {
    HelloWorld,
    Button,
    Input
  },
};
</script>
```

### 引入样式

```
import "zswui-v/lib/zswui-v.css"
```

### 打包发布

```
npm run lib

npm login

npm publish
```

### 组件文档预览

```
npm run docs:dev

```

### demo(文档待完善)

[https://winyh.github.io/zswui-v](https://winyh.github.io/zswui-v/)

[ winyh ], [ zswui-v ] 分别为 github 的 username 和仓库名

### 贡献代码

组件都在 packages 目录下，单个组件用单个目录存放，在 packages 目录下的 index.js 文件中集中对外抛出

可参考 button 组件

贡献代码规范请查看 [wiki](https://github.com/winyh/zswui-v/wiki)

### 参考组件库

| 组件库                                                   | 说明                               |
| -------------------------------------------------------- | ---------------------------------- |
| [Ant Design](https://ant.design/index-cn)                | 服务于企业级产品的设计体系         |
| [Rsuite](https://rsuitejs.com/)                          | UI 规范参考\*                      |
| [Fusion](https://fusion.design/)                         | 构建一套产品化设计系统和物料       |
| [Element](https://element.eleme.cn/2.0/#/zh-CN)          | 基于 Vue 2.0 PC 端网站快速成型工具 |
| [iview](https://www.iviewui.com/)                        | 基于 Vue.js 的高质量 UI 组件库     |
| [Vuetify](https://vuetifyjs.com/zh-Hans/)                | 偏向于扁平简洁大气风格             |
| [Bootstrap](https://getbootstrap.com/)                   | 响应式，移动优先的组件库和规范     |
| [Material-ui](https://material-ui.com/zh/)               | 基于 Material Design 设计系统      |
| [Semantic-ui](https://react.semantic-ui.com/)            | 偏向于扁平简洁大气风格             |
| [Grommet](https://v2.grommet.io/)                        | 风格偏圆润                         |
| [React-weui](http://weui.github.io/react-weui/#/)        | 微信体系 UI 风格                   |
| [React-grid](https://github.com/STRML/react-grid-layout) | 布局参考样式                       |

### License

zswui-v is [MIT licensed](https://opensource.org/licenses/MIT).
