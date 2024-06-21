import React from "react";
import {
  FaPhoneFlip,
  FaPen,
  FaUser,
  FaArrowRight,
  FaEnvelopeOpenText,
} from "react-icons/fa6";

export default function ContactUsForm() {
  return (
    <form className="grid my-16" action="">
      <div className="border-2 border-blue-700 py-6 px-8 text-white flex gap-2 items-center w-full hover:border-white">
        <input
          className="flex-1 bg-transparent outline-none border-none text-white text-xl placeholder:capitalize placeholder:font-bold placeholder:text-white"
          type="text"
          name="name"
          id=""
          placeholder="Your Name"
        />
        <FaUser className="max-w-max text-xl" />
      </div>
      <div className="border-2 border-blue-700 py-6 px-8 text-white flex gap-2 items-center w-full hover:border-white">
        <input
          className="flex-1 bg-transparent outline-none border-none text-white text-xl placeholder:capitalize placeholder:font-bold placeholder:text-white"
          type="email"
          name="email"
          id=""
          placeholder="Your Email"
        />
        <FaEnvelopeOpenText className="max-w-max text-xl" />
      </div>
      <div className="border-2 border-blue-700 py-6 px-8 text-white flex gap-2 items-center w-full hover:border-white">
        <input
          className="flex-1 bg-transparent outline-none border-none text-white text-xl placeholder:capitalize placeholder:font-bold placeholder:text-white"
          type="email"
          name="email"
          id=""
          placeholder="Your Mobile"
        />
        <FaPhoneFlip className="max-w-max text-xl" />
      </div>
      <div className="lg:col-span-3 border-2 border-blue-700 py-6 px-8 text-white flex gap-2 items-start w-full hover:border-white">
        <textarea
          className="flex-1 bg-transparent outline-none border-none text-white text-xl placeholder:capitalize placeholder:font-bold placeholder:text-white resize-none"
          name="message"
          id=""
          rows="10"
          placeholder="Your Message"
        ></textarea>
        <FaPen className="max-w-max text-xl" />
      </div>

      <button
        className="btn btn-primary my-8 mx-auto w-max lg:col-span-3"
        type="submit"
      >
        <span>Send Message</span>
        <FaArrowRight />
      </button>
    </form>
  );
}
