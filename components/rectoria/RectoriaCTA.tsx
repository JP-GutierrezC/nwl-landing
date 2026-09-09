'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function RectoriaCTA() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="wine-divider mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">
            {t.rectoria.ctaTitle} <span className="italic text-gold">{t.rectoria.ctaTitleAccent}</span>
          </h2>
          <p className="mt-4 text-navy/70 text-lg">{t.rectoria.ctaSubtitle}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/trabaja-con-nosotros" className="btn-primary">
              {t.rectoria.ctaPrimary}
            </Link>
            <Link href="/#campus" className="btn-secondary">
              {t.rectoria.ctaSecondary}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
