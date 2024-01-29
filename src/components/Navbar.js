import Logo from "../img/Logo.png";

function Navbar() {
  return (
    <nav className="flex px-20 py-2 justify-between h-[84px] items-center bg-silver fixed w-full z-10">
      <img src={Logo} alt="Logo" className="h-6 w-[154px]" />

      <ul className="flex space-x-12">
        <li>Home</li>
        <li>Service</li>
        <li>Feature</li>
        <li>Product</li>
        <li>Testimonial</li>
        <li>FAQ</li>
      </ul>

      <div className="flex space-x-4 items-center">
        <p className="text-green">Login</p>
        <button className="h-10 w-24 bg-green rounded-md text-white">
          Sign up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
