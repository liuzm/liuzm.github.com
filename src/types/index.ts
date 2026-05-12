/**
 * 文章分类枚举
 * FOOTBALL: 足球分析文章
 * TECH: AI 科技资讯
 */
export type ArticleCategory = 'football' | 'tech';

/**
 * 文章接口定义
 */
export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;         // Markdown 格式的文章内容
  category: ArticleCategory;
  coverImage?: string;      // 封面图 URL
  author: string;
  publishDate: string;      // ISO 日期字符串
  tags: string[];
  viewCount: number;
}

/**
 * 新闻动态条目
 */
export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  link?: string;
  publishDate: string;
  type: 'industry' | 'announcement' | 'update';
}

/**
 * 技能标签
 */
export interface Skill {
  name: string;
  level: 'expert' | 'proficient' | 'familiar';
}

/**
 * 分页响应结构
 */
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}
