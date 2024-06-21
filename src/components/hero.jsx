import { FaArrowDown, FaArrowRight, FaPlay } from "react-icons/fa6";
import Nav from "./nav";
import Header from "./header";
import styles from "./style.module.css";

export default function Hero() {
  return (
    <div
      style={{
        "--bg-image": "url('/images/background/meeting-594091_1280.jpg')",
      }}
      className={`${styles.bgImage} text-white w-full relative pb-16`}
    >
      <Header />

      {/* <!-- NAVIGATION --> */}
      <Nav />

      {/* <!-- HERO content  --> */}
      <div className="container flex flex-col justify-center gap-y-8 items-start min-h-[600px]">
        <h1 className="flex flex-col gap-y-4">
          <span className="text-xl pl-8 border-l-4 border-primary lg:text-2xl">
            Start New Business <br />
            With Our New Experience and
          </span>
          <span className="text-6xl font-bold mt-2 lg:text-7xl lg:mt-4">
            Creative Minds
          </span>
        </h1>
        <ul className="flex gap-x-8 flex-wrap mb-4 list-disc pl-4">
          <li>Design</li>
          <li>Marketing</li>
          <li>Development</li>
        </ul>

        <div className="flex">
          <button className="btn btn-primary">
            <span> Get Started </span>
            <span>
              <FaArrowRight />
            </span>
          </button>
          <button className="bg-blue-900 aspect-square flex justify-center items-center text-xl ml-5 py-6 px-8 rounded-full hover:bg-blue-950 duration-300">
            <FaPlay />
          </button>
        </div>
      </div>

      {/* <!-- Download button  --> */}
      <div className="container">
        <div
          className={`w-20 h-24 flex justify-center items-center border-4 border-blue-700 rounded-3xl mx-auto relative cursor-pointer`}
        >
          <FaArrowDown
            className={`text-3xl text-blue-700 ${styles.downloadAnimation}`}
          />
        </div>
      </div>
    </div>
  );
}
