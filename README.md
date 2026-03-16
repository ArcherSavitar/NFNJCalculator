# NFNJ Calculator (No Fap No Jerk 计算器)

<p align="center">
  <img src="./assets/icon.png" alt="App Icon" width="120" />
</p>

<p align="center">
  <a href="https://github.com/ArcherSavitar/NFNJCalculator">
    <img src="https://img.shields.io/github/license/ArcherSavitar/NFNJCalculator" alt="License" />
  </a>
  <a href="https://github.com/ArcherSavitar/NFNJCalculator">
    <img src="https://img.shields.io/github/stars/ArcherSavitar/NFNJCalculator" alt="Stars" />
  </a>
  <a href="https://github.com/ArcherSavitar/NFNJCalculator">
    <img src="https://img.shields.io/github/forks/ArcherSavitar/NFNJCalculator" alt="Forks" />
  </a>
</p>

---

## 项目简介

NFNJ Calculator (No Fap No Jerk 计算器) 是一款帮助用户记录自我约束天数的移动应用。通过简洁美观的 UI 设计，结合赛季管理系统和每日鸡汤文激励，帮助用户养成自律习惯。

---

## 功能特性

### 跟队计数
- 点击"跟队"按钮记录每一天的坚持
- 大字号数值显示，清晰直观
- 支持手动修改数值（纠正误触）

### 赛季管理
- Season 1/2/3... 赛季系统
- 添加新赛季自动保存历史记录
- 查看历史赛季数据

### 每日鸡汤
- 100+ 条精选励志语录
- 每日自动刷新
- 点击可手动更换

### SpoonRealiam
- 内置 WebView 抖音页面
- 随时获取激励内容

---

## 技术栈

| 技术 | 说明 |
|------|------|
| React Native 0.83.2 | 跨平台移动开发框架 |
| Expo 55.0.6 | 简化 React Native 开发 |
| TypeScript 5.9 | 类型安全 |
| React Navigation | 底部导航 |
| AsyncStorage | 本地数据持久化 |

---

## 界面预览

```
┌─────────────────────────────┐
│      No Fap No Jerk        │
│        坚持就是胜利         │
├─────────────────────────────┤
│      [Season 1 ▼]         │
├─────────────────────────────┤
│                             │
│           128              │
│                             │
├─────────────────────────────┤
│        [ 跟 队 ]           │
├─────────────────────────────┤
│  今天的坚持是为了更好的明天  │
│           —— 匿名          │
└─────────────────────────────┘
```

---

## 项目结构

```
NFNJCalculator/
├── src/
│   ├── components/          # UI 组件
│   │   ├── CounterButton.tsx
│   │   ├── QuoteDisplay.tsx
│   │   ├── SeasonModal.tsx
│   │   ├── SeasonSelector.tsx
│   │   └── ValueDisplay.tsx
│   ├── constants/          # 样式常量
│   ├── context/           # 状态管理
│   ├── data/              # 鸡汤数据
│   ├── screens/           # 页面
│   │   ├── HomeScreen.tsx
│   │   └── DouyinScreen.tsx
│   ├── services/          # 业务逻辑
│   ├── storage/           # 数据持久化
│   └── types/             # 类型定义
├── App.tsx                # 应用入口
└── package.json
```

---

## 快速开始

### 安装依赖

```bash
npm install
```

### 运行项目

#### Web 预览
```bash
npm run web
```

#### Android
```bash
npm run android
```

#### iOS
```bash
npm run ios
```

---

## 版本历史

| 版本 | 日期 | 描述 |
|------|------|------|
| v1.0.0 | 2026-03-16 | 初始版本发布 |
| v1.1.0 | - | 底部导航 + 抖音页面 |

---

## 许可证

MIT License - 查看 [LICENSE](LICENSE) 文件

---

## 贡献

欢迎提交 Issue 和 Pull Request！

---

<p align="center">Made with ❤️ by ArcherSavitar</p>
