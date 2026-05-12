'use client';

import React from 'react';
import { Typography, List, Tag, Space, Empty } from 'antd';
import {
  NotificationOutlined,
  RightOutlined,
  CalendarOutlined,
  FireOutlined,
} from '@ant-design/icons';
import { mockNews } from '@/data/mock';

const { Title, Text } = Typography;

/**
 * 「新闻动态」板块 — 展示最新行业动态与公告
 */
export default function NewsFeedSection() {
  const typeColors: Record<string, string> = {
    industry: 'blue',
    announcement: 'orange',
    update: 'green',
  };

  const typeNames: Record<string, string> = {
    industry: '行业动态',
    announcement: '公告',
    update: '更新',
  };

  return (
    <section id="news-feed" className="section section-light">
      <div className="page-container">
        {/* 板块标题 */}
        <Title level={2} className="section-title">新闻动态</Title>
        <Text className="section-subtitle">
          <NotificationOutlined style={{ marginRight: 8 }} />
          了解最新行业动态与公告信息
        </Text>

        {mockNews.length > 0 ? (
          <div
            style={{
              background: '#fff',
              borderRadius: 12,
              padding: '8px 24px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              maxWidth: 800,
              margin: '0 auto',
            }}
          >
            <List
              dataSource={mockNews}
              renderItem={(item, index) => (
                <List.Item
                  style={{
                    padding: '16px 0',
                    borderBottom: index < mockNews.length - 1 ? '1px solid #f0f0f0' : 'none',
                  }}
                >
                  <div style={{ display: 'flex', gap: 16, width: '100%', alignItems: 'flex-start' }}>
                    {/* 类型标签 */}
                    <Tag color={typeColors[item.type]} style={{ marginTop: 2, flexShrink: 0 }}>
                      {typeNames[item.type]}
                    </Tag>

                    {/* 内容 */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <Text
                        strong
                        style={{
                          fontSize: 14,
                          display: 'block',
                          marginBottom: 4,
                          cursor: 'pointer',
                        }}
                        className="news-title"
                      >
                        {item.title}
                      </Text>
                      <Text
                        style={{
                          fontSize: 13,
                          color: '#666',
                          display: 'block',
                          lineHeight: 1.6,
                        }}
                      >
                        {item.summary}
                      </Text>
                    </div>

                    {/* 日期 */}
                    <Text
                      style={{
                        fontSize: 12,
                        color: '#bbb',
                        flexShrink: 0,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <CalendarOutlined style={{ marginRight: 4 }} />
                      {item.publishDate}
                    </Text>
                  </div>
                </List.Item>
              )}
            />
          </div>
        ) : (
          <Empty description="暂无新闻动态" style={{ margin: '40px 0' }} />
        )}

        <style jsx>{`
          .news-title:hover {
            color: var(--primary-color);
          }
        `}</style>
      </div>
    </section>
  );
}
