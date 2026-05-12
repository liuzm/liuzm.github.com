'use client';

import React from 'react';
import { Card, Typography, Divider, Empty } from 'antd';
import Link from 'next/link';

const { Text, Title } = Typography;

/**
 * 广告位组件
 * @param size 广告尺寸：'728x90'（横幅）| '300x250'（矩形）
 * @param position 位置标识，方便 Google AdSense 区分
 *
 * 使用说明：
 * 1. 将 data-ad-client 替换为你的 Google AdSense 发布商 ID
 * 2. 将 data-ad-slot 替换为对应的广告位 ID
 * 3. 开发阶段显示占位符，生产环境会自动渲染广告
 */
interface AdBannerProps {
  size?: '728x90' | '300x250';
  position?: string;
}

export default function AdBanner({ size = '728x90', position = 'default' }: AdBannerProps) {
  const isProduction = process.env.NODE_ENV === 'production';
  const isSquare = size === '300x250';
  const width = isSquare ? 300 : 728;
  const height = isSquare ? 250 : 90;

  return (
    <div
      style={{
        width: '100%',
        maxWidth: width,
        minHeight: height,
        margin: '16px auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {isProduction ? (
        /* Google AdSense 广告单元 — 生产环境启用 */
        <ins
          className="adsbygoogle"
          style={{ display: 'block', width, height }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // TODO: 替换为你的 AdSense ID
          data-ad-slot={position}
          data-ad-format={isSquare ? 'rectangle' : 'horizontal'}
        />
      ) : (
        /* 开发环境占位符 */
        <div
          style={{
            width,
            height,
            background: 'linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)',
            border: '2px dashed #ccc',
            borderRadius: 8,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#999',
            fontSize: 13,
          }}
        >
          <Text type="secondary" style={{ fontSize: 11 }}>
            Google AdSense
          </Text>
          <Text type="secondary" style={{ fontSize: 11 }}>
            广告位 ({size})
          </Text>
        </div>
      )}
    </div>
  );
}
