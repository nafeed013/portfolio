"use client";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";
import Navbar from "@/components/Navbar";
import { useRef } from "react";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  const sectionRefs = {
    hero: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    resume: useRef(null),
    contact: useRef(null),
  };

  const handleClick = (sectionKey) => {
    sectionRefs[sectionKey].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar handleClick={handleClick} />
      <Hero ref={sectionRefs.hero} text="HERO" handleClick={handleClick} />
      <Projects ref={sectionRefs.projects} text="PROJECTS" />
      <Skills ref={sectionRefs.skills} text="SKILLS" />
      <Resume ref={sectionRefs.resume} text="RESUME" />
      <Contact ref={sectionRefs.contact} text="CONTACT" />
      <Footer />
    </>
  );
}
