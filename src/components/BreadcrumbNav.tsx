'use client';

import React from 'react';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import Link from 'next/link';

interface BreadcrumbNavProps {
  items: { label: string }[];
}

/**
 * 子页面顶部面包屑导航
 */
export default function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  return (
    <div style={{ background: '#f5f7fa', padding: '16px 0 0' }}>
      <div className="page-container">
        <Breadcrumb
          items={[
            { title: <Link href="/"><HomeOutlined /> 首页</Link> },
            ...items.map((item) => ({ title: item.label })),
          ]}
        />
      </div>
    </div>
  );
}
