'use client';

import React from 'react';
import { Card, Typography, Divider, Tag, Space, Button } from 'antd';
import {
  FireOutlined,
  RightOutlined,
  FileTextOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { mockArticles, getCategoryName } from '@/data/mock';
import AdBanner from './AdBanner';
import type { ArticleCategory } from '@/types';

const { Text, Title } = Typography;

/**
 * 侧边栏组件
 * 包含：热门文章、广告位、分类标签
 */
export default function Sidebar() {
  // 按阅读量排序，取前 5 篇热门文章
  const hotArticles = [...mockArticles]
    .sort((a, b) => b.viewCount - a.viewCount)
    .slice(0, 5);

  // 获取所有分类
  const categories: { key: ArticleCategory | 'all'; label: string }[] = [
    { key: 'all', label: '全部' },
    { key: 'football', label: '足球分析' },
    { key: 'tech', label: 'AI 科技' },
  ];

  return (
    <aside style={{ width: '100%' }}>
      {/* 分类导航 */}
      <Card
        size="small"
        title={
          <Space>
            <FileTextOutlined />
            <span>文章分类</span>
          </Space>
        }
        style={{ marginBottom: 16 }}
      >
        <Space wrap size={[4, 8]}>
          {categories.map((cat) => (
            <Link key={cat.key} href={cat.key === 'all' ? '/articles' : `/articles?category=${cat.key}`}>
              <Tag
                color="blue"
                style={{ cursor: 'pointer', padding: '2px 12px', fontSize: 13 }}
              >
                {cat.label}
              </Tag>
            </Link>
          ))}
        </Space>
      </Card>

      {/* 热门文章 */}
      <Card
        size="small"
        title={
          <Space>
            <FireOutlined style={{ color: '#ff4d4f' }} />
            <span>热门文章</span>
          </Space>
        }
        style={{ marginBottom: 16 }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {hotArticles.map((article, index) => (
            <Link
              key={article.id}
              href={`/articles/${article.id}`}
              style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}
            >
              <span
                style={{
                  minWidth: 20,
                  height: 20,
                  borderRadius: 4,
                  background: index < 3 ? '#ff4d4f' : '#d9d9d9',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 11,
                  fontWeight: 600,
                  marginTop: 2,
                }}
              >
                {index + 1}
              </span>
              <span
                style={{
                  flex: 1,
                  fontSize: 13,
                  lineHeight: '20px',
                  color: '#333',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {article.title}
              </span>
            </Link>
          ))}
        </div>
      </Card>

      {/* 广告位 */}
      <AdBanner slot="9021853749" />

      {/* 关注提示 */}
      <Card size="small" style={{ marginTop: 16 }}>
        <div style={{ textAlign: 'center', padding: '8px 0' }}>
          <Text style={{ fontSize: 14, fontWeight: 600, display: 'block', marginBottom: 8 }}>
            关注我的头条号
          </Text>
          <Space direction="vertical" size={4}>
            <Button
              type="link"
              icon={<RightOutlined />}
              href="https://www.toutiao.com/search/?keyword=aliuge0608"
              target="_blank"
              style={{ padding: 0, fontSize: 14 }}
            >
              @aliuge0608
            </Button>
          </Space>
        </div>
      </Card>
    </aside>
  );
}
