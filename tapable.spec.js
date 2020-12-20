// parallel: 并行调用
// bail：顺序调用
// waterfall：上一个方法的返回结果作为输入参数
const {
	SyncHook, // 同步的串行，不关心监听函数的返回值
	SyncBailHook, // 同步的串行，只要监听函数有一个函数的返回值不为 null，跳过所有的
	SyncWaterfallHook,  // 同步的串行，流式串行，上一个监听函数的返回值可以传给下一个参数
	SyncLoopHook,   // 同步循环，上一个监听函数返回true，反复执行
	AsyncParallelHook,  // 异步
	AsyncParallelBailHook,
	AsyncSeriesHook,	// 异步按顺序执行
	AsyncSeriesBailHook,
	AsyncSeriesWaterfallHook
} = require("tapable");
const { Compiler } = require("webpack");

// 接收一个可选参数，这个参数是一个字符串数组
const complier = new Compiler();
complier.hooks = new SyncHook(["name"]);

// 订阅
// 标识订阅函数
complier.hooks.tap("1", function(name) {
    console.log(name, 1);
    return "123";
});

complier.hooks.tap("2", function(name, name2) {
    console.log(name, name2, 2);
});

complier.hooks.tap({
	name: '3',
	stage: -1 // 控制顺序，正负数表示执行先后次序
}, function(name) {
    console.log(name, 3);
});

// 执行钩子
complier.hooks.call("webpack🍎");

// // 异步事件
// complier.hooks.done.tapPromise('PluginName', stats => {
// 	return new Promise((resolve, reject) => {
// 		// 处理 Promise 返回结果
// 	})
// })

// complier.hooks.done.tapAsync('PluginName', (stats, callback) => {
// 	callback(err);
// })