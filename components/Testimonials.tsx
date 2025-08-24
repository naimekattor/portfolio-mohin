import { Star } from "lucide-react";
import React from "react";
import { SiFiverr } from "react-icons/si";
import { Marquee } from "./magicui/marquee";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://i.ibb.co/WvbmX5Dh/picture-elegant-young-fashion-man-158595-531.jpg",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://i.ibb.co/WvbmX5Dh/picture-elegant-young-fashion-man-158595-531.jpg",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://i.ibb.co/WvbmX5Dh/picture-elegant-young-fashion-man-158595-531.jpg",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "The quality is beyond expectations. Would highly recommend.",
    img: "https://i.ibb.co/WvbmX5Dh/picture-elegant-young-fashion-man-158595-531.jpg",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "Amazing work! Great communication and fast delivery.",
    img: "https://i.ibb.co/WvbmX5Dh/picture-elegant-young-fashion-man-158595-531.jpg",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://i.ibb.co/WvbmX5Dh/picture-elegant-young-fashion-man-158595-531.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

type ReviewProps = {
  img: string;
  name: string;
  username: string;
  body: string;
};

const ReviewCard: React.FC<ReviewProps> = ({ img, name, username, body }) => {
  return (
    <div className="bg-[#080808] w-80 h-full flex flex-col justify-between rounded-2xl shadow-lg relative z-20 p-6 space-y-5 overflow-hidden">
      {/* Stars */}
      <div className="flex gap-1 items-center">
        {Array.from({ length: 5 }).map((_, index) => (
          <FaStar key={index} size={18} className="text-[#C6C6C6]" />
        ))}
      </div>

      {/* Review text */}
      <p className="text-[#C6C6C6] text-base leading-relaxed">{body}</p>

      {/* Divider line */}
      <div className="bg-gradient-to-r from-transparent via-[#303030] to-transparent w-full h-px" />

      {/* Author */}
      <div className="flex items-center gap-3">
        <Image
          width={48}
          height={48}
          src={img}
          alt={name}
          className="w-12 h-12 rounded-full border border-gray-700"
        />
        <div>
          <div className="text-white text-lg font-semibold">{name}</div>
          <div className="text-sm text-gray-400">{username}</div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonial" className="bg-black py-16">
      <div className="flex md:flex-row flex-col justify-between items-center container mx-auto mb-10">
        <h1 className=" text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6  max-xl:text-[38px] text-[60px] bg-gradient-to-r from-[#96D1B0] via-[#F5F5F8] to-[#96D1B0]  bg-clip-text text-transparent">
          What Our Clients Say
        </h1>
        <div className="flex space-x-6 items-center">
          <div className="flex flex-col gap-1 text-center">
            <span className="text-[#C6C6C6] text-xs font-semibold">
              REVIEWED ON
            </span>
            <SiFiverr className="text-white text-4xl" />
          </div>
          <div className="flex flex-col gap-1 items-center">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="text-yellow-500" size={18} />
              ))}
            </div>
            <span className="text-[#C6C6C6] text-sm font-semibold">
              14 REVIEWS
            </span>
          </div>
        </div>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="[--duration:25s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Testimonials;
