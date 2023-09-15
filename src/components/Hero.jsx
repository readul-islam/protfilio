import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Readul from "../assets/readul.png";
import fb from "../assets/facebook.png";
import git from "../assets/github.png";
import linkdin from "../assets/linkedin.png";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className="relative top-[80px] md:flex justify-between items-center ">
        <div
          className={` inset-0   max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF]">Readul</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I'm problem solver &&  <br className="sm:block hidden" />
              develop interfaces and web applications
            </p>
            <div className="flex pt-2 md:pt-10 gap-2 md:gap-4">
              <img className="cursor-pointer" width={30} src={linkdin}/>
              <img className="cursor-pointer" width={30} src={git}/>
              <img className="cursor-pointer" width={30} src={fb}/>
            </div>
          </div>
          
        </div>
        <img className="z-50" width={600} src={Readul} />
      {/* <div className="absolute  top-[400px] !right-0 md:top-56 w-full h-48 md:h-[500px]">
        <ComputersCanvas />
      </div> */}
      </div>
    
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
