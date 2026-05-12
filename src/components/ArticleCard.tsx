'use client';

import React from 'react';
import { Card, Tag, Typography, Space } from 'antd';
import {
  EyeOutlined,
  CalendarOutlined,
  RightOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { getCategoryName } from '@/data/mock';
import type { Article } from '@/types';

const { Title, Text, Paragraph } = Typography;

/**
 * 文章卡片组件 — 用于文章列表页
 */
interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={`/articles/${article.id}`}>
      <Card
        hoverable
        style={{
          borderRadius: 12,
          height: '100%',
          border: '1px solid #f0f0f0',
          transition: 'all 0.3s',
        }}
        styles={{
          body: { padding: 24 },
        }}
        className="article-card"
      >
        {/* 分类和标签 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <Tag color={article.category === 'football' ? 'green' : 'blue'}>
            {getCategoryName(article.category)}
          </Tag>
          <Space size={4}>
            {article.tags.slice(0, 2).map((tag) => (
              <Tag key={tag} style={{ fontSize: 11 }}>{tag}</Tag>
            ))}
          </Space>
        </div>

        {/* 标题 */}
        <Title level={4} style={{ margin: '0 0 12px', lineHeight: 1.4, fontSize: 18 }}>
          {article.title}
        </Title>

        {/* 摘要 */}
        <Paragraph
          ellipsis={{ rows: 3 }}
          style={{ color: '#666', fontSize: 14, marginBottom: 16, lineHeight: 1.7 }}
        >
          {article.summary}
        </Paragraph>

        {/* 底部信息 */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '1px solid #f5f5f5',
          paddingTop: 12,
        }}>
          <Space size={16}>
            <Text style={{ fontSize: 12, color: '#999' }}>
              <CalendarOutlined style={{ marginRight: 4 }} />
              {article.publishDate}
            </Text>
            <Text style={{ fontSize: 12, color: '#999' }}>
              <EyeOutlined style={{ marginRight: 4 }} />
              {article.viewCount} 次阅读
            </Text>
          </Space>
          <Text style={{ color: 'var(--primary-color)', fontSize: 13 }}>
            阅读全文 <RightOutlined style={{ fontSize: 12 }} />
          </Text>
        </div>
      </Card>
    </Link>
  );
}
