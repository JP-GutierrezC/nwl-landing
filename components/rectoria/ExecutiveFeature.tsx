'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import Eyebrow from '@/components/ui/Eyebrow';
import Tag from '@/components/ui/Tag';
import Portrait from './Portrait';
import { localized, type RectoriaPerson } from '@/lib/rectoria-data';

interface ExecutiveFeatureProps {
  executive: RectoriaPerson;
  assistant?: RectoriaPerson;
}

/**
 * The executive tier. Mirrors the campus DirectorMessage grid (portrait 2/5,
 * copy 3/5). The assistant sits inside this block, under a hairline — that
 * placement, not a line or a box, is what signals the reporting relationship.
 */
export default function ExecutiveFeature({ executive, assistant }: ExecutiveFeatureProps) {
  const { locale, t } = useLanguage();
  const alt = (p: RectoriaPerson) => `${p.name} — ${localized(p.title, locale)}, NWL Australian School`;

  return (
    <section className="section-padding bg-paper">
      <div className="container-custom">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Portrait
              name={executive.name}
              image={executive.image}
              alt={alt(executive)}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="rounded-2xl shadow-navy-lg max-w-md mx-auto lg:max-w-none"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <Eyebrow className="mb-5">{t.rectoria.execEyebrow}</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy leading-tight">{executive.name}</h2>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.22em] text-gold">
              {localized(executive.title, locale)}
            </p>

            <p className="mt-6 text-navy/80 leading-relaxed text-base md:text-lg">{localized(executive.bio, locale)}</p>

            {executive.facts && executive.facts.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {executive.facts.map((f) => (
                  <Tag key={f.en} tone="gold">
                    {localized(f, locale)}
                  </Tag>
                ))}
              </div>
            )}

            {assistant && (
              <div className="mt-10 pt-8 border-t border-n-200">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-n-500 mb-4">
                  {t.rectoria.execAsideLabel}
                </p>
                <div className="flex gap-4 items-start">
                  <Portrait
                    name={assistant.name}
                    image={assistant.image}
                    alt={alt(assistant)}
                    shape="round"
                    sizes="64px"
                    className="w-16 h-16"
                  />
                  <div>
                    <p className="font-bold text-navy">{assistant.name}</p>
                    <p className="text-xs text-gold font-medium mt-0.5">{localized(assistant.title, locale)}</p>
                    <p className="mt-2 text-sm text-navy/70 leading-relaxed">{localized(assistant.bio, locale)}</p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
