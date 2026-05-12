'use client';

import React from 'react';
import { Row, Col, Typography, Tag, Space, Button, Tooltip } from 'antd';
import {
  MailOutlined,
  GithubOutlined,
  WechatOutlined,
  EnvironmentOutlined,
  CodeOutlined,
} from '@ant-design/icons';
import { profile } from '@/data/mock';

const { Title, Text, Paragraph } = Typography;

/**
 * 「关于我」板块
 * 头像 + 个人简介 + 技能标签 + 联系方式
 */
export default function AboutSection() {
  return (
    <section id="about" className="section section-light">
      <div className="page-container">
        {/* 板块标题 */}
        <Title level={2} className="section-title">关于我</Title>
        <Text className="section-subtitle">About Me</Text>

        <Row gutter={[48, 32]} align="middle" style={{ marginTop: 16 }}>
          {/* 左侧：头像 + 信息卡片 */}
          <Col xs={24} md={8}>
            <div style={{ textAlign: 'center' }}>
              {/* 头像 */}
              <div
                style={{
                  width: 180,
                  height: 180,
                  borderRadius: '50%',
                  margin: '0 auto 20px',
                  background: 'linear-gradient(135deg, #e6f4ff, #bae0ff)',
                  border: '4px solid #fff',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 72,
                  color: '#1677ff',
                  overflow: 'hidden',
                }}
              >
                <CodeOutlined />
              </div>

              {/* 姓名 */}
              <Title level={3} style={{ margin: 0 }}>{profile.name}</Title>
              <Text type="secondary" style={{ display: 'block', marginTop: 4 }}>{profile.title}</Text>

              {/* 联系方式 */}
              <div style={{ marginTop: 20 }}>
                <Space size="middle" wrap>
                  <Tooltip title={profile.email}>
                    <Button
                      type="primary"
                      shape="circle"
                      icon={<MailOutlined />}
                      href={`mailto:${profile.email}`}
                    />
                  </Tooltip>
                  <Tooltip title="GitHub">
                    <Button
                      shape="circle"
                      icon={<GithubOutlined />}
                      href={profile.social.github}
                      target="_blank"
                    />
                  </Tooltip>
                  <Tooltip title={profile.wechat}>
                    <Button
                      shape="circle"
                      icon={<WechatOutlined />}
                    />
                  </Tooltip>
                </Space>
              </div>
            </div>
          </Col>

          {/* 右侧：个人简介 + 技能 */}
          <Col xs={24} md={16}>
            {/* 个人简介 */}
            <div
              style={{
                background: '#fff',
                padding: 24,
                borderRadius: 12,
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              }}
            >
              <Title level={4} style={{ marginTop: 0 }}>
                <EnvironmentOutlined style={{ marginRight: 8 }} />
                个人简介 / Bio
              </Title>
              <Paragraph
                style={{ fontSize: 15, lineHeight: 1.8, color: '#333', whiteSpace: 'pre-line' }}
              >
                {profile.bio}
              </Paragraph>
            </div>

            {/* 技能标签 */}
            <div style={{ marginTop: 20 }}>
              <Title level={4} style={{ marginTop: 0 }}>
                <CodeOutlined style={{ marginRight: 8 }} />
                技能专长 / Skills
              </Title>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {profile.skills.map((skill) => (
                  <Tag
                    key={skill.name}
                    color={
                      skill.level === 'expert'
                        ? 'blue'
                        : skill.level === 'proficient'
                        ? 'geekblue'
                        : 'default'
                    }
                    style={{
                      padding: '4px 16px',
                      fontSize: 13,
                      borderRadius: 16,
                      margin: 0,
                    }}
                  >
                    {skill.name}
                  </Tag>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
