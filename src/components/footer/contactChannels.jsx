import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function ContactChannels() {
  return (
    <div className="flex gap-8 justify-between flex-wrap">
      <a
        className="text-white text-xl font-semibold flex items-center"
        href="tel:+919876543210"
      >
        <span className="bg-primary p-4 mr-4 rounded-lg">
          <FaArrowRight />
        </span>
        <span>+91 9876543210</span>
      </a>

      <a
        className="text-white text-xl font-semibold flex items-center"
        href="mailto:conatact@example.com"
      >
        <span className="bg-primary p-4 mr-4 rounded-lg">
          <FaArrowRight />
        </span>
        <span>contact@example.com</span>
      </a>

      <address className="text-white text-xl font-semibold flex items-center">
        <span className="bg-primary p-4 mr-4 rounded-lg">
          <FaArrowRight />
        </span>
        <span>contact@example.com</span>
      </address>
    </div>
  );
}
