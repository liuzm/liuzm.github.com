import React from 'react';
import { Empty, Button } from 'antd';
import Link from 'next/link';
import { getArticleById, mockArticles } from '@/data/mock';
import ArticleDetailClient from '@/components/ArticleDetailClient';

/**
 * 静态生成参数 — 预生成所有文章页面
 * 这样支持 next.config.js 中的 output: 'export' 模式
 */
export async function generateStaticParams() {
  return mockArticles.map((article) => ({
    id: article.id,
  }));
}

/**
 * 文章详情页 — 服务端组件
 *
 * 职责：
 * 1. 通过 params.id 获取文章数据
 * 2. 将数据传递给 ArticleDetailClient 渲染
 * 3. 处理文章不存在的 404 情况
 */
export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = getArticleById(params.id);

  if (!article) {
    return (
      <div
        className="section section-light"
        style={{
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Empty
          description="文章不存在或已被删除"
          style={{ margin: '40px 0' }}
        >
          <Link href="/articles">
            <Button type="primary">返回文章列表</Button>
          </Link>
        </Empty>
      </div>
    );
  }

  return <ArticleDetailClient article={article} />;
}
