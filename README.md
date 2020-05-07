# 微前端实践——qiankun 2.x

## 项目结构说明

- main： 基座项目（vue构建）
- spa-child-vue： vue子项目
- spa-child-react：react子项目

## 启动说明

- 基座项目

  ```bash
  # 安装依赖
  npm install
  # 启动
  npm run serve
  ```

- vue子项目

  ```bash
  # 安装依赖
  npm install
  # 在3001端口启动
  npm run serve
  ```

- react子项目

  ```bash
  # 安装依赖
  yarn
  # 在3002端口启动
  yarn start
  ```

## 实现特性

1. 基座项目、子项目分别构建
2. 先由基座项目的路由分发应用（子项目），再由子项目分发自己的路由
3. 基座项目和子项目通信，并且和自己的状态管理库结合

## 核心变动

### 基座项目

- `subAppRegister.js`：整个基座注册子项目的逻辑
- `utils/spa-store.js`：基座项目和子项目通信的状态库，并同步自己的状态库

### 子项目

- `public-path.js`：qiankun注入标识

- 入口文件：导出生命周期函数供基座项目注册；兼容微前端模式和自构建模式；接受基座项目传来的props（通信核心）
- `utils/spa-store.js`：接受消息，发布消息，并同步自己的状态库

## 学习索引

- [Micro-frontend Architecture in Action-微前端的那些事儿](https://github.com/phodal/microfrontends)
- [qiankun](https://qiankun.umijs.org/zh/)
- [可能是你见过最完善的微前端解决方案](https://juejin.im/post/5d560292e51d4561a60d9dd9)
- [微前端的核心价值](https://juejin.im/post/5de7a80ef265da33d451e183)
- [用微前端的方式搭建类单页应用 - 美团技术团队](https://tech.meituan.com/2018/09/06/fe-tiny-spa.html)
- [网易严选企业级微前端解决方案与落地实践](https://zhuanlan.zhihu.com/p/97226980)