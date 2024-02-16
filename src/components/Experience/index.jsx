import React from 'react';
import Job from './components/Job';
import Section from '../shared/Section';
import time from '../../assets/time.webp';

const JOBS = [
  {
    period: 'Aug 2020 - Nov 2023',
    jobTitle: 'Front-end Developer',
    companyName: 'SimbirSoft, Russia',
    companyDescription:
      'The company develops custom IT software solutions for companies in Russia, the USA, and Europe.',
    jobDescription: (
      <>
        I participated in various projects for clients in medium and large businesses in industries such as banking,
        service, enterprise and others. I took on roles as:
        <p className="mt-2">
          ⌨️ <span className="underline">Developer</span>. I've participated in over 10 projects with diverse stages of
          development and technology stacks. This taught me to complete my tasks even in a fast-paced environment and
          boosted my problem-solving skills!
        </p>
        <p className="mt-2">
          💡 <span className="underline">Mentor</span>. I enjoyed mentoring three potential hires, two of whom were
          successfully onboarded and hired by the company. I also facilitated onboarding for new developers joining
          projects.
        </p>
        <p className="mt-2">
          ⏳ <span className="underline">Project evaluation expert</span>. Participated in 15+ project assessments,
          offering insights on time and resource requirements for implementation to potential and current clients.
        </p>
      </>
    ),
  },
  {
    period: 'Oct 2019 - Feb 2020',
    jobTitle: 'Front-end Developer',
    companyName: 'Imperium Web, Russia',
    companyDescription:
      'The company specializes in business solutions in the fields of design, web development, and digital marketing.',
    jobDescription: (
      <>
        Starting as an intern while juggling both work and university, I quickly learned to manage my time effectively
        and take full responsibility for my tasks. Completing the internship successfully, I took on an urgent project —
        a website for a residential complex developer. Despite the tight deadline, I delivered a dynamic webpage,
        earning a regular client. <br />
        This experience fueled my passion for design and web development, driving me to exceed expectations in every
        project.
      </>
    ),
  },
  {
    period: '2020',
    jobTitle: 'Bachelor’s Degree in Information Security',
    companyName: 'Kazan State University, Russia',
  },
];
const Experience = () => (
  <Section title="My path" sectionName="experience" imgSrc={time} imgClassName="rotate-[-20deg] right-20 max-w-xs">
    <div className="flex flex-col gap-8">
      {JOBS.map((job) => (
        <Job key={job.companyName} {...job} />
      ))}
    </div>
  </Section>
);

export default Experience;
