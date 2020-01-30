# dantd-demo

[预览地址](https://jokingzhang.github.io/dantd-demo/)

> 一个用于开发 [dantd](https://github.com/jokingzhang/dantd) 组件的项目，由于组件库想使用 [umijs/father](https://github.com/umijs/father)，而在执行`father build`的时候，还不能指定文件路径入口，导致现在使用了一个单独的项目做组件的打包，发布。所以，目前的做法是，在这个项目 [dantd-demo](https://github.com/jokingzhang/dantd-demo) 完成开发，测试；在 [dantd](https://github.com/jokingzhang/dantd) 中写文档，打包，发布。

# Features

- 支持 TypeScript
- 支持 单元测试 Jest + @testing-library/react
- 支持 less
- 支持 eslint & prettier
- 支持 react-app-rewired

# Installation

```
$ npm install
```

# Usage

```
# 开发
$ npm start

# 构建
$ npm run build

# 同步至 dantd
$ npm run sync
```

# blog

- [手摸手，打造属于自己的 React 组件库 —— 基础篇](https://github.com/jokingzhang/blog/issues/1)
- [手摸手，打造属于自己的 React 组件库 —— 测试篇](https://github.com/jokingzhang/blog/issues/4)
- [手摸手，打造属于自己的 React 组件库 —— 打包篇](https://github.com/jokingzhang/blog/issues/2)
