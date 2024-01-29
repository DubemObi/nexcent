import image from "../img/pana.png";

function Design() {
  return (
    <div className="px-36 py-10 flex items-center gap-8">
      <div className="w-[27.59rem]">
        <img src={image} alt="" className="w-[23rem]" />
      </div>
      <div className="w-[50%]">
        <h2 className="text-4xl font-semibold mb-4">
          How to design your site footer like we did
        </h2>
        <p className="text-sm text-grey mb-8">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <button className="h-10 w-28 bg-green rounded-md text-white">
          Learn more
        </button>
      </div>
    </div>
  );
}

export default Design;
