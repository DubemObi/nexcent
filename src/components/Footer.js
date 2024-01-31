import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTiktok,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import logo from "../img/logo-icon.png";

function Footer() {
  return (
    <div className="px-10 lg:px-36 md:px-24 py-12 md:py-16 lg:py-16  bg-black text-white flex flex-col-reverse md:flex-row lg:flex-row justify-between">
      <div className="">
        <div className="flex gap-2 items-center mb-8">
          <img src={logo} alt="" className="w-[2.7rem] h-[1.8rem]" />
          <h1 className="text-4xl font-semibold">Nexcent</h1>
        </div>
        <p className="text-sm">Copyright © 2020 Nexcent ltd.</p>
        <p className="text-sm ">All rights reserved</p>
        <div className="mt-8 space-x-4 flex items-center">
          <FontAwesomeIcon
            icon={faInstagram}
            className="bg-dark-grey p-1 rounded-lg "
          />
          <FontAwesomeIcon
            icon={faTiktok}
            className="bg-dark-grey p-1 rounded-lg "
          />
          <FontAwesomeIcon
            icon={faXTwitter}
            className="bg-dark-grey p-1 rounded-lg "
          />
          <FontAwesomeIcon
            icon={faYoutube}
            className="bg-dark-grey p-1 rounded-lg "
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row justify-between w-full lg:w-[60%] md:w-[60%] md:mb-0 mb-10 lg:mb-0">
        <div className="flex justify-between w-full md:w-1/2 lg:w-1/2 mb-10 md:mb-0 lg:mb-0">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold mb-4">Company</h2>
            <p>About us</p>
            <p>Blog</p>
            <p>Contact us</p>
            <p>Pricing</p>
            <p>Testimonials</p>
          </div>
          <div className="space-y-1">
            <h2 className="text-xl font-semibold mb-4">Support</h2>
            <p>Help center</p>
            <p>Terms of service</p>
            <p>Legal</p>
            <p>Pricacy Policy</p>
            <p>Status</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/3 ">
          <h2 className="text-xl font-semibold mb-4">Stay up to date</h2>
          <div className="relative flex items-center md:w-[14rem]">
            <input
              type="text"
              placeholder="Your email address"
              className="bg-grey p-2 w-full md:w-[14rem] lg:w-[15rem] rounded-md border-2 border-silver"
            />
            <FontAwesomeIcon
              icon={faPaperPlane}
              className="absolute right-4 md:right-3 lg:right-4 text-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
