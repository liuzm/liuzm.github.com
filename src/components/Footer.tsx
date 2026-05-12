'use client';

import React from 'react';
import { Layout, Space, Typography, Divider } from 'antd';
import {
  GithubOutlined,
  MailOutlined,
  WechatOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { profile } from '@/data/mock';

const { Footer: AntFooter } = Layout;
const { Text } = Typography;

/**
 * 页面底部 — 包含版权信息和社交链接
 */
export default function Footer() {
  const router = useRouter();
  return (
    <AntFooter
      style={{
        background: '#1a1a2e',
        padding: '40px 24px 20px',
        color: '#ccc',
      }}
    >
      <div className="page-container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: 32,
            marginBottom: 24,
          }}
        >
          {/* 左侧：个人信息 */}
          <div style={{ minWidth: 200, flex: 1 }}>
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: 700, display: 'block', marginBottom: 12 }}>
              {profile.name}
            </Text>
            <Text style={{ color: '#999', display: 'block', marginBottom: 8 }}>
              {profile.title}
            </Text>
            <Space size="middle" style={{ marginTop: 8 }}>
              <Link href={profile.social.github} target="_blank" style={{ color: '#999', fontSize: 20 }}>
                <GithubOutlined />
              </Link>
              <Link href={`mailto:${profile.email}`} style={{ color: '#999', fontSize: 20 }}>
                <MailOutlined />
              </Link>
              <TooltipWechat />
            </Space>
          </div>

          {/* 中间：快速链接 */}
          <div style={{ minWidth: 120 }}>
            <Text style={{ color: '#fff', fontWeight: 600, display: 'block', marginBottom: 12 }}>
              快速链接
            </Text>
            <Space direction="vertical" size={4}>
              <Link href="/" style={{ color: '#999' }}>首页</Link>
              <Link href="/articles" style={{ color: '#999' }}>头条专栏</Link>
              <Link href={profile.social.github} target="_blank" style={{ color: '#999' }}>GitHub</Link>
            </Space>
          </div>

          {/* 右侧：栏目导航 */}
          <div style={{ minWidth: 120 }}>
            <Text style={{ color: '#fff', fontWeight: 600, display: 'block', marginBottom: 12 }}>
              栏目
            </Text>
            <Space direction="vertical" size={4}>
              <Text style={{ color: '#999', cursor: 'pointer' }} onClick={() => router.push('/about')}>
                关于我
              </Text>
              <Text style={{ color: '#999', cursor: 'pointer' }} onClick={() => router.push('/official-account')}>
                公众号
              </Text>
              <Text style={{ color: '#999', cursor: 'pointer' }} onClick={() => router.push('/mini-program')}>
                小程序
              </Text>
            </Space>
          </div>
        </div>

        <Divider style={{ borderColor: '#333', margin: '16px 0' }} />

        <div style={{ textAlign: 'center' }}>
          <Text style={{ color: '#666', fontSize: 13 }}>
            © {new Date().getFullYear()} {profile.name}. All Rights Reserved. |{' '}
            <Link href="https://beian.miit.gov.cn/" target="_blank" style={{ color: '#666' }}>
              京ICP备XXXXXXXX号-1
            </Link>
          </Text>
        </div>
      </div>
    </AntFooter>
  );
}

/**
 * 微信 Tooltip 组件 — 鼠标悬停显示微信号
 */
function TooltipWechat() {
  const [showTip, setShowTip] = React.useState(false);
  return (
    <span
      style={{ position: 'relative', cursor: 'pointer', color: '#999', fontSize: 20 }}
      onMouseEnter={() => setShowTip(true)}
      onMouseLeave={() => setShowTip(false)}
    >
      <WechatOutlined />
      {showTip && (
        <span
          style={{
            position: 'absolute',
            bottom: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#333',
            color: '#fff',
            padding: '4px 8px',
            borderRadius: 4,
            fontSize: 12,
            whiteSpace: 'nowrap',
            marginBottom: 4,
          }}
        >
          {profile.wechat}
        </span>
      )}
    </span>
  );
}
