// 1. use: ['xx1-loader] ['xx2-loader']
// 2. 最后的 loader 最先调用，传入原始的资源
// 3. 中间 loader 执行的时候，传入的就是上一个 loader 的执行结果
// 4. loader 需要异步 this.async() this.callback()
module.exports = function(content, map, meta) {
    console.log("😊 进入loader");
    console.log('🍎 content::', content);
    console.log('data.value:', this.data.value);
    this.cacheable(false);  // 关闭 loader 缓存
    return content;
}

// 5. 前置钩子
// data 被挂载到当前loader的上下文this上，在loaders之间传递
module.exports.pitch = function(remainingRequest, precedingRequest, data) {
    console.log('**remainingRequest**', remainingRequest);
    console.log('**precedingRequest**', precedingRequest);
    data.value = "🍂 pitch";
}

// 6. 前置钩子的执行顺序
// xx1-loader -> dispatch
// xx2-loader -> dispatch
// xx2
// xx1