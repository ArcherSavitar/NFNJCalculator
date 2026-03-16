# Architecture - NFNJ Calculator

## 项目结构

```
NFNJCalculator/
├── src/
│   ├── components/          # UI 组件层
│   ├── constants/          # 常量配置
│   ├── context/            # 状态管理
│   ├── data/               # 静态数据
│   ├── screens/            # 页面
│   ├── services/           # 业务逻辑服务
│   ├── storage/            # 数据持久化
│   └── types/              # TypeScript 类型定义
├── memory-bank/            # 项目文档
├── App.tsx                 # 应用入口
└── package.json            # 依赖配置
```

---

## 文件详解

### /src/types/index.ts
**作用**: TypeScript 类型定义中心
- `Season` - 赛季数据结构
- `AppState` - 全局应用状态
- `Quote` - 鸡汤文数据结构
- `AppContextType` - Context API 类型

### /src/constants/colors.ts
**作用**: 主题配色与样式常量
- 颜色配置 (背景、文字、强调色等)
- 间距配置 (spacing)
- 字号配置 (fontSize)
- 圆角配置 (borderRadius)

### /src/context/AppContext.tsx
**作用**: 全局状态管理 (核心)
- 使用 React Context + useReducer
- 管理当前赛季、当前数值、历史赛季数据
- 提供 incrementValue、setValue、addNewSeason 等操作方法
- 自动持久化数据到 AsyncStorage

### /src/storage/localStorage.ts
**作用**: 数据持久化层
- `saveState()` - 保存应用状态
- `loadState()` - 加载应用状态
- `createSeason()` - 创建新赛季记录

### /src/services/quoteService.ts
**作用**: 鸡汤文服务
- `getDailyQuote()` - 获取每日鸡汤 (根据日期)
- `getRandomQuote()` - 随机获取鸡汤

### /src/data/quotes.ts
**作用**: 鸡汤文数据库
- 100 条本地鸡汤数据
- 包含 id、content、author 字段

### /src/components/SeasonSelector.tsx
**作用**: 赛季选择器按钮
- 显示 "Season X" 点击打开弹窗
- 入口组件，点击触发 Modal

### /src/components/SeasonModal.tsx
**作用**: 赛季管理弹窗
- 显示当前赛季状态
- 展示历史赛季列表
- 提供"添加新赛季"按钮

### /src/components/ValueDisplay.tsx
**作用**: 数值显示与编辑
- 大字号显示当前数值
- 点击弹出 Modal 编辑数值
- 包含保存/取消功能

### /src/components/CounterButton.tsx
**作用**: 计数器按钮
- 显示 "跟队 +1"
- 点击数值 +1
- 带按压缩放动画效果

### /src/components/QuoteDisplay.tsx
**作用**: 鸡汤文展示
- 显示当日鸡汤
- 点击可手动刷新更换

### /src/screens/HomeScreen.tsx
**作用**: 主页面（跟队页面）
- 整合所有组件
- 页面布局与样式

### /src/screens/DouyinScreen.tsx
**作用**: SpoonRealiam 页面
- 使用 WebView 加载抖音链接
- 内嵌式浏览器体验
- URL: https://v.douyin.com/B_ig43GpmNE/

### App.tsx
**作用**: 应用入口
- 配置 AppProvider
- 配置底部导航
- 启动应用

---

## 数据流

```
用户操作
    ↓
useApp() Hook (Context)
    ↓
Reducer 处理 action
    ↓
更新 State
    ↓
    ├── 触发 UI 渲染
    └── 触发 localStorage.saveState()
```

---

## 组件层级

```
App
└── AppProvider
    └── BottomTabNavigator (底部导航)
        ├── HomeScreen (跟队页面)
        │   ├── Header (标题)
        │   ├── SeasonSelector (赛季选择)
        │   ├── ValueDisplay (数值显示)
        │   ├── CounterButton (计数器)
        │   ├── QuoteDisplay (鸡汤展示)
        │   └── SeasonModal (弹窗)
        └── DouyinScreen (SpoonRealiam 页面)
            └── WebView (网页加载)
```

---

## 技术架构特点

| 特点 | 说明 |
|------|------|
| 单向数据流 | State → UI → Action → Reducer → State |
| 状态提升 | 状态集中在 AppContext |
| 数据持久化 | 每次状态变更自动保存 |
| 组件化 | 单一职责组件 |
| TypeScript | 完整类型定义 |
| 底部导航 | React Navigation 底部标签导航 |
| WebView | 抖音页面内嵌浏览 |
