import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { H2, Title } from "./UI/sectionHeading";

export default function PriceCardsSection() {
  return (
    <section className="py-24 w-full">
      <div className="container">
        <div className="flex flex-col items-center">
          <Title>Pricing Plan</Title>
          <H2>Choose Your Best Pricing Plan</H2>
        </div>

        {/* <!-- Pricing cards --> */}
        <div className="pricing-cards grid gap-8 mt-16 lg:grid-cols-3 lg:h-[636px]">
          {/* <!-- card 1 --> */}
          <div className="single-pricing-card p-8 flex flex-col gap-8 duration-300 relative overflow-clip h-max text-slate-600 hover:bg-blue-700 hover:text-white">
            <h2 className="plan-name text-base font-bold uppercase flex flex-col justify-center items-center leading-[0.9] bg-primary w-full pt-16 px-4 pb-8 text-white absolute origin-top-right rotate-45 left-36 top-28 duration-300 delay-100">
              <span className="text-4xl font-bold">01</span>
              Basic
            </h2>

            {/* <!-- Image --> */}
            <Image
              height={90}
              width={96}
              src="/images/price-icon.png"
              alt="basic-plan"
              className="w-[inherit] max-w-24 mt-14"
            />

            {/* <!-- Price --> */}
            <div className="plan-details">
              <h3 className="text-xl font-bold lowercase text-primary mb-8 duration-200">
                $49 / Per Month
              </h3>

              <ul className="space-y-4">
                <li className="flex gap-4 items-center">
                  <FaArrowRight className="text-primary" />
                  Design (UX/UI)
                </li>
                <li className="flex gap-4 items-center">
                  <FaArrowRight className="text-primary" />
                  Software Development
                </li>
                <li className="flex gap-4 items-center">
                  <FaArrowRight className="text-primary" />
                  Fashion Design (Arts)
                </li>
                <li className="flex gap-4 items-center">
                  <FaArrowRight className="text-primary" /> Development (php)
                </li>
              </ul>
              <ul className="hidden-details space-y-4 relative -mt-20 opacity-0 -z-10 duration-300">
                <li className="flex gap-4 items-center mt-4">
                  <FaArrowRight className="text-primary" />
                  Game Design & DV
                </li>
                <li className="flex gap-4 items-center">
                  <FaArrowRight className="text-primary" />
                  Computer Hardware
                </li>
              </ul>

              <button className="my-8 mx-0 btn btn-primary">
                <span>Make Plan</span>
                <FaArrowRight />
              </button>
            </div>
          </div>

          {/* <!-- card 2 --> */}
          <div className="single-pricing-card p-8 flex flex-col gap-8 duration-300 relative overflow-clip h-max text-slate-600 hover:bg-blue-700 hover:text-white">
            <h2 className="plan-name text-base font-bold uppercase flex flex-col justify-center items-center leading-[0.9] bg-primary w-full pt-16 px-4 pb-8 text-white absolute origin-top-right rotate-45 left-36 top-28 duration-300 delay-100">
              <span className="text-4xl font-bold">01</span>
              Basic
            </h2>

            {/* <!-- Image --> */}
            <Image
              height={90}
              width={96}
              src="/images/price-icon.png"
              alt="basic-plan"
              className="w-[inherit] max-w-24 mt-14"
            />

            {/* <!-- Price --> */}
            <div className="plan-details">
              <h3 className="text-xl font-bold lowercase text-primary mb-8 duration-200">
                $49 / Per Month
              </h3>

              <ul className="space-y-4">
                <li className="flex gap-4 items-center">
                  <FaArrowRight className="text-primary" />
                  Design (UX/UI)
                </li>
                <li className="flex gap-4 items-center">
                  <FaArrowRight className="text-primary" />
                  Software Development
                </li>
                <li className="flex gap-4 items-center">
                  <FaArrowRight className="text-primary" />
                  Fashion Design (Arts)
                </li>
                <li className="flex gap-4 items-center">
                  <FaArrowRight className="text-primary" /> Development (php)
                </li>
              </ul>
              <ul className="hidden-details space-y-4 relative -mt-20 opacity-0 -z-10 duration-300">
                <li className="flex gap-4 items-center mt-4">
                  <FaArrowRight className="text-primary" />
                  Game Design & DV
                </li>
                <li className="flex gap-4 items-center">
                  <FaArrowRight className="text-primary" />
                  Computer Hardware
                </li>
              </ul>

              <button className="my-8 mx-0 btn btn-primary">
                <span>Make Plan</span>
                <FaArrowRight />
              </button>
            </div>
          </div>

          {/* <!-- card 3 --> */}
          <div className="single-pricing-card p-8 flex flex-col gap-8 duration-300 relative overflow-clip h-max text-slate-600 hover:bg-blue-700 hover:text-white">
            <h2 className="plan-name text-base font-bold uppercase flex flex-col justify-center items-center leading-[0.9] bg-primary w-full pt-16 px-4 pb-8 text-white absolute origin-top-right rotate-45 left-36 top-28 duration-300 delay-100">
              <span className="text-4xl font-bold">01</span>
              Basic
            </h2>

            {/* <!-- Image --> */}
            <Image
              height={90}
              width={96}
              src="/images/price-icon.png"
              alt="basic-plan"
              className="w-[inherit] max-w-24 mt-14"
            />

            {/* <!-- Price --> */}
            <div className="plan-details">
              <h3 className="text-xl font-bold lowercase text-primary mb-8 duration-200">
                $49 / Per Month
              </h3>

              <ul className="space-y-4">
                <li className="flex gap-4 items-center">
                  <FaArrowRight className="text-primary" />
                  Design (UX/UI)
                </li>
                <li className="flex gap-4 items-center">
                  <FaArrowRight className="text-primary" />
                  Software Development
                </li>
                <li className="flex gap-4 items-center">
                  <FaArrowRight className="text-primary" />
                  Fashion Design (Arts)
                </li>
                <li className="flex gap-4 items-center">
                  <FaArrowRight className="text-primary" /> Development (php)
                </li>
              </ul>
              <ul className="hidden-details space-y-4 relative -mt-20 opacity-0 -z-10 duration-300">
                <li className="flex gap-4 items-center mt-4">
                  <FaArrowRight className="text-primary" />
                  Game Design & DV
                </li>
                <li className="flex gap-4 items-center">
                  <FaArrowRight className="text-primary" />
                  Computer Hardware
                </li>
              </ul>

              <button className="my-8 mx-0 btn btn-primary">
                <span>Make Plan</span>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
