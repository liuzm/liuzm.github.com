'use client';

import React from 'react';
import {
  Typography,
  Tag,
  Space,
  Breadcrumb,
  Divider,
  Row,
  Col,
  Button,
  Empty,
} from 'antd';
import {
  HomeOutlined,
  FileTextOutlined,
  CalendarOutlined,
  EyeOutlined,
  ArrowLeftOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getCategoryName } from '@/data/mock';
import { mockArticles } from '@/data/mock';
import Sidebar from '@/components/Sidebar';
import AdBanner from '@/components/AdBanner';
import type { Article } from '@/types';

const { Title, Text, Paragraph } = Typography;

/**
 * 文章详情页 — 客户端交互部分
 */
interface ArticleDetailClientProps {
  article: Article;
}

export default function ArticleDetailClient({ article }: ArticleDetailClientProps) {
  const router = useRouter();

  // 上一篇 / 下一篇导航
  const currentIndex = mockArticles.findIndex((a) => a.id === article.id);
  const prevArticle = currentIndex > 0 ? mockArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < mockArticles.length - 1 ? mockArticles[currentIndex + 1] : null;

  return (
    <div className="section section-light" style={{ minHeight: '100vh' }}>
      <div className="page-container">
        {/* 面包屑 */}
        <Breadcrumb
          items={[
            { title: <Link href="/"><HomeOutlined /> 首页</Link> },
            { title: <Link href="/articles"><FileTextOutlined /> 头条专栏</Link> },
            { title: article.title },
          ]}
          style={{ marginBottom: 16 }}
        />

        <Row gutter={[32, 32]}>
          {/* 主内容区 */}
          <Col xs={24} lg={16}>
            {/* 返回按钮 */}
            <Button
              type="text"
              icon={<ArrowLeftOutlined />}
              onClick={() => router.push('/articles')}
              style={{ marginBottom: 16, padding: 0 }}
            >
              返回列表
            </Button>

            {/* 文章卡片 */}
            <div
              style={{
                background: '#fff',
                borderRadius: 12,
                padding: '32px 40px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              }}
            >
              {/* 分类标签 */}
              <Tag color={article.category === 'football' ? 'green' : 'blue'}>
                {getCategoryName(article.category)}
              </Tag>

              {/* 标题 */}
              <Title level={2} style={{ margin: '12px 0 16px', lineHeight: 1.4 }}>
                {article.title}
              </Title>

              {/* 元信息 */}
              <Space size={20} style={{ marginBottom: 24 }}>
                <Text type="secondary">
                  <UserOutlined style={{ marginRight: 4 }} />
                  {article.author}
                </Text>
                <Text type="secondary">
                  <CalendarOutlined style={{ marginRight: 4 }} />
                  {article.publishDate}
                </Text>
                <Text type="secondary">
                  <EyeOutlined style={{ marginRight: 4 }} />
                  {article.viewCount} 次阅读
                </Text>
              </Space>

              {/* 标签 */}
              <Space wrap style={{ marginBottom: 24 }}>
                {article.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </Space>

              <Divider />

              {/* 文章正文 */}
              <div className="article-content" style={{ whiteSpace: 'pre-line' }}>
                <Paragraph
                  style={{
                    fontSize: 15,
                    lineHeight: 1.8,
                    color: '#333',
                  }}
                >
                  {article.content}
                </Paragraph>

                {/* 正文占位提示 — 替换为真实内容后删除 */}
                <div
                  style={{
                    background: '#fffbe6',
                    border: '1px solid #ffe58f',
                    borderRadius: 8,
                    padding: '16px 20px',
                    margin: '24px 0',
                  }}
                >
                  <Text style={{ color: '#ad8b00', fontSize: 13 }}>
                    提示：本文为模板内容，请将文章正文替换为你的真实内容。
                    支持 Markdown 格式，也可以在 Paragraph 中直接编写 HTML。
                  </Text>
                </div>
              </div>

              {/* 文章底部广告 */}
              <AdBanner size="728x90" position="article-detail-bottom" />

              {/* 上一篇 / 下一篇 */}
              <Divider />
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16 }}>
                <div style={{ flex: 1 }}>
                  {prevArticle && (
                    <Link href={`/articles/${prevArticle.id}`}>
                      <Button type="link" style={{ padding: 0, textAlign: 'left', height: 'auto' }}>
                        <div>
                          <Text style={{ fontSize: 12, color: '#999' }}>上一篇</Text>
                          <br />
                          <Text style={{ maxWidth: 250, fontSize: 13 }}>{prevArticle.title}</Text>
                        </div>
                      </Button>
                    </Link>
                  )}
                </div>
                <div style={{ flex: 1, textAlign: 'right' }}>
                  {nextArticle && (
                    <Link href={`/articles/${nextArticle.id}`}>
                      <Button type="link" style={{ padding: 0, textAlign: 'right', height: 'auto' }}>
                        <div>
                          <Text style={{ fontSize: 12, color: '#999' }}>下一篇</Text>
                          <br />
                          <Text style={{ maxWidth: 250, fontSize: 13 }}>{nextArticle.title}</Text>
                        </div>
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
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
