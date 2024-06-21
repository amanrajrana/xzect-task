import Image from "next/image";
import React from "react";
import { FaArrowRight, FaCheck } from "react-icons/fa6";
import { H2, Title } from "./UI/sectionHeading";

export default function AboutUs() {
  return (
    <section className="about-us-section py-16">
      <div className="container grid gap-16 lg:grid-cols-2">
        <div className="relative z-10 w-full">
          <Image
            src="/images/about-us/1.png"
            alt="about-us"
            className="w-[inherit]"
            width={592}
            height={606}
          />
          <Image
            src="/images/about-us/2.png"
            alt=""
            className="absolute top-0 left-0 -z-10 w-[inherit]"
            width={592}
            height={606}
          />
        </div>
        <div className="flex flex-col gap-y-8 text-gray-500">
          <div>
            <Title>About Us</Title>
            <H2>Most Creative Agency For Your Project</H2>
          </div>
          <p className="about-us-para flex gap-4">
            <span className="flex justify-center items-center h-4 bg-primary rounded-lg font-bold aspect-square text-white text-4xl p-8">
              A
            </span>
            Avoids pleasure itself, because it is pleasure, but because those
            who do not know how to pursue pleasure ration counter consequences
            that ares extremely painful. Nor again is tanjore who loves or
            pursues or desires to obtain pain
          </p>
          <ul className="about-menu font-medium grid sm:grid-cols-2 gap-y-4 w-max">
            <li>
              <a href="#" className="flex items-center gap-2">
                <FaCheck /> Web Design
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2">
                <FaCheck /> Web Development
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2">
                <FaCheck /> Graphics Arts
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2">
                <FaCheck /> Product Marketing
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2">
                <FaCheck /> User Research
              </a>
            </li>
          </ul>
          <button className="btn btn-primary w-max">
            Contact Us
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
