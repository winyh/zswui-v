### 指南

::: tip
zswui-v UI 组件库使用方法
:::

#### 全局安装

```bash
npm install zswui-v --save
```

#### 使用方法

```js
// 入口文件引入（main.js）
import zswui-v from "zswui-v";
import "zswui-v/lib/zswui-v.css";

Vue.use(zswui-v);

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
