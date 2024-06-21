import React from "react";
import { FaBullhorn, FaPenNib, FaUmbrellaBeach } from "react-icons/fa6";

export default function ServicesCategories() {
  return (
    <section className="py-24 bg-slate-100">
      <div className="container flex flex-col lg:flex-row gap-4 gap-y-16">
        <div className="col-lg-4">
          <div className="relative z-10">
            <span className="absolute text-8xl z-[1] left-0 -top-6 font-medium text-slate-900 opacity-10">
              0 1
            </span>
          </div>
          <div className="float-left clear-both mr-2 relative z-[1] text-[2rem] text-primary">
            <FaBullhorn />
          </div>
          <div className="ml-32">
            <h4>Market Analysis</h4>
            <p></p>
            <p>
              Some advantage from but who has any right to find fault with a man
              chooses
            </p>
            <p></p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="relative z-10">
            <span className="absolute text-8xl z-[1] left-0 -top-6 font-medium text-slate-900 opacity-10">
              0 2
            </span>
          </div>
          <div className="float-left clear-both mr-2 relative z-[1] text-[2rem] text-primary">
            <FaPenNib />
          </div>
          <div className="ml-32">
            <h4>Product Design</h4>
            <p></p>
            <p>
              It is pleasure, but because those who do not know how pursue
              pleasure ration
            </p>
            <p></p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="relative z-10">
            <span className="absolute text-8xl z-[1] left-0 -top-6 font-medium text-slate-900 opacity-10">
              0 3
            </span>
          </div>
          <div className="float-left clear-both mr-2 relative z-[1] text-[2rem] text-primary">
            <i className="fa-solid fa-umbrella-beach"></i>
            <FaUmbrellaBeach />
          </div>
          <div className="ml-32">
            <h4>UX/UI Strategy</h4>
            <p></p>
            <p>
              Pain can procure hi some great pleasutrivial example, which ever
              undertakes
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
}
