import React from 'react';
import type { Metadata } from 'next';
// Ant Design 的客户端注册 — 确保样式正确加载
// 注意：需要安装 @ant-design/nextjs-registry
import { AntdRegistry } from '@ant-design/nextjs-registry';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * 站点 Meta 信息 — 请替换为你自己的
 */
export const metadata: Metadata = {
  title: '刘志敏 | 个人官方网站',
  description:
    '刘志敏的个人官方网站 — Java / TypeScript 全栈开发者，专注高并发系统设计与银发经济研究。提供足球分析、AI 科技资讯等内容。',
  keywords: [
    '刘志敏', 'Java', 'TypeScript', '高并发', 'NIO',
    '银发经济', '足球分析', 'AI科技', '个人网站',
  ],
  authors: [{ name: '刘志敏', url: 'https://github.com/liuzm' }],
  openGraph: {
    title: '刘志敏 | 个人官方网站',
    description:
      'Java / TypeScript 全栈开发者 · 高并发系统设计 · 银发经济探索者',
    type: 'website',
    locale: 'zh_CN',
  },
};

/**
 * 根布局
 * 包含全局 Header 和 Footer
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4952653426015138"
          crossOrigin="anonymous"
        />

        {/* 百度统计 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var _hmt = _hmt || [];
              (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?768b034699e94798b58cb6ec8a8f3e40";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
              })();
            `,
          }}
        />
      </head>
      <body>
        <AntdRegistry>
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <main style={{ flex: 1, paddingTop: 64 }}>{children}</main>
            <Footer />
          </div>
        </AntdRegistry>
      </body>
    </html>
  );
}
