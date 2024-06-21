import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { H2, Title } from "./UI/sectionHeading";
import {
  PortfolioCard,
  PortfolioSlidingContent,
  PortfolioSlidingContentDescription,
  PortfolioSlidingContentLink,
  PortfolioSlidingContentTitle,
} from "./UI/portfolioCard";

export default function Portfolio() {
  return (
    <section className="portfolio-section py-24 relative w-full text-slate-800">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-center">
        <div className="portfolio-title">
          <Title>Our Portfolio</Title>
          <H2>Advantage from but who has any right to find</H2>
        </div>
        <div className="portfolio-btn flex gap-4 justify-end">
          <a href="#" className="btn btn-primary text-white">
            <span>View More </span>
            <FaArrowRight />
          </a>
          <a href="#" className="btn">
            <span> Let's Talk </span>
            <FaArrowRight />
          </a>
        </div>
      </div>

      {/* <!-- Portfolio cards --> */}
      <div className="py-8 px-2 grid gap-8 max-w-screen-2xl lg:p-8 p-4 mx-auto md:grid-cols-2 lg:grid-cols-3">
        <PortfolioCard className={"md:row-span-2 group"}>
          <Image
            className="w-full object-cover duration-300 h-full"
            src="/images/paint-2990357_640.jpg"
            alt="Creative Works"
            height={650}
            width={460}
          />

          <PortfolioSlidingContent className="group-hover:right-0">
            <div>
              <PortfolioSlidingContentTitle>
                Creative Works
              </PortfolioSlidingContentTitle>
              <PortfolioSlidingContentDescription>
                Light Illustration
              </PortfolioSlidingContentDescription>
            </div>

            <PortfolioSlidingContentLink href={"#"}>
              <FaArrowRight />
            </PortfolioSlidingContentLink>
          </PortfolioSlidingContent>
        </PortfolioCard>

        <PortfolioCard className={"group"}>
          <Image
            className="w-full object-cover duration-300 h-[350px]"
            src="/images/3.jpg"
            alt="Graphic Design"
            height={650}
            width={460}
          />

          <PortfolioSlidingContent className="group-hover:right-0">
            <div>
              <PortfolioSlidingContentTitle>
                Graphic Design
              </PortfolioSlidingContentTitle>
              <PortfolioSlidingContentDescription>
                Graphic Design
              </PortfolioSlidingContentDescription>
            </div>
            <PortfolioSlidingContentLink href={"#"}>
              <FaArrowRight />
            </PortfolioSlidingContentLink>
          </PortfolioSlidingContent>
        </PortfolioCard>

        <PortfolioCard className={"group"}>
          <Image
            className="w-full object-cover duration-300 h-[350px]"
            src="/images/computer-screen-6977452_640.jpg"
            alt="portfolio"
            height={650}
            width={460}
          />

          <PortfolioSlidingContent className="group-hover:right-0">
            <div>
              <PortfolioSlidingContentTitle>
                Video Editing
              </PortfolioSlidingContentTitle>
              <PortfolioSlidingContentDescription>
                Light Illustration
              </PortfolioSlidingContentDescription>
            </div>
            <PortfolioSlidingContentLink href={"#"}>
              <FaArrowRight />
            </PortfolioSlidingContentLink>
          </PortfolioSlidingContent>
        </PortfolioCard>

        <PortfolioCard className={"group"}>
          <Image
            className="w-full h-[350px] object-cover duration-300 cursor-pointer"
            src="/images/young-3210056_640.jpg"
            alt="Creative Works"
            height={650}
            width={460}
          />

          <PortfolioSlidingContent className={"group-hover:right-0"}>
            <div>
              <PortfolioSlidingContentTitle>
                Creative Works
              </PortfolioSlidingContentTitle>
              <PortfolioSlidingContentDescription>
                Light Illustration
              </PortfolioSlidingContentDescription>
            </div>
            <PortfolioSlidingContentLink href={"#"}>
              <FaArrowRight />
            </PortfolioSlidingContentLink>
          </PortfolioSlidingContent>
        </PortfolioCard>

        <PortfolioCard className={"group"}>
          <Image
            className="w-full object-cover duration-300 h-[350px]"
            src="/images/laptop-1836990_640.jpg"
            alt="portfolio"
            height={650}
            width={460}
          />

          <PortfolioSlidingContent className="group-hover:right-0">
            <div>
              <PortfolioSlidingContentTitle>
                Web Development
              </PortfolioSlidingContentTitle>
              <PortfolioSlidingContentDescription>
                Give your Business online space
              </PortfolioSlidingContentDescription>
            </div>
            <PortfolioSlidingContentLink href={"#"}>
              <FaArrowRight />
            </PortfolioSlidingContentLink>
          </PortfolioSlidingContent>
        </PortfolioCard>
      </div>
    </section>
  );
}
