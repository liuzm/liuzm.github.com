'use client';

import React from 'react';
import { Row, Col, Typography, Card, List } from 'antd';
import {
  WechatOutlined,
  RightOutlined,
  FileTextOutlined,
} from '@ant-design/icons';
import { officialAccount } from '@/data/mock';

const { Title, Text, Paragraph } = Typography;

/**
 * 「公众号推广」板块
 * 稳重、可信的设计风格，符合中老年群体审美
 */
export default function OfficialAccountSection() {
  return (
    <section id="official-account" className="section section-white">
      <div className="page-container">
        {/* 板块标题 */}
        <Title level={2} className="section-title">公众号推广</Title>
        <Text className="section-subtitle">
          <WechatOutlined style={{ marginRight: 8 }} />
          关注「{officialAccount.name}」，获取技术干货
        </Text>

        <Row gutter={[48, 32]} align="middle">
          {/* 左侧：二维码 + 公众号信息 */}
          <Col xs={24} md={10}>
            <div style={{ textAlign: 'center' }}>
              {/* 二维码卡片 */}
              <Card
                style={{
                  borderRadius: 16,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  display: 'inline-block',
                  padding: '16px',
                }}
                styles={{ body: { padding: 16 } }}
              >
                <img
                  src={officialAccount.qrCodeImage}
                  alt={`${officialAccount.name} 二维码`}
                  style={{
                    width: 200,
                    height: 200,
                    objectFit: 'contain',
                    display: 'block',
                    margin: '0 auto',
                    borderRadius: 8,
                  }}
                />
                <Text style={{ display: 'block', marginTop: 12, fontSize: 14, color: '#666' }}>
                  微信扫码关注
                </Text>
              </Card>

              {/* 公众号名称 */}
              <Title level={4} style={{ marginTop: 20, marginBottom: 8 }}>
                {officialAccount.name}
              </Title>
              <Paragraph
                style={{
                  color: '#666',
                  fontSize: 14,
                  lineHeight: 1.8,
                  maxWidth: 320,
                  margin: '0 auto',
                  textAlign: 'left',
                }}
              >
                {officialAccount.description}
              </Paragraph>
            </div>
          </Col>

          {/* 右侧：近期文章列表 */}
          <Col xs={24} md={14}>
            <Card
              title={
                <span>
                  <FileTextOutlined style={{ marginRight: 8 }} />
                  近期精选文章
                </span>
              }
              style={{
                borderRadius: 12,
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              }}
            >
              <List
                dataSource={officialAccount.recentArticles}
                renderItem={(item, index) => (
                  <List.Item
                    style={{
                      padding: '12px 0',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                    }}
                    className="hover-bg"
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, width: '100%' }}>
                      <span
                        style={{
                          minWidth: 24,
                          height: 24,
                          borderRadius: 12,
                          background: index < 2 ? '#1677ff' : '#f0f0f0',
                          color: index < 2 ? '#fff' : '#666',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: 12,
                          fontWeight: 600,
                          marginTop: 2,
                        }}
                      >
                        {index + 1}
                      </span>
                      <Text style={{ flex: 1, fontSize: 14 }}>{item}</Text>
                      <RightOutlined style={{ color: '#ccc', marginTop: 4 }} />
                    </div>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
      </div>

      <style jsx>{`
        .hover-bg:hover {
          background: #fafafa;
          border-radius: 8px;
        }
      `}</style>
    </section>
  );
}
