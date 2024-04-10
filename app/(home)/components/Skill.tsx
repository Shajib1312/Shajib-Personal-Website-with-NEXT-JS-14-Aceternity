"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiCss3,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
} from "react-icons/si";
import Title from "./Title";

const Skill = () => {
  const skillsData = [
    {
      text: "HTML",
      Icon: SiHtml5,
      category: "Programming Languages",
      experience: "Intermediate",
    },
    {
      text: "CSS",
      Icon: SiCss3,
      category: "Programming Languages",
      experience: "Intermediate",
    },
    {
      text: "JavaScript",
      Icon: SiJavascript,
      category: "Programming Languages",
      experience: "Intermediate",
    },
    {
      text: "React",
      Icon: SiReact,
      category: "Frontend Frameworks",
      experience: "Advanced",
    },
    {
      text: "Next.js",
      Icon: SiNextdotjs,
      category: "Frontend Frameworks",
      experience: "Advanced",
    },
    {
      text: "Node.js",
      Icon: SiNodedotjs,
      category: "Backend Frameworks",
      experience: "Intermediate",
    },

    {
      text: "Git",
      Icon: SiGit,
      category: "DevOps",
      experience: "Intermediate",
    },
    {
      text: "Prisma",
      Icon: SiPrisma,
      category: "API Technologies",
      experience: "Intermediate",
    },
    {
      text: "MongoDB",
      Icon: SiMongodb,
      category: "Databases",
      experience: "Intermediate",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 ">
      <Title
        text="Skills 🛠"
        className="flex flex-col items-center justify-center -rotate-6 cursor-pointer"
      />
      <HoverEffect items={skillsData} />
    </div>
  );
};

export default Skill;
