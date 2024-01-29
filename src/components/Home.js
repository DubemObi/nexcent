import Hero from "./Hero";
import Clients from "./Clients";
import Community from "./Community";
import Experience from "./Experience";
import Businesses from "./Businesses";
import Design from "./Design";
import Customer from "./Customer";
import Marketing from "./Marketing";
import Demo from "./Demo";
import Footer from "./Footer";

function Home() {
  return (
    <div className="text-dark-grey ">
      <Hero />
      <Clients />
      <Community />
      <Experience />
      <Businesses />
      <Design />
      <Customer />
      <Marketing />
      <Demo />
      <Footer />
    </div>
  );
}

export default Home;
