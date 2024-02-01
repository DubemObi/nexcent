import { motion, useScroll } from "framer-motion";
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
  const { scrollYProgress } = useScroll();

  return (
    <div className="text-dark-grey scroll-smooth">
      <motion.div
        className="h-2 fixed top-0 left-0 right-0 z-10 bg-green origin-left "
        style={{ scaleX: scrollYProgress }}
      />
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
