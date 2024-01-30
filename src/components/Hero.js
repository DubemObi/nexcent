import illustration from "../img/Illustration.png";

function Hero() {
  return (
    <div className="flex flex-col mt-[84px] items-center px-10 py-10 lg:px-36 lg:pt-24 pb-8 bg-silver text-dark-grey">
      <div className="flex flex-col-reverse items-center mb-16 lg:flex-row lg:flex lg:justify-between lg:items-center lg:space-x-24 lg:mb-16">
        <div className="text-center lg:text-left space-y-6 ">
          <h1 className="text-5xl lg:text-[4rem] font-semibold lg:leading-[4rem]">
            Lessons and insights{" "}
            <span className="text-green">from 8 years</span>
          </h1>
          <p className="text-grey">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="h-10 w-28 bg-green hover:bg-green/70 rounded-md text-white">
            Register
          </button>
        </div>

        <img
          src={illustration}
          alt=""
          className="mb-12 lg:mb-0 w-52 lg:w-[24.4rem] "
        />
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
