import {
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaLocationDot,
  FaPhoneFlip,
  FaXTwitter,
} from "react-icons/fa6";

export default function Header() {
  return (
    <header className="container flex justify-end lg:justify-between p-4 font-semibold border-b border-blue-700">
      {/* <!-- CONTACT INFO --> */}
      <div className="hidden lg:grid lg:grid-cols-[repeat(3,auto)] items-center gap-x-4 lg:flex-1 max-w-3xl justify-between">
        <div className="flex items-center">
          <FaPhoneFlip className="mr-3" />
          <span>+012 (345) 77 999</span>
        </div>

        <div className="container flex items-center">
          <FaLocationDot className="mr-3" />
          <span>55 New Sodor Road, USA</span>
        </div>

        <div className="container flex items-center">
          <FaClock className="mr-3" />
          <span>Sun - Friday : 10 am - 08 pm</span>
        </div>
      </div>

      {/* <!-- SOCIAL MEDIA ICONS --> */}
      <div className="flex social-icons items-center gap-x-5 w-max text-xl">
        <FaFacebookF />
        <FaXTwitter />
        <FaInstagram />
      </div>
    </header>
  );
}
