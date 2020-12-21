// 1. 插件一定有 apply
// 2. 插件里 complier
// 3. compiler -> 留钩子 -> 给外界留下可以注册的接口
// 4. 该执行的时候定位插件的时机给执行
const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

// class ConsoleLogOnBuildWebpackPlugin {
//   apply(compiler) {
//     compiler.hooks.run.tap(pluginName, compilation => {
//       console.log('run hooks is called 执行plugin, webpack 构建过程开始！');
//     });
//   }
// }

// 函数形式
function ConsoleLogOnBuildWebpackPlugin(compiler) {
  compiler.hooks.environment.tap(pluginName, compilation => {
    console.log("environment 构建开始！")
  });
  compiler.hooks.run.tap(pluginName, compilation => {
    console.log('run hooks is called 执行plugin, webpack 构建过程开始！');
  });
}

module.exports = ConsoleLogOnBuildWebpackPlugin;
