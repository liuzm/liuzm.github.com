import React from 'react';
import type { Metadata } from 'next';
import AboutSection from '@/components/AboutSection';
import BreadcrumbNav from '@/components/BreadcrumbNav';

export const metadata: Metadata = {
  title: '关于我 - 刘志敏',
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbNav items={[{ label: '关于我' }]} />
      <AboutSection />
    </>
  );
}
