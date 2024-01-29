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
    <div className="px-36 py-16 bg-black text-white flex justify-between">
      <div className="">
        <div className="flex gap-2 items-center mb-6">
          <img src={logo} alt="" className="w-[2.7rem] h-[1.8rem]" />
          <h1 className="text-4xl font-semibold">Nexcent</h1>
        </div>
        <p className="text-sm">Copyright © 2020 Nexcent ltd.</p>
        <p className="text-sm ">All rights reserved</p>
        <div className="mt-6 space-x-4 flex items-center">
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
      <div className="flex justify-between w-[60%]">
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
        <div className="w-1/3">
          <h2 className="text-xl font-semibold mb-4">Stay up to date</h2>
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Your email address"
              className="bg-grey p-2 w-[15rem] rounded-md"
            />
            <FontAwesomeIcon
              icon={faPaperPlane}
              className="absolute left-52 text-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
