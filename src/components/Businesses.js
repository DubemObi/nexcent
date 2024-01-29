import Icon1 from "../img/Icon (1).png";
import Icon2 from "../img/Icon (2).png";
import Icon3 from "../img/Icon (3).png";
import Icon4 from "../img/Icon (4).png";

function Businesses() {
  return (
    <div className="px-36 bg-silver flex justify-between py-14">
      <div className="w-1/2">
        <h2 className="text-4xl font-semibold w-[63%] mb-2">
          Helping a local{" "}
          <span className="text-green">business reinvent itself</span>{" "}
        </h2>
        <p className="text-base">
          We reached here with our hard work and dedication
        </p>
      </div>
      <div className="flex flex-col w-1/2 gap-7">
        <div className="flex items-center gap-7 ">
          <div className="flex gap-4 ">
            <img src={Icon1} alt="" className="w-12 h-12" />
            <div className="w-36">
              <h2 className="text-[1.75rem] font-bold leading-8">2,245,341</h2>
              <p className="text-base">Members</p>
            </div>
          </div>
          <div className="flex gap-3">
            <img src={Icon2} alt="" className="w-12 h-12" />
            <div className="w-36">
              <h2 className="text-[1.75rem] font-bold leading-8">46,328</h2>
              <p>Clubs</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-7">
          <div className=" flex gap-4">
            <img src={Icon4} alt="" className="w-12 h-12" />
            <div className="w-36">
              <h2 className="text-[1.75rem] font-bold leading-8">828,867</h2>
              <p>Event Bookings</p>
            </div>
          </div>
          <div className="flex gap-4">
            <img src={Icon3} alt="" className="w-12 h-12" />
            <div className="w-36">
              <h2 className="text-[1.75rem] font-bold leading-8">1,926,436</h2>
              <p>Payments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Businesses;
