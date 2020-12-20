## 使用方法

直接运行 `npm run dev`，即可在控制台看到注释信息。

## 自定义 log 输出

### 默认值

```js
module.exports = {
  printDog: true, // 打印 hook
  printFlower: true, // 打印构建流程
  printLine: true, // 打印横线分割线
  printArgs: true, // 打印参数
  showDogTrace: true, // 显示 hook 打印位置，仅在printDog为true时有效
  showFlowerTrace: true, // 显示构建流程打印位置，仅在printFlower为true时有效
}
```

### 自定义

1. 在根目录下创建 `customlog.config.js`

2. 写入配置，可根据需要自定义开关

```js
module.exports = {
  printDog: true,
  printFlower: true,
  printLine: false,
  printArgs: true,
  showDogTace: true,
  showFlowerTrace: true,
};
```
