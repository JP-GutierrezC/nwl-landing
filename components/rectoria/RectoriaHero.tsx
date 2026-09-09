'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import Eyebrow from '@/components/ui/Eyebrow';
import SouthernCross from '@/components/ui/SouthernCross';

// Same five-campus collage as the parents portal hero — one strip per campus.
const heroImages = [
  { src: '/images/campus/juriquilla/juriquilla-building.jpg', alt: 'Campus Juriquilla' },
  { src: '/images/campus/milenio/milenio-soccer-field-hero.jpg', alt: 'Campus Milenio' },
  { src: '/images/campus/san-miguel/san-miguel-hero.jpg', alt: 'Campus San Miguel' },
  { src: '/images/campus/corregidora/corregidora-campus-wide.jpg', alt: 'Campus Corregidora' },
  { src: '/images/campus/zibata/zibata-hero.jpg', alt: 'Campus Zibatá' },
];

export default function RectoriaHero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden nwl-bg-dawn-deep">
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid grid-cols-5 h-full">
          {heroImages.map((img, i) => (
            <div key={img.src} className="relative h-full overflow-hidden">
              <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="20vw" priority={i < 3} />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-navy/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-transparent to-navy/70" />
      </div>

      <div className="hidden md:block absolute top-24 right-12 z-10 pointer-events-none">
        <SouthernCross height={150} opacity={0.35} />
      </div>

      <div className="container-custom relative z-10 text-center py-32 md:py-40">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <a
            href="/"
            className="inline-flex items-center text-sm text-paper/70 hover:text-paper transition-colors mb-8"
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t.rectoria.backHome}
          </a>

          <div className="mb-5">
            <Eyebrow className="justify-center">{t.rectoria.heroEyebrow}</Eyebrow>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-paper max-w-4xl mx-auto leading-tight">
            {t.rectoria.heroTitle} <span className="italic text-gold">{t.rectoria.heroTitleAccent}</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-paper/70 max-w-2xl mx-auto leading-relaxed">
            {t.rectoria.heroSubtitle}
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-hidden="true">
          <path d="M0 60L1440 60L1440 0C1440 0 1080 40 720 40C360 40 0 0 0 0L0 60Z" fill="#F4EEE2" />
        </svg>
      </div>
    </section>
  );
}
