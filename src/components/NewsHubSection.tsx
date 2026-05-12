'use client';

import React, { useState } from 'react';
import { Typography, Row, Col, Pagination, Tabs, Card, Tag, Space, Empty, Button } from 'antd';
import {
  FileTextOutlined,
  EyeOutlined,
  CalendarOutlined,
  RightOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { getArticlesByCategory, getCategoryName } from '@/data/mock';
import type { ArticleCategory } from '@/types';
import AdBanner from './AdBanner';

const { Title, Text, Paragraph } = Typography;

/**
 * 「头条专栏」板块 — 首页展示区域
 * 显示最新文章预览，支持分类切换
 */
export default function NewsHubSection() {
  const [category, setCategory] = useState<ArticleCategory | 'all'>('all');
  const [page, setPage] = useState(1);
  const pageSize = 4;

  const { items: articles, total } = getArticlesByCategory(category, page, pageSize);

  // Tab 配置
  const tabItems = [
    { key: 'all', label: '全部' },
    { key: 'football', label: '足球分析' },
    { key: 'tech', label: 'AI 科技' },
  ];

  const handleTabChange = (key: string) => {
    setCategory(key as ArticleCategory | 'all');
    setPage(1);
  };

  return (
    <section id="news-hub" className="section section-white">
      <div className="page-container">
        {/* 板块标题 */}
        <Title level={2} className="section-title">头条专栏</Title>
        <Text className="section-subtitle">精选足球分析与 AI 科技资讯</Text>

        {/* 分类 Tab */}
        <Tabs
          activeKey={category}
          onChange={handleTabChange}
          centered
          items={tabItems}
          style={{ marginBottom: 0 }}
        />

        {/* 文章列表 */}
        {articles.length > 0 ? (
          <Row gutter={[24, 24]} style={{ marginTop: 8 }}>
            {articles.map((article) => (
              <Col xs={24} sm={12} lg={12} key={article.id}>
                <Link href={`/articles/${article.id}`}>
                  <Card
                    hoverable
                    style={{
                      borderRadius: 12,
                      height: '100%',
                      border: '1px solid #f0f0f0',
                    }}
                    styles={{ body: { padding: 20 } }}
                  >
                    {/* 分类标签 */}
                    <Tag
                      color={article.category === 'football' ? 'green' : 'blue'}
                      style={{ marginBottom: 8 }}
                    >
                      {getCategoryName(article.category)}
                    </Tag>

                    {/* 标题 */}
                    <Title level={4} style={{ margin: '8px 0', lineHeight: 1.4 }}>
                      {article.title}
                    </Title>

                    {/* 摘要 */}
                    <Paragraph
                      ellipsis={{ rows: 2 }}
                      style={{ color: '#666', fontSize: 14, marginBottom: 12 }}
                    >
                      {article.summary}
                    </Paragraph>

                    {/* 底部信息 */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Space size={16}>
                        <Text style={{ fontSize: 12, color: '#999' }}>
                          <CalendarOutlined style={{ marginRight: 4 }} />
                          {article.publishDate}
                        </Text>
                        <Text style={{ fontSize: 12, color: '#999' }}>
                          <EyeOutlined style={{ marginRight: 4 }} />
                          {article.viewCount}
                        </Text>
                      </Space>
                      <Button type="link" size="small">
                        阅读更多 <RightOutlined />
                      </Button>
                    </div>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        ) : (
          <Empty description="暂无文章" style={{ margin: '40px 0' }} />
        )}

        {/* 分页 */}
        {total > pageSize && (
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Pagination
              current={page}
              total={total}
              pageSize={pageSize}
              onChange={setPage}
              showSizeChanger={false}
            />
          </div>
        )}

        {/* 查看更多 */}
        <div style={{ textAlign: 'center', marginTop: 24 }}>
          <Link href="/articles">
            <Button type="primary" ghost icon={<FileTextOutlined />}>
              查看全部文章
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
