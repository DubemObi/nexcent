import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Demo() {
  return (
    <div className="px-10 md:px-24 lg:px-36 py-8 bg-silver ">
      <div className="flex flex-col items-center md:w-[40rem] lg:w-[50rem] mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="text-4xl lg:text-[4rem] md:text-5xl leading-none font-semibold mb-8 text-black"
        >
          Pellentesque suscipit fringilla libero eu.
        </motion.h1>
        <button className="h-10 w-36 lg:h-14 lg:w-44 md:h-12 bg-green rounded-md text-md hover:bg-green/70 text-white">
          Get a Demo <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </button>
      </div>
    </div>
  );
}

export default Demo;
