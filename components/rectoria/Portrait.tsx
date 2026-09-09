'use client';

import Image from 'next/image';
import { initials } from '@/lib/rectoria-data';

interface PortraitProps {
  name: string;
  image?: string;
  alt: string;
  /**
   * `portrait`: 3:4 framed figure. `round`: avatar sized by `className`.
   * `fill`: stretches to its grid cell (use inside a two-column card; give it a
   * min-height in `className` so short copy doesn't crush the face).
   */
  shape?: 'portrait' | 'round' | 'fill';
  sizes: string;
  className?: string;
}

/**
 * Rectoría portrait. Photos sit inside a framed figure with the golden-hour
 * grade (`.nwl-grade`), never behind text. With no photo, a navy monogram
 * keeps the layout intact so a person can be added before their picture.
 */
export default function Portrait({ name, image, alt, shape = 'portrait', sizes, className = '' }: PortraitProps) {
  const frame =
    shape === 'round'
      ? `relative rounded-full overflow-hidden flex-shrink-0 ${className}`
      : shape === 'fill'
        ? `relative h-full w-full overflow-hidden ${className}`
        : `relative aspect-[3/4] overflow-hidden ${className}`;

  if (!image) {
    return (
      <div
        className={`${frame} bg-navy text-paper flex items-center justify-center font-display font-bold ${
          shape === 'round' ? 'text-lg' : 'text-5xl'
        }`}
        role="img"
        aria-label={alt}
      >
        {initials(name)}
      </div>
    );
  }

  return (
    <div className={`${frame} bg-paper nwl-grade`}>
      <Image src={image} alt={alt} fill sizes={sizes} className="object-cover" />
    </div>
  );
}
