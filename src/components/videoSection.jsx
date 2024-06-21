import { FaArrowRight, FaPlay } from "react-icons/fa6";
import styles from "./style.module.css";

export default function VideoSection() {
  return (
    <section
      className={`${styles.videoSection} video-section relative w-full h-full min-h-max mb-40`}
    >
      <div className="container grid gap-8 items-center min-h-max relative z-10 lg:grid-cols-2">
        <div className="video-play-btn flex justify-center items-center w-28 aspect-square bg-transparent rounded-full text-pink-700 text-4xl cursor-pointer border border-white my-16 mx-auto">
          <FaPlay />
        </div>

        {/* <!-- CARD  --> */}
        <div className="flex flex-col gap-8 relative -bottom-40 bg-blue-950 p-8 max-w-[28rem] text-white py-12 text-4xl video-section-title">
          <h2 className="section-heading text-white">
            Watch Our Latest Videos
          </h2>
          <p className="text-base text-slate-300">
            Latin professor at Hampden-Sydney College in Virginia, looked up one
            of the more obscure Latin words, consectetur, from a Lorem Ipsum
            passage, and going through the cites of the
          </p>

          <a href="#" className="btn">
            <span>Learn More</span>
            <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
