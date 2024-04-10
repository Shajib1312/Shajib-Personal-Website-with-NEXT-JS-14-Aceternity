import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiTailwindcss,
} from "react-icons/si";
import Title from "./Title";

export default function Project() {
  const projectData = [
    {
      title: "Anime Series App (Anime House)",
      tech: [
        SiJavascript,
        SiReact,
        SiNextdotjs,
        SiPrisma,
        SiTailwindcss,
        SiMongodb,
      ],
      cover: "/animehouse.jpg",
      link: "https://anime-house.vercel.app",
      background: "bg-indigo-500",
    },
    {
      title: "Anime Series App (Anime House)",
      tech: [
        SiJavascript,
        SiReact,
        SiNextdotjs,
        SiPrisma,
        SiTailwindcss,
        SiMongodb,
      ],
      cover: "/animehouse.jpg",
      link: "https://anime-house.vercel.app",
      background: "bg-indigo-500",
    },

    {
      title: "MovieApp (mTrailers)",
      tech: [
        SiJavascript,
        SiReact,
        SiNextdotjs,
        SiReactquery,
        SiTailwindcss,
        SiMongodb,
      ],
      cover: "/movieTailer.jpg",
      link: "https://mtrailers123.netlify.app",
      background: "bg-green-500",
    },
  ];
  return (
    <div className="py-8 p-5 sm:p-0">
      <Title
        text="Projects 👷🏻"
        className="flex flex-col items-center justify-center rotate-6 cursor-pointer"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 mt-4">
        {projectData.map(({ title, tech, cover, link, background }) => (
          <Link href={link} key={title + 1}>
            <div className={cn("p-1 rounded-sm", background)}>
              <DirectionAwareHover
                className="w-full space-y-5 cursor-pointer"
                imageUrl={cover}
              >
                <div className="space-y-5">
                  <h1 className="text-xl font-bold">{title}</h1>
                  <div className="flex gap-3 items-center">
                    {tech.map((Icon, index) => {
                      return <Icon className="w-6 h-6" key={index} />;
                    })}
                  </div>
                </div>
              </DirectionAwareHover>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
