'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import Eyebrow from '@/components/ui/Eyebrow';
import SouthernCross from '@/components/ui/SouthernCross';
import { localized, type CampusDirectorRef } from '@/lib/rectoria-data';

/**
 * Compact by design: each director already has a full "Message from Our
 * Director" block on their campus page. This row reuses those portraits and
 * points there rather than repeating the message.
 */
export default function CampusDirectorsRow({ directors }: { directors: CampusDirectorRef[] }) {
  const { locale, t } = useLanguage();

  return (
    <section className="py-16 md:py-20 nwl-bg-dawn-deep text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-80 h-80 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gold-400 rounded-full blur-3xl" />
      </div>
      <div className="hidden md:block absolute bottom-8 left-10 pointer-events-none">
        <SouthernCross height={110} opacity={0.3} />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <Eyebrow className="justify-center mb-4">{t.rectoria.directorsEyebrow}</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            {t.rectoria.directorsTitle} <span className="italic text-gold-400">{t.rectoria.directorsTitleAccent}</span>
          </h2>
          <p className="mt-3 text-paper/70 max-w-xl mx-auto">{t.rectoria.directorsSubtitle}</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-10">
          {directors.map(({ slug, campusName, director }, i) => (
            <motion.div
              key={slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="w-[calc(50%-0.75rem)] sm:w-44 text-center"
            >
              <Link href={`/campus/${slug}`} className="group inline-block">
                <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden ring-2 ring-gold/40 group-hover:ring-gold transition-all">
                  <Image
                    src={director.image}
                    alt={`${director.name} — ${localized(director.title, locale)}, NWL Australian School Campus ${campusName}`}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 font-semibold text-paper text-sm leading-snug">{director.name}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-gold-400">
                  Campus {campusName}
                </p>
                <p className="mt-2 text-xs text-paper/60 group-hover:text-paper transition-colors">
                  {t.rectoria.directorsLink} →
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
