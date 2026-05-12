'use client';

import React, { useState, useEffect } from 'react';
import { Layout, Menu, Button, Drawer } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  WechatOutlined,
  AppstoreOutlined,
  FileTextOutlined,
  NotificationOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import { useRouter, usePathname } from 'next/navigation';

const { Header: AntHeader } = Layout;

/**
 * 主导航菜单项配置
 * key 对应页面路由路径
 */
const navItems = [
  { key: '/', label: '首页', icon: <HomeOutlined />, route: '/' },
  { key: 'about', label: '关于我', icon: <UserOutlined />, route: '/about' },
  { key: 'official', label: '公众号', icon: <WechatOutlined />, route: '/official-account' },
  { key: 'miniprogram', label: '小程序', icon: <AppstoreOutlined />, route: '/mini-program' },
  { key: 'articles', label: '头条专栏', icon: <FileTextOutlined />, route: '/articles' },
  { key: 'news', label: '新闻动态', icon: <NotificationOutlined />, route: '/news' },
];

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 监听滚动，改变 Header 样式
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 判断当前路由是否匹配导航项
  const isActive = (route: string) => {
    if (route === '/') return pathname === '/';
    return pathname.startsWith(route);
  };

  const handleNavClick = (item: (typeof navItems)[number]) => {
    setDrawerOpen(false);
    router.push(item.route);
  };

  return (
    <AntHeader
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        height: 64,
        display: 'flex',
        alignItems: 'center',
        background: scrolled ? 'rgba(255,255,255,0.95)' : '#fff',
        boxShadow: scrolled ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        transition: 'all 0.3s',
        padding: '0 24px',
        borderBottom: '1px solid var(--border-color)',
      }}
    >
      <div className="page-container" style={{ display: 'flex', alignItems: 'center', width: '100%', padding: 0 }}>
        {/* 桌面端导航 */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <div
            className="desktop-nav"
            style={{ display: 'flex', gap: 4 }}
          >
            {navItems.map((item) => (
              <Button
                key={item.key}
                type="text"
                icon={item.icon}
                onClick={() => handleNavClick(item)}
                style={{
                  fontSize: 14,
                  color: isActive(item.route) ? 'var(--primary-color)' : 'var(--text-color)',
                  fontWeight: isActive(item.route) ? 600 : 400,
                }}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>

        {/* 移动端菜单按钮 */}
        <Button
          className="mobile-menu-btn"
          type="text"
          icon={<MenuOutlined />}
          onClick={() => setDrawerOpen(true)}
          style={{ fontSize: 20, marginLeft: 'auto' }}
        />

        {/* 移动端抽屉导航 */}
        <Drawer
          title="导航菜单"
          placement="right"
          onClose={() => setDrawerOpen(false)}
          open={drawerOpen}
          width={280}
        >
          <Menu
            mode="vertical"
            selectedKeys={[isActive('/') ? '/' : pathname.slice(1) || '/']}
            items={navItems.map((item) => ({
              key: item.key,
              icon: item.icon,
              label: item.label,
            }))}
            onClick={({ key }) => {
              const item = navItems.find((n) => n.key === key);
              if (item) handleNavClick(item);
            }}
            style={{ border: 'none' }}
          />
        </Drawer>
      </div>

      {/* 移动端响应式样式 */}
      <style jsx>{`
        .mobile-menu-btn {
          display: none;
        }
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: inline-flex;
          }
        }
      `}</style>
    </AntHeader>
  );
}
