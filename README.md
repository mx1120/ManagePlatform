# bug_manage

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

全局配置在pulgins中的global.js文件中，路由拦截，全局路由钩子
整体布局在Layout，所有页面都是自由路，主页面只有一个，其余都是自路由
路由使用node脚本完善 => npm run route 生成最新的路由
