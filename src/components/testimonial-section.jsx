import { FaQuoteRight } from "react-icons/fa6";

export default function TestimonialSection() {
  return (
    <section className="w-full">
      <div className="container grid gap-2 lg:grid-cols-2">
        <img
          src="https://livvic-jekyll.tortoizthemes.com/assets/images/testimonial/1.png"
          alt="testimonial"
          className="w-[inherit] max-h-[34rem] object-contain pr-0 pb-2 lg:pb-0 lg:pr-8"
        />

        <div className="flex flex-col justify-center gap-8">
          <div className="text-5xl flex text-primary items-center gap-4">
            <span className="block w-16 h-1 bg-primary"></span>
            <FaQuoteRight />
          </div>
          <p className="text-xl font-semibold text-slate-700 lg:text-2xl">
            Avoids pleaser itself because pleas because those who do not know
            how to pursue pleasure rationally enoch que that are extrema painful
            again is there anyone who loves pursues or desires to obtain pain of
            itself.
          </p>

          <div className="flex gap-4 items-center">
            <img src="/images/testimonial/author.png" alt="author" />
            <div>
              <h4 className="text-xl font-bold">John Doe</h4>
              <p className="text-sm font-semibold text-primary uppercase">
                CEO, Apple Inc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
