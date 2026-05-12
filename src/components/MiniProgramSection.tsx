'use client';

import React from 'react';
import { Row, Col, Typography, Card, Tag, Space } from 'antd';
import {
  AppstoreOutlined,
  CheckCircleOutlined,
  ScanOutlined,
} from '@ant-design/icons';
import { miniProgram } from '@/data/mock';

const { Title, Text } = Typography;

/**
 * 「我的小程序」板块
 * 展示小程序截图、功能介绍和扫码入口
 */
export default function MiniProgramSection() {
  return (
    <section id="mini-program" className="section section-light">
      <div className="page-container">
        {/* 板块标题 */}
        <Title level={2} className="section-title">我的小程序</Title>
        <Text className="section-subtitle">
          <AppstoreOutlined style={{ marginRight: 8 }} />
          「{miniProgram.name}」— 用心服务老年群体
        </Text>

        <Row gutter={[48, 32]} align="middle">
          {/* 左侧：小程序截图 */}
          <Col xs={24} md={10}>
            <div style={{ textAlign: 'center' }}>
              {/* 手机模拟框 */}
              <div
                style={{
                  display: 'inline-block',
                  background: '#fff',
                  borderRadius: 24,
                  padding: 12,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                  border: '2px solid #e8e8e8',
                }}
              >
                <div
                  style={{
                    width: 240,
                    height: 480,
                    background: 'linear-gradient(180deg, #1677ff 0%, #69b1ff 100%)',
                    borderRadius: 16,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    padding: 24,
                  }}
                >
                  {/* TODO: 替换为真实的小程序截图 */}
                  <AppstoreOutlined style={{ fontSize: 64, marginBottom: 16 }} />
                  <Text style={{ color: '#fff', fontSize: 18, fontWeight: 600 }}>
                    {miniProgram.name}
                  </Text>
                  <Text style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12, marginTop: 8, textAlign: 'center' }}>
                    微信小程序
                  </Text>
                </div>
              </div>
            </div>
          </Col>

          {/* 右侧：功能介绍 + 二维码 */}
          <Col xs={24} md={14}>
            {/* 小程序名称 */}
            <Title level={3} style={{ marginTop: 0 }}>{miniProgram.name}</Title>
            <Text style={{ fontSize: 15, color: '#666', display: 'block', marginBottom: 24, lineHeight: 1.8 }}>
              {miniProgram.description}
            </Text>

            {/* 功能列表 */}
            <Row gutter={[16, 16]}>
              {miniProgram.features.map((feature, index) => (
                <Col xs={24} sm={12} key={index}>
                  <Card
                    size="small"
                    style={{
                      borderRadius: 8,
                      border: '1px solid #e8e8e8',
                      height: '100%',
                    }}
                    styles={{ body: { padding: '12px 16px' } }}
                  >
                    <Space>
                      <CheckCircleOutlined style={{ color: '#52c41a', fontSize: 16 }} />
                      <Text style={{ fontSize: 13 }}>{feature}</Text>
                    </Space>
                  </Card>
                </Col>
              ))}
            </Row>

            {/* 小程序码 */}
            <div
              style={{
                marginTop: 28,
                padding: 20,
                background: '#fff',
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                gap: 20,
                border: '1px solid #e8e8e8',
              }}
            >
              <div
                style={{
                  width: 100,
                  height: 100,
                  background: '#f5f5f5',
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {/* TODO: 替换为真实的小程序码 */}
                <ScanOutlined style={{ fontSize: 36, color: '#999' }} />
              </div>
              <div>
                <Text style={{ fontSize: 14, fontWeight: 600, display: 'block', marginBottom: 4 }}>
                  微信扫码体验
                </Text>
                <Text style={{ fontSize: 12, color: '#999' }}>
                  使用微信扫一扫，即可打开小程序
                </Text>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
