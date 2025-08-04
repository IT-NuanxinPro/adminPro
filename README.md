# AdminPro - Vue3 后台管理系统

> 🚀 一个基于 Vue3 + TypeScript + Element Plus 的现代化后台管理系统模板

[![Vue](https://img.shields.io/badge/Vue-3.4.21-brightgreen.svg)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4.3-blue.svg)](https://www.typescriptlang.org/)
[![Element Plus](https://img.shields.io/badge/Element%20Plus-2.6.1-409EFF.svg)](https://element-plus.org/)
[![Vite](https://img.shields.io/badge/Vite-5.2.2-646CFF.svg)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-ISC-green.svg)](LICENSE)

## 📖 项目简介

AdminPro 是一个从零开始搭建的 Vue3 PC 端后台管理系统，专为学习和实践现代前端开发技术栈而设计。项目采用最新的前端技术，提供完整的后台管理解决方案，包括用户管理、权限控制、数据展示等核心功能。

### ✨ 特性

-   🎯 **现代化技术栈**: Vue3 + TypeScript + Vite + Element Plus
-   🔐 **完整权限系统**: 登录认证、路由守卫、权限控制
-   📱 **响应式设计**: 适配不同屏幕尺寸
-   🎨 **优雅UI**: 基于 Element Plus 的现代化界面
-   🔧 **开发体验**: 热重载、TypeScript 支持、ESLint + Prettier
-   📊 **数据可视化**: 集成 ECharts 图表库
-   🚀 **性能优化**: 组件按需加载、代码分割
-   🧪 **Mock 数据**: 内置 Mock 服务，便于开发调试

## 🛠️ 技术栈

### 核心框架

-   **Vue 3.4.21** - 渐进式 JavaScript 框架
-   **TypeScript 5.4.3** - JavaScript 的超集，提供静态类型检查
-   **Vite 5.2.2** - 下一代前端构建工具

### UI 组件库

-   **Element Plus 2.6.1** - 基于 Vue 3 的桌面端组件库
-   **@element-plus/icons-vue** - Element Plus 图标库

### 路由和状态管理

-   **Vue Router 4.3.0** - Vue.js 官方路由管理器
-   **Pinia 2.1.7** - Vue 的状态管理库
-   **pinia-plugin-persistedstate** - Pinia 持久化插件

### 开发工具

-   **ESLint** - 代码质量检查工具
-   **Prettier** - 代码格式化工具
-   **Stylelint** - CSS 代码检查工具
-   **Husky** - Git hooks 工具
-   **lint-staged** - 暂存文件检查工具

### 构建和插件

-   **unplugin-auto-import** - 自动导入 API
-   **unplugin-vue-components** - 自动导入组件
-   **unplugin-icons** - 图标自动导入
-   **vite-plugin-mock** - Mock 数据服务

### 其他工具

-   **Axios** - HTTP 客户端
-   **ECharts** - 数据可视化图表库
-   **NProgress** - 页面加载进度条
-   **Less** - CSS 预处理器

## 📁 项目结构

```
adminPro/
├── public/                 # 静态资源目录
├── src/                   # 源代码目录
│   ├── api/              # API 接口
│   │   ├── auth.ts       # 认证相关接口
│   │   ├── project.ts    # 项目相关接口
│   │   ├── role.ts       # 角色相关接口
│   │   └── user.ts       # 用户相关接口
│   ├── http/             # HTTP 请求配置
│   │   ├── request.ts    # 请求拦截器
│   │   └── status.ts     # 状态码处理
│   ├── layout/           # 布局组件
│   │   ├── components/   # 布局子组件
│   │   └── index.vue     # 主布局
│   ├── router/           # 路由配置
│   │   ├── modules/      # 路由模块
│   │   └── index.ts      # 路由主文件
│   ├── store/            # 状态管理
│   │   ├── user/         # 用户状态模块
│   │   └── index.ts      # Store 主文件
│   ├── styles/           # 样式文件
│   │   ├── theme/        # 主题样式
│   │   ├── custom.less   # 自定义样式
│   │   ├── elements.less # Element Plus 样式覆盖
│   │   ├── index.less    # 样式入口
│   │   ├── reset.less    # 重置样式
│   │   └── variables.less # 样式变量
│   ├── views/            # 页面组件
│   │   ├── about/        # 关于页面
│   │   ├── auth/         # 权限管理
│   │   ├── home/         # 首页
│   │   ├── login/        # 登录页面
│   │   ├── role/         # 角色管理
│   │   └── user/         # 用户管理
│   ├── App.vue           # 根组件
│   └── main.ts           # 应用入口
├── mock/                 # Mock 数据
│   ├── auth.ts          # 认证 Mock
│   ├── project.ts       # 项目 Mock
│   ├── role.ts          # 角色 Mock
│   └── user.ts          # 用户 Mock
├── types/               # TypeScript 类型定义
├── index.html           # HTML 模板
├── package.json         # 项目配置
├── tsconfig.json        # TypeScript 配置
├── vite.config.mts      # Vite 配置
└── README.md           # 项目说明
```

## 🚀 快速开始

### 环境要求

-   **Node.js**: >= 16.0.0
-   **pnpm**: >= 7.0.0 (推荐) 或 npm >= 8.0.0

### 安装依赖

```bash
# 使用 pnpm (推荐)
pnpm install

# 或使用 npm
npm install
```

### 启动开发服务器

```bash
# 启动开发环境
pnpm dev

# 或使用 npm
npm run dev
```

启动成功后，打开浏览器访问 [http://localhost:9000](http://localhost:9000)

### 构建生产版本

```bash
# 构建生产环境
pnpm build

# 或使用 npm
npm run build
```

### 代码检查和格式化

```bash
# ESLint 检查
pnpm lint:eslint

# Prettier 格式化
pnpm lint:prettier

# 或使用 npm
npm run lint:eslint
npm run lint:prettier
```

## 📋 功能模块

### 🔐 认证系统

-   **登录/登出**: 用户身份验证
-   **路由守卫**: 自动跳转和权限验证
-   **Token 管理**: 自动刷新和存储

### 👥 用户管理

-   **用户列表**: 分页查询、搜索过滤
-   **用户操作**: 新增、编辑、删除用户
-   **权限分配**: 用户角色权限管理

### 🛡️ 权限管理

-   **角色管理**: 角色的增删改查
-   **权限控制**: 基于角色的访问控制
-   **菜单权限**: 动态菜单生成

### 📊 数据展示

-   **数据表格**: 支持排序、筛选、分页
-   **图表展示**: 基于 ECharts 的数据可视化
-   **响应式布局**: 适配不同设备屏幕

## 🔧 配置说明

### 环境变量

项目支持多环境配置，可在根目录创建对应的环境文件：

```bash
.env.development    # 开发环境
.env.production     # 生产环境
```

### Vite 配置

主要配置项说明：

-   **端口**: 默认 9000
-   **代理**: API 请求代理配置
-   **别名**: `@` 指向 `src` 目录，`#` 指向 `types` 目录
-   **插件**: 自动导入、组件注册、Mock 服务等

### TypeScript 配置

-   **严格模式**: 启用所有严格类型检查
-   **路径映射**: 支持绝对路径导入
-   **自动导入**: 自动生成类型声明文件

## 📱 页面展示

### 登录页面

-   用户名/密码登录
-   表单验证
-   登录状态保持

### 主页面

-   侧边栏导航
-   顶部用户信息
-   内容区域展示

### 管理页面

-   用户管理：用户列表、添加/编辑用户
-   角色管理：角色权限配置
-   数据展示：表格和图表

## 🎯 开发指南

### 添加新页面

1. 在 `src/views` 下创建页面组件
2. 在 `src/router/modules` 下添加路由配置
3. 如需要，在 `src/api` 下添加接口定义

### 添加新接口

1. 在 `src/api` 下定义接口方法
2. 在 `mock` 下添加对应的 Mock 数据
3. 在组件中调用接口

### 样式开发

-   使用 Less 预处理器
-   全局变量定义在 `src/styles/variables.less`
-   组件样式支持 scoped 和模块化

### 状态管理

-   使用 Pinia 进行状态管理
-   支持状态持久化
-   模块化管理不同业务状态

## 🔍 代码规范

### Git 提交规范

项目使用 Conventional Commits 规范：

```bash
feat: 新功能
fix: 修复bug
docs: 文档更新
style: 代码格式调整
refactor: 代码重构
test: 测试相关
chore: 构建过程或辅助工具的变动
```

### 代码检查

-   **ESLint**: JavaScript/TypeScript 代码检查
-   **Stylelint**: CSS/Less 样式检查
-   **Prettier**: 代码格式化
-   **Husky**: Git hooks 自动检查

### 命名规范

-   **文件名**: kebab-case (短横线命名)
-   **组件名**: PascalCase (大驼峰命名)
-   **变量名**: camelCase (小驼峰命名)
-   **常量名**: UPPER_SNAKE_CASE (大写下划线)

## 📦 部署指南

### 构建项目

```bash
# 安装依赖
pnpm install

# 构建生产版本
pnpm build
```

### 部署到服务器

构建完成后，`dist` 目录包含所有静态文件，可以部署到任何静态文件服务器：

-   **Nginx**: 配置静态文件服务
-   **Apache**: 配置虚拟主机
-   **CDN**: 上传到对象存储服务

### GitHub Pages 部署

1. 在 GitHub 仓库设置中启用 Pages
2. 选择 Actions 作为部署源
3. 推送代码自动触发部署

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

### 开发流程

1. Fork 本仓库
2. 创建特性分支: `git checkout -b feature/amazing-feature`
3. 提交更改: `git commit -m 'feat: add amazing feature'`
4. 推送分支: `git push origin feature/amazing-feature`
5. 提交 Pull Request

### 问题反馈

如果您在使用过程中遇到问题，请通过以下方式反馈：

-   提交 [GitHub Issue](https://github.com/IT-NuanxinPro/adminPro/issues)
-   详细描述问题和复现步骤
-   提供相关的错误信息和截图

## 📄 许可证

本项目基于 [ISC License](LICENSE) 开源协议。

## 🙏 致谢

感谢以下开源项目的支持：

-   [Vue.js](https://vuejs.org/) - 渐进式 JavaScript 框架
-   [Element Plus](https://element-plus.org/) - Vue 3 组件库
-   [Vite](https://vitejs.dev/) - 下一代前端构建工具
-   [TypeScript](https://www.typescriptlang.org/) - JavaScript 超集
-   [Pinia](https://pinia.vuejs.org/) - Vue 状态管理库

## 📞 联系方式

-   **作者**: IT-NuanxinPro
-   **邮箱**: 105851435+IT-NuanxinPro@users.noreply.github.com
-   **GitHub**: [https://github.com/IT-NuanxinPro](https://github.com/IT-NuanxinPro)

---

⭐ 如果这个项目对您有帮助，请给个 Star 支持一下！

## 🔗 相关链接

-   [Vue 3 官方文档](https://vuejs.org/)
-   [Element Plus 官方文档](https://element-plus.org/)
-   [Vite 官方文档](https://vitejs.dev/)
-   [TypeScript 官方文档](https://www.typescriptlang.org/)
-   [Pinia 官方文档](https://pinia.vuejs.org/)
