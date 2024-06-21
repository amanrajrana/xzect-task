import { FaBezierCurve, FaChartLine, FaLaptopCode } from "react-icons/fa6";
import {
  ServiceCard,
  ServiceCardContent,
  ServiceCardNumber,
} from "./UI/serviceCard";
import { H2, Title } from "./UI/sectionHeading";
import styles from "./style.module.css";

export default function OurServices() {
  const services = [
    {
      title: "Market Analysis",
      description:
        "We provide the best market analysis for your business growth. We provide the best market analysis for your business growth.",
      icon: <FaChartLine />,
      redirectLink: "#",
    },
    {
      title: "Product Design",
      description:
        "We provide the best product design for your business growth. We provide the best product design for your business growth.",
      icon: <FaBezierCurve />,
      redirectLink: "#",
    },
    {
      title: "UX/UI Strategy",
      description:
        "We provide the best UX/UI strategy for your business growth. We provide the best UX/UI strategy for your business growth.",
      icon: <FaLaptopCode />,
      redirectLink: "#",
    },
    {
      title: "Market Analysis",
      description:
        "We provide the best market analysis for your business growth. We provide the best market analysis for your business growth.",
      icon: <FaChartLine />,
      redirectLink: "#",
    },
  ];
  return (
    <section
      style={{
        "--bg-image":
          "url('https://livvic-jekyll.tortoizthemes.com/assets/images/service-bg.svg')",
        "--bg-color-opacity": 0,
      }}
      className={`${styles.bgImage} relative text-white py-16`}
    >
      <div className="container">
        <div className="bg-heading before:content-['Services']">
          <Title>Our Services</Title>
          <H2 className="text-center max-w-[768px]">
            Some advantage from but who has any right to
          </H2>
        </div>

        {/* <!-- cards --> */}
        <div className="grid lg:grid-cols-2 mt-16 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceCardNumber number={`0${index + 1}`} icon={service.icon} />
              <ServiceCardContent
                title={service.title}
                description={service.description}
                redirectLink={service.redirectLink}
              />
            </ServiceCard>
          ))}
        </div>
      </div>
    </section>
  );
}
