import { FaArrowRight } from "react-icons/fa6";
import style from "./style.module.css";

export default function CreativeProject() {
  return (
    <section
      style={{
        "--bg-image":
          "url('https://livvic-jekyll.tortoizthemes.com/assets/images/cta-bg.svg')",
        "--bg-color-opacity": 0,
      }}
      className={`${style.bgImage} project-section py-24 relative w-full text-white`}
    >
      <div className="container relative">
        <div className="project-content max-w-[35rem] flex flex-col gap-8">
          <h2 className="text-3xl font-bold mb-4 capitalize leading-tight lg:text-6xl">
            Have Any Creative Project!
          </h2>
          <p>
            We denounce with righteous indignation and dislike men who are so
            beguiled and demoralized by the charms of pleasure
          </p>
          <button className="btn btn-primary max-w-max">
            <span>MEET WITH US</span>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
