import illustration from "../img/Illustration.png";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="flex flex-col mt-[84px] items-center px-10 py-10 lg:px-36 md:px-24 md:pt-24  lg:pt-24 pb-8 bg-silver text-dark-grey">
      <div className="flex flex-col-reverse items-center mb-16 lg:flex-row lg:flex lg:justify-between lg:items-center lg:space-x-24 lg:mb-16 md:flex-row md:flex md:justify-between md:items-center md:space-x-24 md:mb-16">
        <motion.div
          whileInView={{ x: [-100, 0] }}
          viewport={{ once: true }}
          transition={{ type: "spring", ease: "easeIn", duration: 3 }}
          className="text-center lg:text-left md:text-left space-y-6 "
        >
          <h1 className="text-5xl lg:text-[4rem] md:text-6xl font-semibold lg:leading-[4rem]">
            Lessons and insights{" "}
            <span className="text-green">from 8 years</span>
          </h1>
          <p className="text-grey">
            Where to grow your business as a photographer: site or social media?
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="h-10 w-28 lg:w-36 bg-green hover:bg-green/70 rounded-md text-white"
          >
            Register
          </motion.button>
        </motion.div>

        <motion.img
          src={illustration}
          alt=""
          className="mb-12 lg:mb-0 w-52 lg:w-[24.4rem] "
          whileInView={{ y: [150, 0] }}
          viewport={{ once: true }}
          transition={{ type: "spring", ease: "easeIn", duration: 3 }}
        />
      </div>
      <div className="flex space-x-2 ">
        <div className="w-2 h-2 rounded-full bg-green"></div>
        <div className="w-2 h-2 rounded-full bg-green/30"></div>
        <div className="w-2 h-2 rounded-full bg-green/30"></div>
      </div>
    </div>
  );
}

export default Hero;
