import React from 'react';
import Section from '../shared/Section';
import puzzle from '../../assets/puzzle.webp';
import List from './components/List';
import { SKILLS, ACTIONS, TEAMWORK } from './constants';

const About = () => (
  <Section title="Who am I?" sectionName="about" imgSrc={puzzle} imgClassName="right-auto -left-36">
    <p className="mb-2">
      Hey there! I'm Ellina, Front-end Developer with 4 years' experience. Currently, I'm actively studying back-end to
      become a <span className="font-bold">Full-stack developer and seeking opportunities in the field</span>.
    </p>
    <p className="mb-4 md:mb-8">
      I started from scratch, learning front-end development on my own, and now, after four years of working on various
      projects, I feel ready for new challenges. Working on projects I'm proud of has given me a lot of experience, but
      now I'm eager to expand my horizons and dive into new technologies.
    </p>

    <List label="To build reliable applications I use:" items={SKILLS} className="mb-6 md:mb-10" badges />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
      <List label="To get my work done successfully I do:" items={ACTIONS} />
      <List label="To be valuable part of the team I:" items={TEAMWORK} />
    </div>
  </Section>
);

export default About;
