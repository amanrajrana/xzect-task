import ContactUsForm from "./contact-us-form";
import ContactChannels from "./contactChannels";
import { H2, Title } from "../UI/sectionHeading";
import styles from "../style.module.css";
import FooterSocialMedia from "./footerSocialMedia";

export default function Footer() {
  return (
    <footer
      style={{
        "--bg-image":
          "url('https://livvic-jekyll.tortoizthemes.com/assets/images/footer-bg.svg')",
        "--bg-color-opacity": 0,
      }}
      className={`${styles.bgImage} w-full relative mt-24 pt-24`}
    >
      <div className="container">
        <div className="bg-heading">
          <Title>Message Us</Title>
          <H2 className="section-heading max-w-lg">
            Some advantage from but who has any right to
          </H2>
        </div>

        <ContactUsForm />

        <ContactChannels />
      </div>

      <div className="footer-info border-t border-blue-700 mt-8 py-8">
        <div className="container flex flex-wrap-reverse justify-center md:justify-between text-white items-center gap-8">
          <div>
            <p>&copy; 2022 Livvic. All Rights Reserved</p>
          </div>
          <FooterSocialMedia />
        </div>
      </div>
    </footer>
  );
}
