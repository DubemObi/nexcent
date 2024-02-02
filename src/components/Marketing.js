import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import image1 from "../img/image 18.png";
import image2 from "../img/image 19.png";
import image3 from "../img/image 20.png";

function Marketing() {
  return (
    <div id="marketing" className="px-10 md:px-24 lg:px-36 py-12 text-center">
      <motion.div
        whileInView={{ x: [-70, 0] }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="lg:w-1/2 md:w-2/3 lg:m-auto md:m-auto space-y-2 pb-8 md:pb-4 lg:pb-4"
      >
        <h2 className="text-4xl font-semibold ">Caring is the new marketing</h2>
        <p className="text-base ">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </p>
      </motion.div>
      <div className=" lg:flex md:flex md:space-y-0 md:space-x-6 space-y-8 lg:space-y-0 lg:space-x-6 lg:justify-center md:justify-center mx-auto lg:pb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1, y: [50, 0] }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="lg:relative md:relative flex flex-col items-center"
        >
          <img
            src={image1}
            alt=""
            className="w-[18rem] lg:w-[23rem] lg:rounded-md"
          />
          <div className="w-[18rem] h-36 lg:w-[85%] lg:h-[11rem] bg-silver lg:absolute lg:top-48 flex items-center flex-col p-4 rounded-t-none rounded-b-md lg:rounded-md shadow-md shadow-grey/30 ">
            <p className="text-xl mb-6 h-[60%]">
              Creating Streamlined Safeguarding Processes with OneRen
            </p>
            <div className="flex gap-4 items-center text-green text-xl ">
              <p className="text-base font-semibold">Readmore </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1, y: [50, 0] }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="lg:relative flex flex-col items-center"
        >
          <img
            src={image2}
            alt=""
            className="w-[18rem] lg:w-[23rem] rounded-md"
          />
          <div className="w-[18rem] h-36 lg:w-[85%] lg:h-[11rem] bg-silver lg:absolute lg:top-48 flex items-center flex-col p-4 rounded-t-none rounded-b-md lg:rounded-md shadow-md shadow-grey/30 ">
            <p className="text-xl mb-6 h-[60%]">
              What are your safeguarding responsibilities and how can you manage
              them?
            </p>
            <div className="flex gap-4 items-center text-green text-xl ">
              <p className="text-base font-semibold">Readmore </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1, y: [50, 0] }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="lg:relative flex flex-col items-center"
        >
          <img
            src={image3}
            alt=""
            className="w-[18rem] lg:w-[23rem] rounded-md"
          />
          <div className="w-[18rem] h-36 lg:w-[85%] lg:h-[11rem] bg-silver lg:absolute lg:top-48 flex items-center flex-col py-4 px-7 rounded-t-none rounded-b-md lg:rounded-md shadow-md shadow-grey/30 ">
            <p className="text-xl mb-6 h-[60%]">
              Revamping the Membership Model with Triathlon Australia
            </p>
            <div className="flex gap-4 items-center text-green text-xl ">
              <p className="text-base font-semibold">Readmore </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Marketing;
