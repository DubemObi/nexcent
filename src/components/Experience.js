import Frame35 from "../img/Frame 35.png";

function Experience() {
  return (
    <div className="px-36 flex items-center gap-8">
      <img src={Frame35} alt="" className="w-[27.625rem] h-[27.0625rem]" />
      <div className="w-[50%] space-y-4">
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
