import React from 'react';
import type { Metadata } from 'next';
import MiniProgramSection from '@/components/MiniProgramSection';
import BreadcrumbNav from '@/components/BreadcrumbNav';

export const metadata: Metadata = {
  title: '小程序 - 刘志敏',
};

export default function MiniProgramPage() {
  return (
    <>
      <BreadcrumbNav items={[{ label: '小程序' }]} />
      <MiniProgramSection />
    </>
  );
}
