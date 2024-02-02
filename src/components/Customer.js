import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Client1 from "../img/Logo (1).png";
import Client2 from "../img/Logo (1).svg";
import Client3 from "../img/Logo (2).png";
import Client4 from "../img/Logo (2).svg";
import Client5 from "../img/Logo (3).svg";
import Client6 from "../img/Logo.svg";
import image from "../img/image 9.png";

function Customer() {
  return (
    <div
      id="customer"
      className="px-10 md:px-24 lg:px-36 py-8 flex flex-col md:flex-row lg:flex-row items-center md:items-start lg:gap-16 md:gap-12 bg-silver"
    >
      <motion.img
        whileInView={{ x: [-50, 0] }}
        viewport={{ once: true }}
        transition={{ ease: "easeIn", duration: 0.8 }}
        src={image}
        alt=""
        className="w-[16rem] md:w-[17rem] lg:w-[20.3rem] "
      />
      <motion.div
        whileInView={{ x: [80, 0] }}
        viewport={{ once: true }}
        transition={{ ease: "easeIn", duration: 0.8 }}
        className="lg:w-[50%]   text-center md:text-left lg:text-left"
      >
        <p className="text-sm text-grey mb-4 pt-2">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>
        <p className="text-green text-xl font-semibold">Tim Smith</p>
        <p className="text-base">British Dragon Boat Racing Association</p>
        <div className="flex flex-col md:flex-row lg:flex-row items-center pt-8 gap-8 md:gap-16 lg:gap-16">
          <div className="flex space-x-6 ">
            <img src={Client1} alt="" className="w-8 h-8 lg:w-10 lg:h-10" />
            <img src={Client2} alt="" className="w-8 h-8 lg:w-10 lg:h-10" />
            <img src={Client3} alt="" className="w-8 h-8 lg:w-10 lg:h-10" />
            <img src={Client4} alt="" className="w-8 h-8 lg:w-10 lg:h-10" />
            <img src={Client5} alt="" className="w-8 h-8 lg:w-10 lg:h-10" />
            <img src={Client6} alt="" className="w-8 h-8 lg:w-10 lg:h-10" />
          </div>
          <div className="flex min-w-16 gap-4 items-center text-green text-xl ">
            <p className="text-sm font-semibold">Meet all customers </p>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Customer;
