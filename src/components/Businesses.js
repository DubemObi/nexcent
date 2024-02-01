import { motion } from "framer-motion";
import Icon1 from "../img/Icon (1).png";
import Icon2 from "../img/Icon (2).png";
import Icon3 from "../img/Icon (3).png";
import Icon4 from "../img/Icon (4).png";

function Businesses() {
  return (
    <div className=" px-10 md:px-24 lg:px-36 bg-silver flex flex-col md:flex-row lg:flex-row justify-between py-12 lg:py-14">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1, y: [50, 0] }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="lg:w-1/2 md:w-1/2 mb-12 lg:mb-0 md:mb-0 text-center md:text-left lg:text-left"
      >
        <h2 className="text-4xl font-semibold lg:w-[63%] mb-2">
          Helping a local{" "}
          <span className="text-green">business reinvent itself</span>{" "}
        </h2>
        <p className="text-base">
          We reached here with our hard work and dedication
        </p>
      </motion.div>
      <motion.div
        whileInView={{ x: [80, 0] }}
        transition={{ ease: "easeIn", duration: 1 }}
        className="flex flex-col items-center lg:items-start md:w-1/2 lg:w-1/2 gap-7"
      >
        <div className="flex items-center gap-7 ">
          <div className="flex gap-4 ">
            <img src={Icon1} alt="" className=" w-8 h-8 lg:w-12 lg:h-12" />
            <div className="w-36">
              <h2 className="text-2xl lg:text-[1.75rem] font-bold lg:leading-8">
                2,245,341
              </h2>
              <p className="text-sm lg:text-base">Members</p>
            </div>
          </div>
          <div className="flex gap-3">
            <img src={Icon2} alt="" className=" w-8 h-8 lg:w-12 lg:h-12" />
            <div className="w-36">
              <h2 className="text-2xl lg:text-[1.75rem] font-bold lg:leading-8">
                46,328
              </h2>
              <p className="text-sm lg:text-base">Clubs</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-7">
          <div className=" flex gap-4">
            <img src={Icon4} alt="" className=" w-8 h-8 lg:w-12 lg:h-12" />
            <div className="w-36">
              <h2 className="text-2xl lg:text-[1.75rem] font-bold lg:leading-8">
                828,867
              </h2>
              <p className="text-sm lg:text-base">Event Bookings</p>
            </div>
          </div>
          <div className="flex gap-4">
            <img src={Icon3} alt="" className=" w-8 h-8 lg:w-12 lg:h-12" />
            <div className="w-36">
              <h2 className="text-2xl lg:text-[1.75rem] font-bold lg:leading-8">
                1,926,436
              </h2>
              <p className="text-sm lg:text-base">Payments</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Businesses;
