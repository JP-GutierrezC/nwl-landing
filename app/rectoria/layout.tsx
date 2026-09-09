import type { Metadata } from 'next';
import SmoothScroll from '@/components/SmoothScroll';
import Navigation from '@/components/Navigation';
import FixedCTAButton from '@/components/FixedCTAButton';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import { BrochureProvider } from '@/lib/BrochureContext';
import MetadataUpdater from '@/components/MetadataUpdater';
import BrochureModal from '@/components/BrochureModal';
import { BreadcrumbJsonLd, RectoriaJsonLd } from '@/components/JsonLd';
import { SITE_URL, SITE_NAME, PAGE_SEO } from '@/lib/seo';
import { RECTORIA_PUBLIC } from '@/lib/rectoria-preview';

const seo = PAGE_SEO.rectoria;
const url = `${SITE_URL}/rectoria`;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  openGraph: {
    title: `${seo.title} | ${SITE_NAME}`,
    description: seo.description,
    url,
    images: [{ url: seo.ogImage, width: 1200, height: 630, alt: `Rectoría — ${SITE_NAME}` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${seo.title} | ${SITE_NAME}`,
    description: seo.description,
    images: [seo.ogImage],
  },
  alternates: {
    canonical: url,
  },
  // Private preview until launch — see lib/rectoria-preview.ts
  ...(RECTORIA_PUBLIC ? {} : { robots: { index: false, follow: false } }),
};

export default function RectoriaLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <BrochureProvider>
        <BreadcrumbJsonLd
          items={[
            { name: 'NWL Australian School', url: SITE_URL },
            { name: 'Rectoría', url },
          ]}
        />
        <RectoriaJsonLd />
        <MetadataUpdater />
        <Navigation />
        <FixedCTAButton />
        <BrochureModal />
        <SmoothScroll>{children}</SmoothScroll>
      </BrochureProvider>
    </LanguageProvider>
  );
}
