import React from "react";
import { FaArrowRight } from "react-icons/fa6";

function ServiceCard({ className, ...props }) {
  return (
    <div
      className={`service-card lg:flex-row bg-blue-950 p-8 flex flex-col gap-12 duration-300 w-full ${className}`}
      {...props}
    ></div>
  );
}

ServiceCard.displayName = "ServiceCard";

const ServiceCardNumber = ({ icon, number, className, ...props }) => {
  return (
    <div
      className={`card-icon-box flex justify-center items-center rounded-full relative bg-blue-800 p-8 w-40 aspect-square m-auto duration-700 ${className}`}
      {...props}
    >
      <span className="text-7xl text-blue-950">{number}</span>
      <span className="bg-white p-6 text-primary rounded-full text-3xl absolute top-[60%] left-[60%] w-max aspect-square">
        {icon}
      </span>
    </div>
  );
};

ServiceCardNumber.displayName = "ServiceCardNumber";

const ServiceCardContent = ({
  title,
  description,
  redirectLink,
  className,
  ...props
}) => {
  return (
    <div className={`flex flex-col gap-4 ${className}`} {...props}>
      <h3 className="text-xl font-bold">{title}</h3>
      <p>{description}</p>
      <a className="btn flex p-0 items-center" href={redirectLink || "#"}>
        <span>Read More</span>
        <FaArrowRight />
      </a>
    </div>
  );
};

ServiceCardContent.displayName = "ServiceCardContent";

export { ServiceCard, ServiceCardNumber, ServiceCardContent };
