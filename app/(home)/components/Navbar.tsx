import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SiFacebook, SiGithub, SiLinkedin } from "react-icons/si";

export default function Navbar({ className }: { className?: string }) {
  const socialLinks = [
    {
      name: "Facebook",
      link: "https://facebook.com/jhean.hasan.26.11.00",
      icon: SiFacebook,
    },

    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/shajib-hasan",
      icon: SiLinkedin,
    },
    {
      name: "GitHub",
      link: "https://github.com/Shajib1312",
      icon: SiGithub,
    },
  ];

  return (
    <nav
      className={cn(
        "py-10 flex justify-between items-center animate-move-down",
        className
      )}
    >
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-indigo-600 -rotate-2 flex">
        <Image src={"/brackets1.png"} alt="logo" width={30} height={30} />
        Shajib
        <Image src={"/brackets.png"} alt="logo" width={30} height={30} />
      </h1>

      <div className="flex gap-4">
        {socialLinks.map(({ name, link, icon: Icon }) => (
          <Link key={name} href={link} target="_blank" rel="noreferrer">
            <Icon className="w-5 h-5 hover:text-green-300 hover:scale-75 transition-all duration-300 ease-in-out" />
          </Link>
        ))}
      </div>
    </nav>
  );
}
