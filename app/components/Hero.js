import Image from "next/image";

const Hero = () => {
  return (
    <>
    <div className="text-white p-4 bg-gradient-to-b from-black via-black to-gray-800 h-5/6">
      <div className="container max-w-screen-xl mx-auto px-6 py-6 flex flex-col-reverse md:flex-row justify-between items-center">
        <div id="hero" className="text-center md:text-left max-w-lg">
          <h1 className="tracking-wide text-6xl sm:text-6xl font-bold">
            Hello, I’m <span className="text-brown-500">Yahya</span>
          </h1>
          <p className="tracking-wider text-lg sm:text-xl mt-6 text-slate-200 leading-relaxed">
            A passionate web developer creating modern, user-friendly, and 
            performant digital experiences that leave a lasting impression.
          </p>
        </div>

        <div id="hero" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 mb-6 md:mb-0">
          <Image 
            alt="Portfolio Logo" 
            src="/yahya.png" 
            width={350} 
            height={250} 
            className="w-full h-auto rounded-lg shadow-lg"
            priority 
          />
        </div>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
  <path fill="#1f2937" fillOpacity="1" d="M0,0L48,5.3C96,11,192,21,288,32C384,43,480,53,576,53.3C672,53,768,43,864,48C960,53,1056,75,1152,90.7C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
</svg>
    </>
  );
};

export default Hero;
