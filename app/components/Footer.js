import Link from 'next/link'; // Correct usage in Next.js
import Image from 'next/image';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className="container bg-blackMamba-500 max-w-screen-xl mx-auto px-6 py-12 flex flex-col justify-between items-center">
        <hr className="w-full h-px mx-auto my-4 bg-gray-400 border-0 rounded md:my-10"></hr>
        <div className="flex flex-wrap space-y-6 mt-4 items-center justify-between w-full">
          <Link href="/">
            <Image alt="logo" src="/H (5).png" width={80} height={50} />
          </Link>
          <p className="text-gray-400">© 2024 Yahya™. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="https://www.linkedin.com/in/yahya-hussein-63214a241/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-3xl text-gray-300 hover:text-brown-500 transition duration-300" />
            </Link>
            <Link href="https://github.com/Yhworld" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-3xl text-gray-300 hover:text-brown-500 transition duration-300" />
            </Link>
            <Link href="mailto:Yahyahussein670@gmail.com" target="_blank" rel="noopener noreferrer">
              <IoMailOutline className="text-3xl text-gray-300 hover:text-brown-500 transition duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
