'use client';

import RectoriaHero from '@/components/rectoria/RectoriaHero';
import ExecutiveFeature from '@/components/rectoria/ExecutiveFeature';
import AreaGroups from '@/components/rectoria/AreaGroups';
import CampusDirectorsRow from '@/components/rectoria/CampusDirectorsRow';
import RectoriaCTA from '@/components/rectoria/RectoriaCTA';
import Footer from '@/components/Footer';
import { executive, executiveAssistant, visibleAreas, campusDirectors } from '@/lib/rectoria-data';

export default function RectoriaPage() {
  const areas = visibleAreas();
  const directors = campusDirectors();

  return (
    <>
      <main>
        <RectoriaHero />
        <ExecutiveFeature
          executive={executive}
          assistant={executiveAssistant.hidden ? undefined : executiveAssistant}
        />
        <AreaGroups areas={areas} />
        {directors.length > 0 && <CampusDirectorsRow directors={directors} />}
        <RectoriaCTA />
      </main>
      <Footer />
    </>
  );
}
