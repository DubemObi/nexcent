import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import image1 from "../img/image 18.png";
import image2 from "../img/image 19.png";
import image3 from "../img/image 20.png";

function Marketing() {
  return (
    <div className="px-36 py-12 text-center">
      <div className="w-1/2 m-auto space-y-2 pb-4">
        <h2 className="text-4xl font-semibold ">Caring is the new marketing</h2>
        <p className="text-base ">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </p>
      </div>
      <div className=" flex space-x-6 justify-center mx-auto pb-24">
        <div className="relative flex flex-col items-center">
          <img src={image1} alt="" className="w-[23rem] rounded-md" />
          <div className="w-[85%] h-[11rem] bg-silver absolute top-48 flex items-center flex-col p-4 rounded-md shadow-md shadow-grey/30 ">
            <p className="text-xl mb-6 h-[60%]">
              Creating Streamlined Safeguarding Processes with OneRen
            </p>
            <div className="flex gap-4 items-center text-green text-xl ">
              <p className="text-base font-semibold">Readmore </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
        <div className="relative flex flex-col items-center">
          <img src={image2} alt="" className="w-[23rem] rounded-md" />
          <div className="w-[85%] h-[11rem] bg-silver absolute top-48 flex items-center flex-col p-4 rounded-md shadow-md shadow-grey/30 ">
            <p className="text-xl mb-6 h-[60%]">
              What are your safeguarding responsibilities and how can you manage
              them?
            </p>
            <div className="flex gap-4 items-center text-green text-xl ">
              <p className="text-base font-semibold">Readmore </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
        <div className="relative flex flex-col items-center">
          <img src={image3} alt="" className="w-[23rem] rounded-md" />
          <div className="w-[85%] h-[11rem] bg-silver absolute top-48 flex items-center flex-col py-4 px-7 rounded-md shadow-md shadow-grey/30 ">
            <p className="text-xl mb-6 h-[60%]">
              Revamping the Membership Model with Triathlon Australia
            </p>
            <div className="flex gap-4 items-center text-green text-xl ">
              <p className="text-base font-semibold">Readmore </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marketing;
