import { motion } from "framer-motion";
import Client1 from "../img/Logo (1).png";
import Client2 from "../img/Logo (1).svg";
import Client3 from "../img/Logo (2).png";
import Client4 from "../img/Logo (2).svg";
import Client5 from "../img/Logo (3).svg";
import Client6 from "../img/Logo.svg";

function Clients() {
  return (
    <div className=" px-10 py-8 lg:py-10 lg:px-36 text-center">
      <motion.h2
        whileInView={{ x: [-80, 0] }}
        transition={{ ease: "easeIn", duration: 1 }}
        className="text-[2.25rem] font-semibold"
      >
        Our Clients
      </motion.h2>
      <p className="text-grey">
        We have been working with some Fortune 500+ clients
      </p>
      <motion.div
        whileInView={{ x: [80, 0] }}
        transition={{ ease: "easeIn", duration: 1 }}
        className="flex space-x-6 lg:space-x-36 md:space-x-28 pt-10 justify-center "
      >
        <img src={Client1} alt="" className="w-7 h-7 lg:w-10  md:w-8 md:h-8 " />
        <img src={Client2} alt="" className="w-7 h-7 lg:w-10  md:w-8 md:h-8 " />
        <img src={Client3} alt="" className="w-7 h-7 lg:w-10  md:w-8 md:h-8 " />
        <img src={Client4} alt="" className="w-7 h-7 lg:w-10  md:w-8 md:h-8 " />
        <img src={Client5} alt="" className="w-7 h-7 lg:w-10  md:w-8 md:h-8 " />
        <img src={Client6} alt="" className="w-7 h-7 lg:w-10  md:w-8 md:h-8 " />
        <img src={Client1} alt="" className="w-7 h-7 lg:w-10  md:w-8 md:h-8 " />
      </motion.div>
    </div>
  );
}

export default Clients;
