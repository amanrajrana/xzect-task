import AboutUs from "@/components/about-us";
import CompanyFact from "@/components/company-fact";
import CreativeProject from "@/components/creativeProjects";
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero";
import NewsAndBlogSection from "@/components/newsBlogSection";
import OurServices from "@/components/our-services";
import Portfolio from "@/components/portfolio";
import PriceCardsSection from "@/components/price-cards-section";
import ServicesCategories from "@/components/servicesCategories";
import TeamSection from "@/components/team";
import TestimonialSection from "@/components/testimonial-section";
import VideoSection from "@/components/videoSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesCategories />
      <AboutUs />
      <OurServices />
      <Portfolio />
      <CreativeProject />
      <TeamSection />
      <VideoSection />
      <CompanyFact />
      <TestimonialSection />
      <PriceCardsSection />
      <NewsAndBlogSection />
      <Footer />
    </>
  );
}
