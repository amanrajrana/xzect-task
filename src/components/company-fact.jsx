"use client";

import {
  FaArrowRight,
  FaBullseye,
  FaPeopleGroup,
  FaRocket,
  FaTrophy,
} from "react-icons/fa6";
import { H2, Title } from "./UI/sectionHeading";
import CountingAnimationSpan from "./countingAnimationSpan";

export default function CompanyFact() {
  const achievementJourney = [
    {
      name: "Project Done",
      icon: <FaRocket />,
      count: 364,
    },
    {
      name: "Satisfied Clients",
      icon: <FaBullseye />,
      count: 293,
    },
    {
      name: "Award Won",
      icon: <FaTrophy />,
      count: 34,
    },
    {
      name: "Expert Team Members",
      icon: <FaPeopleGroup />,
      count: 421,
    },
  ];

  return (
    <section className="py-24 relative w-full">
      <div className="container">
        <div className="flex justify-between flex-wrap gap-8">
          <div>
            <Title>Company Fact</Title>
            <H2>Our Teams Achievement Journey</H2>
          </div>
          <div className="company-fact-btn">
            <a href="#" className="btn btn-primary">
              <span>View More</span>
              <FaArrowRight />
            </a>
          </div>
        </div>

        {/* <!-- FACTS NUMBER --> */}
        <div
          id="counters"
          className="counter-boxes my-8 mx-0 grid text-slate-600 md:grid-cols-2 lg:grid-cols-4"
        >
          {achievementJourney.map((achievement, index) => (
            <div key={index} className="flex flex-col gap-8 p-8">
              <span className="text-5xl text-primary">{achievement.icon}</span>
              <p className="border-l-4 border-primary pl-8 flex flex-col text-gray-400">
                <CountingAnimationSpan count={achievement.count} />
                <span>{achievement.name}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
