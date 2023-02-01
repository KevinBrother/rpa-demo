# 项目概况

## 注意点

1. 一期前端本地存储，不需要后端
2. 一期不做手机端适配
3. 一共两个界面 + 三四个弹框

## 主要功能点

 1. 多层级的新增（多少层有待商榷）
 2. 随机选择功能

## 资源

[原型图](https://3qomk5.axshare.com/#g=1&p=home)

## 具体实现

### 前端

技术栈：vite + antd-design + ts

- [x] antd-ui
- [x] asset别名的支持
  - [有三种方式可以实现](./docs/Asset.md)
- [x] react-router
  - [x] 路由懒加载（目前vite一次性把所有资源都请求了，等页面多了就不好维护了）
  - [ ] 菜单改为antd的
- [x] 全局免导入的类型定义
  - [x] 类型定义错误相关
- [x] mobx、mobx-react
- [x] 列表界面+新增
- [x] 定义数据结构
- [ ] 重构
  - [ ] 列表界面，找到各个组件与hooks相对平衡的点
- [ ] 模态框的hooks
  - [ ] 按需加载
- [ ] 开始选择界面
- [ ] 统一编写风格配置

## 业务

category-list

- [x] 下层添加面包屑导航

### 服务端

- [ ] node

### devops

- [ ] docker
- [ ] ci/cd
  - [ ] gitlib
- [ ] 样式按需打包

### 技术问题

- [ ] useImmer在面包屑导航为什么不能用？
- [ ] mobx和useImmer怎么才能一起用？

### bug

- [ ]