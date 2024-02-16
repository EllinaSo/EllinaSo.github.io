import React from 'react';
import Section from '../shared/Section';
import puzzle from '../../assets/puzzle.webp';
import List from './components/List';

const SKILLS = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'Effector',
  'SCSS / SASS',
  'Tailwind CSS',
  'Material UI',
  'styled-components',
  'Webpack',
  'Rollup',
  'GitLab',
  'GitHub',
  'Storybook',
  'Jest',
  'React Testing Library',
  'Git',
  'Postman',
  'Jira',
];

const ACTIONS = [
  'Solve problems with attention to details',
  'Prioritize tasks and manage time efficiently',
  'Stay calm and positive',
];

const TEAMWORK = ['Collaborate with team members', 'Support and encourage my colleagues', 'Contribute creative ideas'];

const About = () => (
  <Section title="Who am I?" sectionName="about" imgSrc={puzzle} imgClassName="rotate-[110deg]">
    <p className="mb-2">Hey there!</p>
    <p className="mb-2">
      I started from scratch, learning front-end development on my own, and now, after four years of working on various
      projects, I feel ready for new challenges. Working on projects I'm proud of has given me a lot of experience, but
      now I'm eager to expand my horizons and dive into new technologies.
    </p>

    <p className="mb-10">
      Currently, I'm actively studying back-end to become a{' '}
      <span className="font-bold">Full-stack developer and seeking opportunities in the field</span>.
    </p>

    <List label="To build reliable applications I use:" items={SKILLS} className="mb-10" badges />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <List label="To get my work done successfully I do:" items={ACTIONS} />
      <List label="To be valuable part of the team I:" items={TEAMWORK} />
    </div>
  </Section>
);

export default About;
