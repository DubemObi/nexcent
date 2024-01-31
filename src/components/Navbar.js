import Logo from "../img/Icon (5).png";
import logo from "../img/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Menu from "./Menu";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleIsOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      {isOpen && <Menu onSet={handleIsOpen} />}
      <nav className="flex px-5 py-2 justify-between h-[84px] items-center bg-silver fixed top-0 w-full z-10">
        <div className="flex gap-2 items-center">
          <img src={Logo} alt="" className="w-[2.7rem] h-[1.8rem]" />
          <h1 className="text-3xl font-bold">Nexcent</h1>
        </div>
        <FontAwesomeIcon
          icon={faBars}
          className="text-2xl"
          onClick={handleIsOpen}
        />
      </nav>
      <nav className="hidden lg:flex lg:px-20 lg:py-2 lg:justify-between lg:h-[84px] lg:items-center lg:bg-silver lg:fixed lg:top-0 lg:w-full lg:z-10 md:flex md:px-12 md:py-2 md:justify-between md:h-[84px] md:items-center md:bg-silver md:fixed md:top-0 md:w-full md:z-10">
        {/* <nav className="flex px-20 py-2 justify-between h-[84px] items-center bg-silver fixed top-0 w-full z-10"></nav> */}
        <img
          src={logo}
          alt="Logo"
          className="h-6 w-[154px] md:h-5 md:w-[125px]"
        />

        <ul className="flex space-x-12 md:space-x-8">
          <li>Home</li>
          <li>Service</li>
          <li>Feature</li>
          <li>Product</li>
          <li>Testimonial</li>
          <li>FAQ</li>
        </ul>

        <div className="flex space-x-4 items-center">
          <p className="text-green">Login</p>
          <button className="h-10 w-24 bg-green hover:bg-green/70 rounded-md text-white">
            Sign up
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
