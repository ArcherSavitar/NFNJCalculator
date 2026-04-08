# No Fap No Jerk 计算器 - 软件设计文档

## 1. 项目概述

**项目名称**: No Fap No Jerk 计算器 (NFNJ Calculator)
**项目类型**: 移动端应用 (React Native / Expo)
**核心功能**: 自我约束打卡记录应用，支持赛季管理、数值追踪、每日鸡汤文激励
**目标用户**: 希望通过自律习惯提升自我的用户

---

## 2. 技术栈

| 层级 | 技术选型 |
|------|----------|
| 框架 | React Native 0.83.2 + Expo 55.0.6 |
| 语言 | TypeScript 5.9.2 |
| 状态管理 | React Context + useReducer |
| 数据持久化 | AsyncStorage |
| 鸡汤数据库 | 本地 JSON (100条) |

---

## 3. 功能模块

### 3.1 赛季管理系统

- **一级入口**: 显示当前赛季 "Season X"
- **二级菜单**: 弹窗显示历史赛季列表
- **新增赛季**: 点击按钮创建新赛季
  - 自动保存当前赛季数据到历史记录
  - 当前数值归零，重新开始计数

### 3.2 数值显示与编辑

- **数值展示**: 大字号居中显示当前赛季天数
- **交互编辑**: 点击数值弹出编辑框，支持手动修改

### 3.3 计数器

- **跟队按钮**: 点击使数值 +1
- **反馈**: 按钮带有点击动画效果

### 3.4 每日鸡汤文

- **展示区域**: 底部滚动区域
- **刷新机制**: 每日自动更换一条新鸡汤
- **数据源**: 本地 100 条语录数据库

---

## 4. 数据结构

```typescript
interface Season {
  id: number;           // 赛季编号
  value: number;        // 记录数值
  createdAt: string;    // 开始时间
  endedAt: string | null; // 结束时间
}

interface AppState {
  currentSeason: number;   // 当前赛季编号
  currentValue: number;    // 当前数值
  seasons: Season[];       // 历史赛季记录
  lastQuoteDate: string | null; // 上次鸡汤日期
}
```

---

## 5. UI 设计

### 5.1 整体风格
- **主题**: 极简黑白风格，纯粹有力
- **配色**: 纯黑背景 (#000000)，白色线条/文字 (#ffffff)
- **强调色**: 极简风格下不使用强调色，所有元素以黑白呈现
- **设计理念**: 去除一切多余装饰，以最纯粹的形式呈现数据
- **布局**: 垂直滚动，单页面设计

### 5.2 页面结构

```
┌─────────────────────────────┐
│      No Fap No Jerk        │  <- 顶部标题
│        坚持就是胜利         │  <- 副标题
├─────────────────────────────┤
│      [Season 1 ▼]         │  <- 赛季选择器
├─────────────────────────────┤
│                             │
│           128              │  <- 数值显示(可编辑)
│                             │
├─────────────────────────────┤
│        [ 跟 队 ]           │  <- 计数器按钮
├─────────────────────────────┤
│  今天的坚持是为了更好的明天  │  <- 每日鸡汤
│           —— 匿名          │
└─────────────────────────────┘
```

---

## 6. 目录结构

```
src/
├── components/           # UI 组件
│   ├── CounterButton.tsx
│   ├── QuoteDisplay.tsx
│   ├── SeasonModal.tsx
│   ├── SeasonSelector.tsx
│   └── ValueDisplay.tsx
├── constants/           # 常量配置
│   └── colors.ts
├── context/              # 状态管理
│   └── AppContext.tsx
├── data/                # 数据存储
│   └── quotes.ts
├── screens/              # 页面
│   └── HomeScreen.tsx
├── services/            # 业务逻辑
│   └── quoteService.ts
├── storage/             # 数据持久化
│   └── localStorage.ts
└── types/               # 类型定义
    └── index.ts
```

---

## 7. 版本与部署

- **当前版本**: 1.0.0
- **构建命令**: `expo start` / `expo run:android`
- **GitHub**: https://github.com/ArcherSavitar/NFNJCalculator
