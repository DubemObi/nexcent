import { motion } from "framer-motion";
import icon1 from "../img/Icon (1).svg";
import icon2 from "../img/Icon.png";
import icon3 from "../img/Icon.svg";

function Community() {
  return (
    <>
      <motion.div
        whileInView={{ x: [-80, 0] }}
              transition={{ ease: "easeIn", duration: 0.8 }}
              id="community"
        className=" mx-auto w-[80%] lg:w-[35%] md:w-[50%] leading-10 pt-4"
      >
        <h2 className="text-[2.25rem] font-semibold text-center">
          Manage your entire community in a single system
        </h2>
        <p className="text-center text-grey">Who is Nexcent suitable for?</p>
      </motion.div>
      <div className="px-10 lg:px-36 md:px-24 pt-6 pb-8 flex flex-col space-y-4 md:space-y-0 lg:space-y-0 md:space-x-3 items-center lg:flex-row lg:flex lg:justify-between md:flex-row md:flex md:justify-between">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="flex justify-center flex-col w-[18.68rem]  h-[16.25rem]  relative text-center py-6 rounded-lg shadow-md shadow-grey/30 px-8"
        >
          <img
            src={icon2}
            alt=""
            className="absolute left-28 top-8 w-12 h-12"
          />
          <div className="w-[3.125rem] h-[3.06rem] mx-auto bg-green/15 rounded-tl-2xl rounded-br-2xl mb-2  "></div>
          <h2 className="text-[1.75rem] text-dark-grey font-semibold leading-8 mb-3">
            Membership Organisations
          </h2>
          <p className="text-grey text-sm">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="flex justify-center flex-col w-[18.68rem] h-[16.25rem]  relative text-center py-6 rounded-lg shadow-md shadow-grey/30 px-8"
        >
          <img
            src={icon3}
            alt=""
            className="absolute top-8 left-28 w-12 h-12"
          />
          <div className="w-[3.125rem] h-[3.06rem] mx-auto bg-green/15 rounded-tl-2xl rounded-br-2xl mb-2  "></div>
          <h2 className="text-[1.75rem] text-dark-grey font-semibold leading-8 mb-3">
            National Assoiciations
          </h2>
          <p className="text-grey text-sm">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="flex justify-center flex-col w-[18.68rem] h-[16.25rem]  relative text-center py-6 rounded-lg shadow-md shadow-grey/30 px-8"
        >
          <img
            src={icon1}
            alt=""
            className="absolute left-28 top-10 w-12 h-12"
          />
          <div className="w-[3.125rem] h-[3.06rem] mx-auto bg-green/15 rounded-tl-2xl rounded-br-2xl mb-2  "></div>
          <h2 className="text-[1.75rem] text-dark-grey font-semibold leading-8 mb-3">
            Club and Groups
          </h2>
          <p className="text-grey text-sm">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </motion.div>
      </div>
    </>
  );
}

export default Community;
