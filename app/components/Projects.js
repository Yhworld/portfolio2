import Image from "next/image";
import { FaGithub, FaLink } from "react-icons/fa";
import Link from 'next/link';

function Projects() {
  return (
    <>
    <div className="text-white p-4 bg-gradient-to-b from-blackMamba-500 via-black to-gray-800">
    <h1 className='hidden md:block text-center font-semibold tracking-wider text-2xl'>Some of the projects that I’ve worked on</h1>
    <div className="container max-w-screen-xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between ">
        <div className="flex flex-row md:flex-col items-center">
        <hr className="w-4 border-2 md:border-4 md:w-2 font-bold md:pt-36" />
        <div id="about" className="md:rotate-180 tracking-wide text-gray-200 sm:text-5xl text-3xl font-bold "
>
  PORTFOLIO
</div>
<hr className="w-4 border-2 md:border-4 md:w-2 font-bold md:pt-36" />
</div>
<div>
  <div className="flex flex-col md:flex-row items-center md:justify-around">
  <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 mb-6 md:mb-0">
          <Image 
            alt="Portfolio Logo" 
            src="/makeit.png" 
            width={850} 
            height={750} 
            className="w-full h-auto rounded-lg shadow-lg"
            priority 
          />
        </div>
        <div className="md:w-1/2">
        <p className="tracking-wider text-lg sm:text-xl mt-6 text-slate-200 leading-relaxed">
        Developed a professional website for Make It Driving, a Manchester-based driving school. The platform includes features like pricing tables, course details for beginner, manual, and automatic lessons, and an intuitive layout to enhance user experience. Focused on accessibility, modern design, and smooth navigation for potential learners.
          </p>
          <div className="mt-8 flex gap-4 space-x-6">
          <span className="text-xs font-medium me-2 px-2.5 py-0.5 rounded bg-brown-700 text-white">React</span>
          <Link href="https://github.com/Yhworld/Makeitdriving" target="_blank" rel="noopener noreferrer">
          <FaGithub />
          </Link>
          <Link href="https://www.makeitdrivingschool.co.uk/" target="_blank" rel="noopener noreferrer">
          <FaLink />
          </Link>
          </div></div>
  </div>
  <div className="flex flex-col md:flex-row items-center md:justify-around">
  <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 mb-6 md:mb-0">
          <Image 
            alt="Portfolio Logo" 
            src="/zecado.png" 
            width={850} 
            height={750} 
            className="w-full h-auto rounded-lg shadow-lg"
            priority 
          />
        </div>
        <div className="md:w-1/2">
        <p className="tracking-wider text-lg sm:text-xl mt-6 text-slate-200 leading-relaxed">
        Designed and developed an e-commerce platform for Zecado Fragrance, offering a seamless shopping experience for fragrance enthusiasts. The system includes inventory management, a sales overview feature, and a user-friendly interface to simplify product browsing and purchasing. Focused on scalability and efficient backend operations for optimal performance.
          </p>
          <div className="mt-8 flex gap-4 space-x-6">
          <span className="text-xs font-medium me-2 px-2.5 py-0.5 rounded bg-brown-700 text-white">React</span>
          <Link href="https://github.com/Yhworld/Zecacdo-ecom" target="_blank" rel="noopener noreferrer">
          <FaGithub />
          </Link>
          <Link href="https://zecadofragrance.com/" target="_blank" rel="noopener noreferrer">
          <FaLink />
          </Link>
          </div></div>
  </div>
</div>
    </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150"><path fill="#1f2937" fillOpacity="1" d="M0,128L480,128L960,32L1440,160L1440,0L960,0L480,0L0,0Z"></path></svg>
    </>
  )
}

export default Projects