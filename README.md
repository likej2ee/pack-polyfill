# 使用webpack打包es6的polyfill

## Install

``` shell

# 安装依赖
npm install
```

## Usage

``` shell

# 运行
npm run build

```

## Tips

* 在./src/libary.js中添加需要的polyfill
* 运行后需要修改如下代码才可以在微信小程序中引用

``` js

return __webpack_require__(__webpack_require__.s = "./src/library.js");
module.exports = __webpack_require__(__webpack_require__.s = "./src/library.js");

```
