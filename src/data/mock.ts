import type { Article, NewsItem, ArticleCategory, PaginatedResponse } from '@/types';

// ============================================================
// 个人资料 — 请替换为你自己的信息
// ============================================================
export const profile = {
  name: '刘志敏',
  englishName: 'Liu Zhimin',
  title: 'Java / TypeScript 全栈开发者',
  bio: `资深 Java 开发者，拥有多年企业级应用开发经验。
擅长高并发系统设计与调优，对 NIO 网络编程有深入研究。
热爱技术，追求代码质量与工程效率。工作之余，
关注技术分享与开源，运营相关公众号与小程序。`,
  avatar: '/images/avatar-placeholder.png',   // 替换为你的头像
  email: 'aliuge0608@gmail.com',                // 替换为你的邮箱
  wechat: 'aliuge0608',                    // 替换为你的微信号
  social: {
    github: 'https://github.com/liuzm',
    // 如有其他社交链接，可在此添加
  },
  skills: [
    { name: 'Java', level: 'expert' },
    { name: 'Spring Boot', level: 'expert' },
    { name: 'NIO / Netty', level: 'expert' },
    { name: '高并发架构', level: 'expert' },
    { name: 'TypeScript', level: 'proficient' },
    { name: 'React', level: 'proficient' },
    { name: 'Ant Design', level: 'proficient' },
    { name: 'MySQL', level: 'proficient' },
    { name: 'Redis', level: 'proficient' },
    { name: 'Kafka', level: 'familiar' },
    { name: 'Docker', level: 'familiar' },
    { name: 'Kubernetes', level: 'familiar' },
  ] as const,
};

// ============================================================
// 公众号信息 — 请替换为你自己的
// ============================================================
export const officialAccount = {
  name: '牛流刘',
  description: `专注技术分享，涵盖 Java / TypeScript 全栈开发、
高并发系统设计、AI 科技前沿等实用技术内容。`,
  qrCodeImage: '/images/qrcode_for_gh_572ef77cd45c_258.jpg',
  recentArticles: [
    'Spring Boot 3.x 新特性详解：从迁移到实战',
    '高并发系统设计：从线程池到协程的演进之路',
    'AI Agent 开发实战：用 LangChain 构建智能应用',
    'TypeScript 高级类型体操：从入门到精通',
  ],
};

// ============================================================
// 小程序信息 — 请替换为你自己的
// ============================================================
export const miniProgram = {
  name: '灵机玄谈',
  description: `一款 AI 驱动的健康生活小助手。
提供智能健康问答、生活建议、养生知识等贴心服务。`,
  screenshotImage: '/images/mini-program-screenshot.png',
  qrCodeImage: '/images/1.png',
  features: [
    'AI 智能问答：健康问题随时问，秒回专业建议',
    '生活助手：天气、菜谱、出行一站式服务',
    '养生知识：每日推送科学养生小贴士',
    '健康管理：个性化饮食与运动建议',
  ],
};

// ============================================================
// 模拟文章数据
// ============================================================
export const mockArticles: Article[] = [
  // --- 足球分析文章（10 篇） ---
  {
    id: 'football-01',
    title: '欧冠决赛战术复盘：高位逼抢如何在 2026 年成为制胜关键',
    summary: '深度分析本赛季欧冠决赛中高位逼抢战术的演变与应用，从数据角度拆解两支决赛球队的攻防博弈。',
    content: `# 欧冠决赛战术复盘

## 高位逼抢的进化

2026 年的欧冠决赛向我们展示了现代足球战术的最新进化方向...

（此处为文章正文，你可以替换为真实的足球分析内容）

## 数据解读

- 控球率：52% vs 48%
- 抢断成功率：78% vs 65%
- 高位压迫成功率：34% vs 22%

## 关键球员表现

...`,
    category: 'football',
    author: '刘志敏',
    publishDate: '2026-05-10',
    tags: ['欧冠', '战术分析', '足球'],
    viewCount: 1523,
  },
  {
    id: 'football-02',
    title: '世界杯预选赛亚洲区形势分析：国足出线概率与关键战役',
    summary: '基于最新积分榜和剩余赛程，计算各队理论出线概率，重点分析国足的关键战役与战术调整建议。',
    content: `# 世界杯预选赛分析

（文章正文内容，请替换为你的分析文章）`,
    category: 'football',
    author: '刘志敏',
    publishDate: '2026-05-08',
    tags: ['世界杯', '国足', '预选赛'],
    viewCount: 2341,
  },
  {
    id: 'football-03',
    title: '英超转会窗深度观察：Big 6 的夏季引援策略对比',
    summary: '系统梳理英超六大豪门在夏季转会窗的引援操作，从战术适配度和投资回报率两个维度进行评估。',
    content: `# 英超转会窗深度观察

（文章正文内容，请替换为你的分析文章）`,
    category: 'football',
    author: '刘志敏',
    publishDate: '2026-05-05',
    tags: ['英超', '转会', '足球'],
    viewCount: 1890,
  },
  {
    id: 'football-04',
    title: '从数据看瓜迪奥拉的战术革命：边后腰体系的进化史',
    summary: '追踪瓜迪奥拉从巴萨到曼城的战术演变，重点分析边后腰（Inverted Full-back）体系的形成与进化。',
    content: `# 瓜迪奥拉的战术革命

（文章正文内容，请替换为你的分析文章）`,
    category: 'football',
    author: '刘志敏',
    publishDate: '2026-05-02',
    tags: ['瓜迪奥拉', '战术', '曼城'],
    viewCount: 2105,
  },
  {
    id: 'football-05',
    title: '青训观察：拉玛西亚 vs 克莱枫丹，两种青训哲学的碰撞',
    summary: '对比巴萨拉玛西亚和法国克莱枫丹两大青训营的培养理念、训练方法和成材率。',
    content: `# 青训观察

（文章正文内容，请替换为你的分析文章）`,
    category: 'football',
    author: '刘志敏',
    publishDate: '2026-04-28',
    tags: ['青训', '拉玛西亚', '克莱枫丹'],
    viewCount: 967,
  },
  {
    id: 'football-06',
    title: '意甲复兴：从低谷到重回世界第一联赛的十年之路',
    summary: '回顾意甲从 2010 年代的低谷到 2020 年代的全面复兴，分析其背后的商业运作与战术革新。',
    content: `# 意甲复兴之路

（文章正文内容，请替换为你的分析文章）`,
    category: 'football',
    author: '刘志敏',
    publishDate: '2026-04-25',
    tags: ['意甲', '足球', '复兴'],
    viewCount: 1345,
  },
  {
    id: 'football-07',
    title: 'VAR 技术争议不断：足球裁判系统是否需要全面改革？',
    summary: '梳理 VAR 技术引入后的主要争议事件，探讨半自动越位技术和鹰眼系统的改进方案。',
    content: `# VAR 技术争议

（文章正文内容，请替换为你的分析文章）`,
    category: 'football',
    author: '刘志敏',
    publishDate: '2026-04-22',
    tags: ['VAR', '裁判', '技术'],
    viewCount: 2876,
  },
  {
    id: 'football-08',
    title: '亚洲足球崛起：日韩球员在欧洲五大联赛的最新表现',
    summary: '统计本赛季日韩球员在五大联赛的出場时间、进球和助攻数据，分析亚洲足球的进步轨迹。',
    content: `# 亚洲足球崛起

（文章正文内容，请替换为你的分析文章）`,
    category: 'football',
    author: '刘志敏',
    publishDate: '2026-04-18',
    tags: ['亚洲足球', '日韩', '五大联赛'],
    viewCount: 1654,
  },
  {
    id: 'football-09',
    title: '战术板：三中卫体系为何在当今足坛重新流行？',
    summary: '从孔蒂的切尔西到现在的英超诸强，分析三中卫体系的战术优势和适用场景。',
    content: `# 三中卫体系分析

（文章正文内容，请替换为你的分析文章）`,
    category: 'football',
    author: '刘志敏',
    publishDate: '2026-04-15',
    tags: ['战术', '三中卫', '英超'],
    viewCount: 1123,
  },
  {
    id: 'football-10',
    title: '足球数据分析革命：从传统统计到 AI 战术预测',
    summary: '介绍机器学习在足球数据分析中的应用，包括 Expected Goals、战术模式识别和伤病预测。',
    content: `# 足球数据分析革命

（文章正文内容，请替换为你的分析文章）`,
    category: 'football',
    author: '刘志敏',
    publishDate: '2026-04-12',
    tags: ['数据分析', 'AI', '足球'],
    viewCount: 1987,
  },

  // --- AI 科技资讯文章（10 篇） ---
  {
    id: 'tech-01',
    title: 'GPT-5 发布在即：大语言模型的下一步进化方向是什么？',
    summary: '汇总业界对下一代大语言模型的期待与预测，分析多模态、推理能力和 Agent 三大发展方向。',
    content: `# GPT-5 即将到来

（文章正文内容，请替换为你的 AI 科技文章）`,
    category: 'tech',
    author: '刘志敏',
    publishDate: '2026-05-11',
    tags: ['AI', 'GPT', '大语言模型'],
    viewCount: 4532,
  },
  {
    id: 'tech-02',
    title: 'AI Agent 框架对比：LangChain vs CrewAI vs AutoGen',
    summary: '从架构设计、易用性、扩展性三个维度，对比当前最主流的三个 AI Agent 开发框架。',
    content: `# AI Agent 框架对比

（文章正文内容，请替换为你的技术文章）`,
    category: 'tech',
    author: '刘志敏',
    publishDate: '2026-05-09',
    tags: ['AI Agent', 'LangChain', '框架对比'],
    viewCount: 3210,
  },
  {
    id: 'tech-03',
    title: '量子计算新突破：纠错码技术将商业化进程提前五年',
    summary: '报道量子纠错领域的最新研究突破，分析其对量子计算商业化时间线的影响。',
    content: `# 量子计算新突破

（文章正文内容，请替换为你的科技文章）`,
    category: 'tech',
    author: '刘志敏',
    publishDate: '2026-05-06',
    tags: ['量子计算', '科技突破'],
    viewCount: 1897,
  },
  {
    id: 'tech-04',
    title: 'Rust 在前端基础设施中的应用：为什么巨头们都在迁移？',
    summary: '分析 Rust 在前端工具链（SWC、Turbopack、Rome）中的应用，以及其性能优势。',
    content: `# Rust 在前端基础设施中的应用

（文章正文内容，请替换为你的技术文章）`,
    category: 'tech',
    author: '刘志敏',
    publishDate: '2026-05-04',
    tags: ['Rust', '前端', '工具链'],
    viewCount: 2456,
  },
  {
    id: 'tech-05',
    title: '自动驾驶 L4 级商业化：2026 年的现状与挑战',
    summary: '梳理当前全球自动驾驶 L4 级的商业化进展，分析技术瓶颈和政策障碍。',
    content: `# 自动驾驶商业化

（文章正文内容，请替换为你的科技文章）`,
    category: 'tech',
    author: '刘志敏',
    publishDate: '2026-05-01',
    tags: ['自动驾驶', 'AI', '商业化'],
    viewCount: 1678,
  },
  {
    id: 'tech-06',
    title: 'AI 编程助手实测：GitHub Copilot vs Cursor vs Claude Code',
    summary: '在实际项目中对比测试三个主流 AI 编程助手的代码生成质量、上下文理解和开发效率。',
    content: `# AI 编程助手实测

（文章正文内容，请替换为你的技术文章）`,
    category: 'tech',
    author: '刘志敏',
    publishDate: '2026-04-29',
    tags: ['AI编程', 'Copilot', 'Cursor'],
    viewCount: 3890,
  },
  {
    id: 'tech-07',
    title: 'WebAssembly 的 2026：从浏览器到服务端的全面渗透',
    summary: '回顾 WebAssembly 这一年来的发展，聚焦 WASI、组件模型和服务端应用场景。',
    content: `# WebAssembly 2026

（文章正文内容，请替换为你的科技文章）`,
    category: 'tech',
    author: '刘志敏',
    publishDate: '2026-04-26',
    tags: ['WebAssembly', 'WASI', '技术趋势'],
    viewCount: 1234,
  },
  {
    id: 'tech-08',
    title: '边缘 AI 崛起：在 IoT 设备上运行大模型的工程实践',
    summary: '介绍模型量化、剪枝和蒸馏技术在边缘设备上部署 AI 模型的最佳实践。',
    content: `# 边缘 AI 实践

（文章正文内容，请替换为你的技术文章）`,
    category: 'tech',
    author: '刘志敏',
    publishDate: '2026-04-23',
    tags: ['边缘AI', 'IoT', '模型优化'],
    viewCount: 1456,
  },
  {
    id: 'tech-09',
    title: '开源大模型格局变化：Llama 3、Mistral 与国产模型的竞争',
    summary: '对比当前主流开源大模型的性能、许可协议和生态建设情况。',
    content: `# 开源大模型格局

（文章正文内容，请替换为你的科技文章）`,
    category: 'tech',
    author: '刘志敏',
    publishDate: '2026-04-20',
    tags: ['开源', '大模型', 'Llama'],
    viewCount: 2765,
  },
  {
    id: 'tech-10',
    title: 'AI 在医疗影像诊断中的最新进展：FDA 认证产品盘点',
    summary: '汇总 2025-2026 年获得 FDA 认证的 AI 医疗影像产品，分析其技术原理和临床效果。',
    content: `# AI 医疗影像诊断

（文章正文内容，请替换为你的科技文章）`,
    category: 'tech',
    author: '刘志敏',
    publishDate: '2026-04-17',
    tags: ['AI医疗', '医学影像', 'FDA'],
    viewCount: 2013,
  },
];

// ============================================================
// 模拟新闻动态
// ============================================================
export const mockNews: NewsItem[] = [
  {
    id: 'news-01',
    title: '本站全新改版上线，新增 AI 科技资讯板块',
    summary: '为了更好地服务读者，网站进行了全面改版，新增 AI 科技资讯板块，提供最新的人工智能行业动态。',
    publishDate: '2026-05-01',
    type: 'update',
  },
  {
    id: 'news-02',
    title: '公众号「牛流刘」开通，专注技术分享',
    summary: '感谢各位读者的支持，公众号「牛流刘」致力于分享 Java / TypeScript 全栈开发、高并发系统设计与 AI 科技前沿内容。',
    publishDate: '2026-04-15',
    type: 'announcement',
  },
  {
    id: 'news-03',
    title: '小程序「灵机玄谈」上线，AI 健康助手',
    summary: '「灵机玄谈」是一款 AI 驱动的健康生活小助手，提供智能问答、养生知识等服务。',
    publishDate: '2026-04-01',
    type: 'update',
  },
  {
    id: 'news-04',
    title: '《2026 技术趋势白皮书》即将发布',
    summary: '由本站联合多家技术社区共同编撰的白皮书即将发布，敬请期待。',
    publishDate: '2026-03-20',
    type: 'industry',
  },
  {
    id: 'news-05',
    title: '网站已通过 ICP 备案审核',
    summary: '本站已正式通过工业和信息化部 ICP 备案审核。',
    publishDate: '2026-03-01',
    type: 'announcement',
  },
  {
    id: 'news-06',
    title: 'AI 技术开发者论坛将于 6 月在北京举办',
    summary: '本次论坛将邀请技术专家、企业代表共同探讨 AI 技术的最新进展与实践。',
    publishDate: '2026-02-28',
    type: 'industry',
  },
];

// ============================================================
// 辅助函数
// ============================================================

/**
 * 根据分类获取文章列表（模拟分页）
 */
export function getArticlesByCategory(
  category: ArticleCategory | 'all',
  page: number = 1,
  pageSize: number = 6
): PaginatedResponse<Article> {
  const filtered = category === 'all'
    ? mockArticles
    : mockArticles.filter(a => a.category === category);

  const start = (page - 1) * pageSize;
  const items = filtered.slice(start, start + pageSize);

  return {
    items,
    total: filtered.length,
    page,
    pageSize,
  };
}

/**
 * 根据 ID 获取文章
 */
export function getArticleById(id: string): Article | undefined {
  return mockArticles.find(a => a.id === id);
}

/**
 * 获取文章分类名称
 */
export function getCategoryName(category: ArticleCategory): string {
  const map: Record<ArticleCategory, string> = {
    football: '足球分析',
    tech: 'AI 科技',
  };
  return map[category];
}
