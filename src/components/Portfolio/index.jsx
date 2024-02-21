import React from 'react';
import Section from '../shared/Section';
import Badge from '../shared/Badge';
import zoom from '../../assets/zoom.webp';
import Projects from './components/Projects';

import { LIST_2020, LIST_2024 } from './constants';

const Portfolio = () => (
  <Section
    title="Things to see"
    sectionName="portfolio"
    imgSrc={zoom}
    imgClassName="rotate-[-10deg] right-auto -left-20"
  >
    <div className="flex flex-col gap-8">
      <div>
        <Badge>2024</Badge>
        <p className="mt-2 mb-6">
          My recent works are coming very soon! <br /> I wish there were more of them, but I dedicated my all time to
          commercial projects with NDA while maintaining a work-life balance. Thank you for understanding! 😊
        </p>

        <Projects list={LIST_2024} />
      </div>

      <div>
        <Badge>2020</Badge>
        <p className="mt-2 mb-6">
          My best early works, when I was just starting out. Though they are simple, they are special to me.
        </p>

        <Projects list={LIST_2020} />
      </div>
    </div>
  </Section>
);

export default Portfolio;
