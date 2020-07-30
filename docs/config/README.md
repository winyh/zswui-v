### 配置

> 组件按需加载需要安装插件 `babel-plugin-import`

```bash
npm install babel-plugin-import --save-dev
```

### Babel 的配置文件

> 项目根目录新建配置文件 .babelrc

```js{6,7}
{
  "plugins": [
    [
      "import",
      {
        "libraryName": "zswui-v",
        "libraryDirectory": "packages"
      }
    ]
  ]
}

```
