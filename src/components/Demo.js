import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Demo() {
  return (
    <div className="px-36 py-8 bg-silver ">
      <div className="flex flex-col items-center w-[50rem] mx-auto text-center">
        <h1 className="text-[4rem] leading-none font-semibold mb-8 text-black">
          Pellentesque suscipit fringilla libero eu.
        </h1>
        <button className="h-14 w-44 bg-green rounded-md text-md hover:bg-green/70 text-white">
          Get a Demo <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </button>
      </div>
    </div>
  );
}

export default Demo;
