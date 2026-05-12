'use client';

import React, { useState, useEffect, Suspense } from 'react';
import {
  Typography,
  Row,
  Col,
  Pagination,
  Tabs,
  Empty,
  Spin,
  Breadcrumb,
} from 'antd';
import { HomeOutlined, FileTextOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { getArticlesByCategory } from '@/data/mock';
import ArticleCard from '@/components/ArticleCard';
import Sidebar from '@/components/Sidebar';
import AdBanner from '@/components/AdBanner';
import type { ArticleCategory } from '@/types';

const { Title, Text } = Typography;

/**
 * 文章列表页内容（内部组件）
 * 使用 useSearchParams 需要 Suspense 包裹
 */
function ArticlesContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') as ArticleCategory | null;

  const [category, setCategory] = useState<ArticleCategory | 'all'>(
    initialCategory && ['football', 'tech'].includes(initialCategory)
      ? initialCategory
      : 'all'
  );
  const [page, setPage] = useState(1);
  const pageSize = 6;

  // 监听 URL 参数变化
  useEffect(() => {
    const cat = searchParams.get('category') as ArticleCategory | null;
    if (cat && ['football', 'tech'].includes(cat)) {
      setCategory(cat);
      setPage(1);
    }
  }, [searchParams]);

  const { items: articles, total } = getArticlesByCategory(category, page, pageSize);
  const isLoading = false;

  // Tab 配置
  const tabItems = [
    { key: 'all', label: '全部文章' },
    { key: 'football', label: '足球分析' },
    { key: 'tech', label: 'AI 科技' },
  ];

  const handleTabChange = (key: string) => {
    setCategory(key as ArticleCategory | 'all');
    setPage(1);
  };

  return (
    <div className="section section-light" style={{ minHeight: '100vh' }}>
      <div className="page-container">
        {/* 面包屑导航 */}
        <Breadcrumb
          items={[
            { title: <Link href="/"><HomeOutlined /> 首页</Link> },
            { title: <><FileTextOutlined /> 头条专栏</> },
          ]}
          style={{ marginBottom: 16 }}
        />

        {/* 页面标题 */}
        <Title level={2} className="section-title" style={{ textAlign: 'left' }}>
          头条专栏
        </Title>
        <Text className="section-subtitle" style={{ textAlign: 'left', display: 'block' }}>
          精选足球分析与 AI 科技资讯
        </Text>

        {/* 分类 Tab */}
        <Tabs
          activeKey={category}
          onChange={handleTabChange}
          items={tabItems}
          style={{ marginTop: 8 }}
        />

        <Row gutter={[32, 32]}>
          {/* 主内容区 */}
          <Col xs={24} lg={16}>
            <Spin spinning={isLoading}>
              {articles.length > 0 ? (
                <>
                  <Row gutter={[24, 24]}>
                    {articles.map((article) => (
                      <Col xs={24} sm={12} key={article.id}>
                        <ArticleCard article={article} />
                      </Col>
                    ))}
                  </Row>

                  {/* 列表底部广告位 */}
                  <AdBanner size="728x90" position="article-list-bottom" />

                  {/* 分页 */}
                  <div style={{ textAlign: 'center', marginTop: 32 }}>
                    <Pagination
                      current={page}
                      total={total}
                      pageSize={pageSize}
                      onChange={setPage}
                      showSizeChanger={false}
                      showTotal={(t) => `共 ${t} 篇文章`}
                    />
                  </div>
                </>
              ) : (
                <Empty
                  description="暂无文章"
                  style={{ margin: '80px 0' }}
                />
              )}
            </Spin>
          </Col>

          {/* 侧边栏 */}
          <Col xs={24} lg={8}>
            <Sidebar />
          </Col>
        </Row>
      </div>
    </div>
  );
}

/**
 * 文章列表页（头条专栏）
 * 用 Suspense 包裹 useSearchParams()
 */
export default function ArticlesPage() {
  return (
    <Suspense fallback={
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <Spin size="large" />
      </div>
    }>
      <ArticlesContent />
    </Suspense>
  );
}
