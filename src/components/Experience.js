import Frame35 from "../img/Frame 35.png";

function Experience() {
  return (
    <div className="px-10 lg:px-36 md:px-24 mb-8 md:mb-0 lg:mb-0 flex items-center flex-col md:flex-row lg:flex-row gap-8">
      <img
        src={Frame35}
        alt=""
        className="w-[20rem] h-[19rem] lg:w-[27.625rem] lg:h-[27.0625rem]"
      />
      <div className="text-center md:text-left md:w-[50%] lg:text-left lg:w-[50%] space-y-4">
        <h2 className="text-[2.25rem] font-semibold leading-10">
          The unseen of spending three years at Pixelgrade
        </h2>
        <p className="text-sm text-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <button className="h-10 w-28 bg-green rounded-md text-white">
          Learn more
        </button>
      </div>
    </div>
  );
}

export default Experience;
