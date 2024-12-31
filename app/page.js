"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollToTopButton from "./components/Scroll";



export default function Home() {
    useEffect(() => {
      AOS.init({
        duration: 800,
        // once: true,
        offset: 200,
      });
  
      window.addEventListener("load", () => AOS.refreshHard());
  
      return () => {
        AOS.refresh();
      };
    }, []);

  return (
    <>
      <Navbar />
      <ScrollToTopButton />
      <Hero id="hero" />
      <div id="aboutt" data-aos="fade-down"><About /></div>
      <div id="projects" data-aos="fade-right"><Projects /></div>
      <div id="contact" data-aos="fade-down"><Contact /></div>
      <div data-aos="fade-down"><Footer /></div>
    </>
  );
}
