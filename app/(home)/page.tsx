import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skill from "./components/Skill";

export default function Home() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className="dark:bg-black bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative">
        <div className=" max-w-7xl mx-auto p-5 ">
          <Navbar />
          <HeroSection />
        </div>
        <div className="h-10 xl:h-32 -bottom-5 left-0 xl:bottom-0 w-full bg-gradient-to-t from-black absolute"></div>
      </div>
      <div className=" max-w-7xl mx-auto p-5 mt-10">
        <Skill />
        <Project />
        <Footer />
      </div>
    </div>
  );
}
