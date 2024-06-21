import {
  FaDiscord,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

export default function FooterSocialMedia() {
  const socialMedia = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      link: "https://facebook.com",
    },
    {
      name: "Twitter",
      icon: <FaXTwitter />,
      link: "https://twitter.com",
    },
    {
      name: "Discord",
      icon: <FaDiscord />,
      link: "https://discord.com",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://instagram.com",
    },
  ];
  return (
    <div className="footer-social-icons flex gap-4">
      {socialMedia.map((social, index) => (
        <a
          key={index}
          href={social.link}
          className="bg-blue-950 rounded-full aspect-square flex items-center justify-center duration-300 w-12 h-12 hover:bg-primary"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}
