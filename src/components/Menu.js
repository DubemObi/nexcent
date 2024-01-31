import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Menu({ onSet }) {
  return (
    <div className="fixed top-0 z-20 h-full w-full ">
      <div className="bg-green h-dvh w-2/5 z-10 absolute right-0 px-4 py-6">
        <div className="flex justify-end">
          <FontAwesomeIcon
            icon={faXmark}
            className="text-3xl "
            onClick={onSet}
          />
        </div>
        <ul className="mt-4">
          <li className="border-b border-white py-2 pl-2">Home</li>
          <li className="border-b border-white py-2 pl-2">Service</li>
          <li className="border-b border-white py-2 pl-2">Feature</li>
          <li className="border-b border-white py-2 pl-2">Product</li>
          <li className="border-b border-white py-2 pl-2">Testimonial</li>
          <li className="py-2 pl-2">FAQ</li>
        </ul>
        <div className="flex flex-col mt-12 space-y-3 items-center">
          <p className="text-white py-1 px-7 rounded-md border border-white hover:bg-silver/70">
            Login
          </p>
          <button className="h-9 w-24 bg-white hover:bg-silver/70 rounded-md text-green">
            Sign up
          </button>
        </div>
      </div>
      <div
        className="fixed top-0 bg-grey/50 h-full w-full"
        onClick={onSet}
      ></div>
    </div>
  );
}

export default Menu;
