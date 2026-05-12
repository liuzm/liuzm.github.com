import React from 'react';
import type { Metadata } from 'next';
import OfficialAccountSection from '@/components/OfficialAccountSection';
import BreadcrumbNav from '@/components/BreadcrumbNav';

export const metadata: Metadata = {
  title: '公众号 - 刘志敏',
};

export default function OfficialAccountPage() {
  return (
    <>
      <BreadcrumbNav items={[{ label: '公众号' }]} />
      <OfficialAccountSection />
    </>
  );
}
