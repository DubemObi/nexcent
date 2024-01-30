import Client1 from "../img/Logo (1).png";
import Client2 from "../img/Logo (1).svg";
import Client3 from "../img/Logo (2).png";
import Client4 from "../img/Logo (2).svg";
import Client5 from "../img/Logo (3).svg";
import Client6 from "../img/Logo.svg";

function Clients() {
  return (
    <div className=" px-10 py-8 lg:py-10 lg:px-36 text-center">
      <h2 className="text-[2.25rem] font-semibold">Our Clients</h2>
      <p className="text-grey">
        We have been working with some Fortune 500+ clients
      </p>
      <div className="flex space-x-6 lg:space-x-36 pt-10 justify-center ">
        <img src={Client1} alt="" className="w-7 h-7 lg:w-10 lg:h-10" />
        <img src={Client2} alt="" className="w-7 h-7 lg:w-10 lg:h-10" />
        <img src={Client3} alt="" className="w-7 h-7 lg:w-10 lg:h-10" />
        <img src={Client4} alt="" className="w-7 h-7 lg:w-10 lg:h-10" />
        <img src={Client5} alt="" className="w-7 h-7 lg:w-10 lg:h-10" />
        <img src={Client6} alt="" className="w-7 h-7 lg:w-10 lg:h-10" />
        <img src={Client1} alt="" className="w-7 h-7 lg:w-10 lg:h-10" />
      </div>
    </div>
  );
}

export default Clients;
