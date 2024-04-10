import { MovingBorderBtn } from "@/components/ui/moving-border";
import Link from "next/link";
import { MdOutlineFileDownload } from "react-icons/md";
import Title from "./Title";
function HeroSection() {
  return (
    <div className="flex justify-between items-center min-h-[60vh] flex-col-reverse gap-14 lg:flex-row lg:gap-0 animate-move-up">
      {/* text section */}
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          "Hello there! 👋
          <br />
          <span className="underline underline-offset-8 decoration-indigo-600 -rotate-2">
            {"I'm Shajib Hasan."}
          </span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          {
            "A Web Developer based in Bangladesh with expertise in React.js and Next.js frameworks."
          }
        </p>
        <Link
          className="inline-block group"
          href={"mailto:shajibhassan71@gmail.com"}
        >
          {/* Contact section */}
          <Title text="Mail me 📬" />
        </Link>
      </div>

 
      <div className="py-4 lg:py-0 relative">
        <div className="h-64 w-64 space-y-3 transform -rotate-[30deg] relative">
          <div className="flex gap-3 transform translate-x-8">
            <div className="h-28 w-28 rounded-xl bg-green-500"></div>
            <div className="h-28 w-28 rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex gap-3 transform -translate-x-1">
            <div className="h-28 w-28 rounded-full bg-indigo-500"></div>
            <div className="h-28 w-28 rounded-2xl bg-green-500"></div>
          </div>
          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
        <div className="absolute bottom-5 left-0 sm:bottom-14 sm:left-10">
          <MovingBorderBtn borderRadius="0.4rem" className=" px-2 py-2 ">
            <p>
              <a
                className="flex gap-2  hover:text-green-500 transition-all duration-300 ease-in-out"
                href="./shajib_hasan.pdf"
                download
              >
                <MdOutlineFileDownload className="text-2xl" /> Download CV
              </a>
            </p>
          </MovingBorderBtn>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
