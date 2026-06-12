'use client';

import React, { useEffect, useRef } from 'react';
import { Typography } from 'antd';

const { Text } = Typography;

const PUBLISHER_ID = 'ca-pub-4952653426015138';

/**
 * 广告位组件
 * @param slot AdSense 广告位 ID（在 AdSense 后台创建广告单元后获取的数字 ID）
 * @param responsive 是否使用响应式自动尺寸（默认 true，匹配 AdSense 的 auto + full-width-responsive）
 *
 * 使用说明：
 * 1. 在 Google AdSense 后台创建广告单元，拿到 slot ID
 * 2. 调用此组件时传入 slot 参数
 * 3. 广告仅在 production 构建下渲染（npm run build && npm start）
 */
interface AdBannerProps {
  slot: string;
  responsive?: boolean;
}

export default function AdBanner({ slot, responsive = true }: AdBannerProps) {
  const insRef = useRef<HTMLInsElement>(null);
  const isProduction = process.env.NODE_ENV === 'production';

  useEffect(() => {
    if (isProduction && insRef.current) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch {
        // AdSense 初始化失败时静默处理
      }
    }
  }, [isProduction, slot]);

  if (!slot) {
    return (
      <div
        style={{
          width: '100%',
          minHeight: 90,
          margin: '16px auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#fffbe6',
          border: '1px solid #ffe58f',
          borderRadius: 8,
          color: '#ad8b00',
          fontSize: 12,
          padding: 8,
          textAlign: 'center',
        }}
      >
        请在 AdBanner 组件传入 slot 参数（AdSense 广告位 ID）
      </div>
    );
  }

  return (
    <div
      style={{
        width: '100%',
        minHeight: responsive ? undefined : 90,
        margin: '16px auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {isProduction ? (
        <ins
          ref={insRef}
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={PUBLISHER_ID}
          data-ad-slot={slot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      ) : (
        <div
          style={{
            width: '100%',
            maxWidth: 728,
            height: 90,
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
            广告位 (slot: {slot})
          </Text>
        </div>
      )}
    </div>
  );
}
