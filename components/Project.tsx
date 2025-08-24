"use client";
import React, { useRef } from "react";

interface ProjectType {
  title: string;
  description: string;
  tags: string[];
  videoSrc: string;
  href: string;
}

const ProjectCard: React.FC<ProjectType> = ({
  title,
  description,
  tags,
  videoSrc,
  href,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <div className="mb-5">
      <a
        href={href}
        className="bg-[#080808] rounded-2xl relative overflow-hidden group"
        onMouseEnter={() => videoRef.current?.play()}
        onMouseLeave={() => videoRef.current?.pause()}
      >
        <div className="bg-gradient-to-b from-[#1A1A1A] to-[#080808] p-px rounded-2xl overflow-hidden">
          <video
            ref={videoRef}
            className="w-full rounded-t-2xl"
            muted
            loop
            playsInline
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag
          </video>
        </div>

        <div className="p-6 relative z-10">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <div
                key={idx}
                className="bg-[#181818] text-base px-3 py-1 text-[#E4E4E4] w-fit rounded-lg max-lg:text-sm max-sm:text-xs max-sm:px-2"
              >
                {tag}
              </div>
            ))}
          </div>
          <div className="pt-3 space-y-2 max-lg:space-y-1">
            <h3 className="text-3xl max-lg:text-2xl text-white font-semibold">
              {title}
            </h3>
            <p className="text-[#C6C6C6] max-lg:line-clamp-2 font-medium max-sm:font-normal text-[16px] max-sm:text-[15px]">
              {description}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

const Project: React.FC = () => {
  const projects: ProjectType[] = [
    {
      title: "Break A Leg",
      description:
        "Building a vibrant website that connects audiences with live theatre shows—making culture more accessible and engaging.",
      tags: ["UX/UI Design", "Development"],
      videoSrc: "/videos/break-a-leg-intro.mp4",
      href: "/en/work/break-a-leg",
    },
    {
      title: "Black friday by Intellect",
      description:
        "Launching a bold campaign that drives engagement and sales—bringing exclusive Black Friday offers to the spotlight.",
      tags: ["UX/UI Design", "Development"],
      videoSrc: "/videos/break-a-leg-intro.mp4",
      href: "/en/work/intellect-black-friday",
    },
    {
      title: "Pay Forward Foundation",
      description:
        "Creating a clean and confident digital presence that reflects Pay Forward's mission.",
      tags: ["UX/UI Design", "Development"],
      videoSrc: "/videos/break-a-leg-intro.mp4",
      href: "/en/work/begood",
    },
    {
      title: "Compliance Navi",
      description:
        "Designing a clear, trustworthy website that helps businesses navigate AML and compliance with confidence and ease.",
      tags: ["UX/UI Design", "Development"],
      videoSrc: "/videos/break-a-leg-intro.mp4",
      href: "/en/work/compliance-navi",
    },
  ];

  return (
    <div id="project" className="bg-black">
      <div className="container mx-auto flex max-sm:flex-col max-sm:items-start max-sm:gap-5 items-end justify-between max-xl:px-5">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6  max-xl:text-[38px] text-[60px]  text-white">
          Turning Vision{" "}
          <span className="sm:block font-bold max-xl:text-[38px] text-[60px] bg-gradient-to-r from-[#96D1B0] via-[#F5F5F8] to-[#96D1B0] leading-[1.15em] bg-clip-text text-transparent">
            <span className="max-sm:text-white text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6">
              Into Reality{" "}
            </span>
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-2 max-sm:grid-cols-1 container mx-auto gap-5 mt-10 max-lg:mt-14 max-sm:mt-0 max-sm:gap-5 max-xl:px-5">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
