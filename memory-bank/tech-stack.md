# Tech Stack - NFNJ Calculator

## 核心技术

| 类别 | 技术 |
|------|------|
| 框架 | React Native 0.83.2 |
| 构建工具 | Expo 55.0.6 |
| 语言 | TypeScript 5.9.2 |
| 运行时 | React 19.2.0 |

## 状态管理与数据

| 类别 | 技术 |
|------|------|
| 状态管理 | React Context + useReducer |
| 本地存储 | AsyncStorage |
| 数据格式 | JSON |

## 开发工具

| 类别 | 技术 |
|------|------|
| 代码规范 | TypeScript |
| 包管理 | npm |

## 架构模式

- **MVVM 简化版**: Context 负责状态管理，Components 负责 UI 渲染
- **单页面应用**: 所有功能集成在 HomeScreen
- **数据持久化**: 每次状态变更自动保存到 AsyncStorage
