# 刘志敏个人官方网站

> Java / TypeScript 全栈开发者 · 高并发系统设计 · 银发经济探索者

## 技术栈

| 技术 | 用途 |
|------|------|
| **Next.js 14** (App Router) | React 框架，支持 SSG 静态生成 |
| **TypeScript** | 类型安全 |
| **Ant Design 5.x** | UI 组件库，Ant Design Pro 风格 |
| **Vercel** | 部署平台（推荐） |

## 项目结构

```
personal-website/
├── public/images/           # 静态资源（头像、二维码等）
├── src/
│   ├── app/                 # Next.js App Router 页面
│   │   ├── layout.tsx       # 根布局（Header + Footer）
│   │   ├── page.tsx         # 首页（整合 6 个板块）
│   │   ├── globals.css      # 全局样式
│   │   └── articles/
│   │       ├── page.tsx     # 文章列表页（分类 + 分页）
│   │       └── [id]/
│   │           └── page.tsx # 文章详情页
│   ├── components/          # 公共组件
│   │   ├── Header.tsx          # 固定导航栏
│   │   ├── Footer.tsx          # 页脚
│   │   ├── Sidebar.tsx         # 侧边栏（热门文章 + 广告）
│   │   ├── AdBanner.tsx        # Google AdSense 广告位
│   │   ├── ArticleCard.tsx     # 文章卡片
│   │   ├── ArticleDetailClient.tsx  # 文章详情交互组件
│   │   ├── HeroSection.tsx     # 首页 Hero 区
│   │   ├── AboutSection.tsx    # 关于我
│   │   ├── OfficialAccountSection.tsx  # 公众号推广
│   │   ├── MiniProgramSection.tsx     # 小程序展示
│   │   ├── NewsHubSection.tsx  # 头条专栏
│   │   └── NewsFeedSection.tsx # 新闻动态
│   ├── data/
│   │   └── mock.ts           # 模拟数据（可替换为 API）
│   └── types/
│       └── index.ts          # TypeScript 类型定义
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## 6 大核心板块

1. **首页 Hero** — 大标题 + 个人简介 + CTA 按钮
2. **关于我** — 头像、个人简介、技能标签、联系方式
3. **公众号推广** — 老年经济软文 + 二维码展示
4. **我的小程序** — 小程序截图 + 功能介绍 + 扫码入口
5. **头条专栏** — 足球分析 / AI 科技文章，支持分类和分页
6. **新闻动态** — 行业动态与公告展示

## 快速开始

```bash
# 安装依赖
yarn install

# 启动开发服务器
yarn dev

# 打开浏览器访问
open http://localhost:3000
```

## 自定义修改指南

### 1. 替换个人信息

编辑 `src/data/mock.ts` 中的 `profile` 对象：

```typescript
export const profile = {
  name: '你的名字',
  // ...
};
```

### 2. 替换二维码和图片

将你的图片放入 `public/images/` 目录，然后更新 `src/data/mock.ts` 中对应的图片路径：

- `avatar` — 个人头像
- `officialAccount.qrCodeImage` — 公众号二维码
- `miniProgram.screenshotImage` — 小程序截图
- `miniProgram.qrCodeImage` — 小程序码

### 3. 添加文章

在 `src/data/mock.ts` 的 `mockArticles` 数组中添加新文章：

```typescript
{
  id: 'football-11',
  title: '你的文章标题',
  summary: '文章摘要...',
  content: '文章正文...',
  category: 'football', // 或 'tech'
  author: '刘志敏',
  publishDate: '2026-05-15',
  tags: ['标签1', '标签2'],
  viewCount: 0,
}
```

### 4. 配置 Google AdSense

1. 在 `src/components/AdBanner.tsx` 中替换 `data-ad-client` 为你的 AdSense 发布商 ID
2. 在 `src/app/layout.tsx` 中取消 AdSense 脚本的注释
3. 替换对应的 `data-ad-slot` 值

### 5. 修改网站标题 / SEO

编辑 `src/app/layout.tsx` 中的 `metadata` 对象。

## 部署到 Vercel（推荐）

### 方式一：GitHub + Vercel（自动部署）

```bash
# 1. 初始化 Git 仓库
cd personal-website
git init
git add .
git commit -m "初始化个人网站"

# 2. 推送到 GitHub
git remote add origin https://github.com/liuzm/personal-website.git
git branch -M main
git push -u origin main

# 3. 在 Vercel 中导入仓库
# 访问 https://vercel.com/new
# 选择你的 GitHub 仓库
# 框架自动识别为 Next.js
# 点击 Deploy 即可
```

### 方式二：Vercel CLI

```bash
# 安装 Vercel CLI
npm install -g vercel

# 部署
vercel

# 生产环境
vercel --prod
```

### 方式三：GitHub Pages

如需部署到 GitHub Pages，取消 `next.config.js` 中 `output: 'export'` 的注释，然后：

```bash
# 构建静态文件
yarn build

# 将 out/ 目录部署到 GitHub Pages
npx gh-pages -d out
```

### 自定义域名

在 Vercel 项目设置中添加你的自定义域名，并在 DNS 服务商处配置 CNAME 记录。

## 推荐修改顺序

1. `src/data/mock.ts` — 替换个人信息、公众号、小程序数据
2. `public/images/` — 放入真实图片
3. `src/app/layout.tsx` — 修改 SEO 信息
4. `src/data/mock.ts` — 添加真实文章内容
5. 配置 Google AdSense

## License

MIT
