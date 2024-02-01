import { motion } from "framer-motion";
import image from "../img/pana.png";

function Design() {
  return (
    <div className="px-10 md:px-24 lg:px-36 py-10 flex flex-col md:flex-row lg:flex-row items-center gap-8">
      <div className="md:w-[20rem] lg:w-[27.59rem]">
        <motion.img
          whileInView={{ x: [-50, 0] }}
          transition={{ ease: "easeIn", duration: 1 }}
          src={image}
          alt=""
          className="w-[17rem] md:w-[18rem] lg:w-[23rem]"
        />
      </div>
      <motion.div
        whileInView={{ x: [80, 0] }}
        transition={{ ease: "easeIn", duration: 1 }}
        className="lg:w-[50%] md:w-[50%] text-center md:text-left lg:text-left"
      >
        <h2 className="text-4xl font-semibold mb-4">
          How to design your site footer like we did
        </h2>
        <p className="text-sm text-grey mb-8">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <button className="h-10 w-28 bg-green rounded-md text-white">
          Learn more
        </button>
      </motion.div>
    </div>
  );
}

export default Design;
