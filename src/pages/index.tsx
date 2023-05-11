import { Experience, PageInfo, Project, Skill, Social } from '../../typings';
import type { GetStaticProps, NextPage } from 'next';

import About from '../components/About';
import Contact from '../components/Contact';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Link from 'next/link';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import WorkExperience from '../components/WorkExperience';
import { fetchExperiences } from '../../utils/fetchExperiences';
import { fetchPageInfo } from '../../utils/fetchPageInfo';
import { fetchProjects } from '../../utils/fetchProjects';
import { fetchSkills } from '../../utils/fetchSkills';
import { fetchSocials } from '../../utils/fetchSocials';

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  projects: Project[];
  skills: Skill[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#36454F]/80'>
      <Head>
        <title>Ethan's Portfolio</title>
        <meta
          name='description'
          content='A Full-Stack Portfolio'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link
          rel='icon'
          href='/me.ico'
        />
      </Head>

      <Header socials={socials} />

      {/* Hero */}

      <section
        id='hero'
        className='snap-start'
      >
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About */}

      <section
        id='about'
        className='snap-center'
      >
        <About pageInfo={pageInfo} />
      </section>

      {/* Experience */}

      <section
        id='experience'
        className='snap-center'
      >
        <WorkExperience experiences={experiences} />
      </section>

      {/* Skills */}

      <section
        id='skills'
        className='snap-start'
      >
        <Skills skills={skills} />
      </section>

      {/* Projects */}
      <section
        id='projects'
        className='snap-start'
      >
        <Projects projects={projects} />
      </section>
      {/* Contact */}

      <section
        id='contact'
        className='snap-start'
      >
        <Contact pageInfo={pageInfo} />
      </section>
      <Link href='#hero'>
        <footer className='sticky w-full cursor-pointer bottom-5'>
          <div className='flex justify-center item-center '>
            <img
              className='w-10 h-10 rounded-full cursor-pointer filter grayscale hover:grayscale-0 '
              src='https://i.ibb.co/YDjccFp/trey.png'
              alt=''
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const projects: Project[] = await fetchProjects();
  const skills: Skill[] = await fetchSkills();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      projects,
      skills,
      socials,
    },
    revalidate: 100,
  };
};
