import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Ethan's Portfolio</title>
      </Head>

      <Header />

      {/* Hero */}

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}

      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      {/* Skills */}

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      {/* Contact */}

      <section id="contact" className="snap-start">
        <Contact />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex item-center justify-center ">
            <img
              className="h-10 w-10 rounded-full  filter grayscale hover:grayscale-0 cursor-pointer "
              src="https://i.ibb.co/YDjccFp/trey.png"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
