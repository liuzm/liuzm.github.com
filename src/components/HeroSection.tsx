'use client';

import React from 'react';
import { Button, Typography, Space } from 'antd';
import {
  DownOutlined,
  GithubOutlined,
  AntDesignOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { profile } from '@/data/mock';

const { Title, Text } = Typography;

/**
 * 首页顶部 Hero 区 — 紧凑版，无滚动条
 */
export default function HeroSection() {
  const router = useRouter();

  return (
    <section
      id="hero"
      style={{
        height: 'calc(100vh - 64px)', // 减去顶部导航栏高度，刚好填满视口
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: 'linear-gradient(135deg, #0c1a3a 0%, #1a3a6b 50%, #2980b9 100%)',
        overflow: 'hidden',
      }}
    >
      {/* 装饰性背景粒子 */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: 200 + i * 80,
              height: 200 + i * 80,
              borderRadius: '50%',
              background: `radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)`,
              top: `${20 + i * 10}%`,
              left: `${10 + i * 15}%`,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>

      {/* 主内容 */}
      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1, maxWidth: 720 }}>
        {/* 头像 */}
        <div
          style={{
            width: 88,
            height: 88,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)',
            border: '3px solid rgba(255,255,255,0.3)',
            margin: '0 auto 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            overflow: 'hidden',
          }}
        >
          <AntDesignOutlined style={{ fontSize: 40, opacity: 0.8 }} />
        </div>

        {/* 名称 */}
        <Title
          style={{
            color: '#fff',
            fontSize: 36,
            margin: 0,
            fontWeight: 700,
            letterSpacing: 2,
          }}
        >
          {profile.name}
        </Title>

        {/* 标语 */}
        <Text
          style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: 16,
            display: 'block',
            marginTop: 8,
          }}
        >
          {profile.title}
        </Text>

        {/* 简短描述 */}
        <Text
          style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: 14,
            display: 'block',
            marginTop: 6,
            lineHeight: 1.6,
          }}
        >
          Java / TypeScript 开发者 · 高并发系统设计 · 技术分享
        </Text>

        {/* CTA 按钮 */}
        <div style={{ marginTop: 28 }}>
          <Space size="middle" wrap>
            <Button
              type="primary"
              size="middle"
              icon={<DownOutlined />}
              onClick={() => router.push('/about')}
              style={{
                height: 40,
                padding: '0 28px',
                fontSize: 14,
                borderRadius: 20,
                background: '#1677ff',
                border: 'none',
              }}
            >
              了解更多
            </Button>
            <Button
              size="middle"
              icon={<GithubOutlined />}
              href={profile.social.github}
              target="_blank"
              style={{
                height: 40,
                padding: '0 28px',
                fontSize: 14,
                borderRadius: 20,
                borderColor: 'rgba(255,255,255,0.3)',
                color: '#fff',
                background: 'rgba(255,255,255,0.1)',
              }}
            >
              GitHub
            </Button>
          </Space>
        </div>
      </div>
    </section>
  );
}
