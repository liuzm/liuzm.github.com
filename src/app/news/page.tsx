import React from 'react';
import type { Metadata } from 'next';
import NewsFeedSection from '@/components/NewsFeedSection';
import BreadcrumbNav from '@/components/BreadcrumbNav';

export const metadata: Metadata = {
  title: '新闻动态 - 刘志敏',
};

export default function NewsPage() {
  return (
    <>
      <BreadcrumbNav items={[{ label: '新闻动态' }]} />
      <NewsFeedSection />
    </>
  );
}
