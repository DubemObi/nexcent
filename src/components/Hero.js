import illustration from "../img/Illustration.png";

function Hero() {
  return (
    <div className="flex flex-col items-center px-36 pt-24 pb-8 bg-silver text-dark-grey">
      <div className="flex justify-between items-center space-x-24 mb-16">
        <div className="w-3/6 space-y-6">
          <h1 className="text-[4rem] font-semibold leading-[4rem]">
            Lessons and insights{" "}
            <span className="text-green">from 8 years</span>
          </h1>
          <p className="text-grey">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="h-10 w-28 bg-green rounded-md text-white">
            Register
          </button>
        </div>

        <img src={illustration} alt="" />
      </div>
      <div className="flex space-x-2 ">
        <div className="w-2 h-2 rounded-full bg-green"></div>
        <div className="w-2 h-2 rounded-full bg-green/30"></div>
        <div className="w-2 h-2 rounded-full bg-green/30"></div>
      </div>
    </div>
  );
}

export default Hero;
