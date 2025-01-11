import Image from "next/image";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, FaPython } from "react-icons/fa";
import { DiRuby } from "react-icons/di";

const About = () => {
  return (
    <div className="text-white p-4 mb-24">
    <div className="container max-w-screen-xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between ">
        <div className="flex flex-row md:flex-col items-center">
        <hr className="w-4 border-2 md:border-4 md:w-2 font-bold md:pt-36" />
        <div id="about" className="md:rotate-180 tracking-wide text-gray-200 sm:text-5xl text-3xl font-bold "
>
  ABOUT ME
</div>
<hr className="w-4 border-2 md:border-4 md:w-2 font-bold md:pt-36" /></div>
<div className="flex flex-col items-center space-y-6">
<p className="text-lg md:w-1/2 sm:text-2xl mt-6 text-slate-200 leading-relaxed">
As a final-year undergraduate pursuing a Bachelors degree in Information Technology, I`m currently interning while also on the lookout for full-time gigs and freelance projects.
When I`m not working, you`ll catch me watching anime, reading random stuff, or messing with some fun side projects.
</p>
<br/>
<p className="flex space-x-4">
<FaHtml5 className="text-3xl" />
<FaCss3Alt className="text-3xl" />
<FaJs className="text-3xl" />
<FaReact className="text-3xl" />
<FaAngular className="text-3xl" />
<DiRuby className="text-3xl" />
<FaPython className="text-3xl" />

</p>
</div>

<div className="mt-24 md:mt-0">
  <h1 className="pb-8 font-bold text-gray-100">Work Experience</h1>
<ol className="relative border-s border-gray-400">                  
    <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-brown-500"></div>
        <time className="mb-1 text-sm font-normal leading-none text-orange-600"> 2022</time>
        <h3 className="text-lg font-semibold text-white">Freelancing</h3>
        <p className="mb-4 text-base font-normal text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
    </li>
    <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-brown-500"></div>
        <time className="mb-1 text-sm font-normal leading-none text-orange-600">2024</time>
        <h3 className="text-lg font-semibold text-white">Open source project contributions</h3>
        <p className="text-base font-normal text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
    </li>
    <li className="ms-4">
        <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-brown-500"></div>
        <time className="mb-1 text-sm font-normal leading-none text-orange-600">April 2022</time>
        <h3 className="text-lg font-semibold text-white">Frontend Developer at Zecado Fragrance LLC</h3>
        <p className="text-base font-normal text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
    </li>
</ol>

    </div>
    </div>
    </div>
  );
};

export default About;
