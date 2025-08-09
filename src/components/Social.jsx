import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/muhammadhuzaifayousaf" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/muhammad-huzaifa-yousaf" },
  { icon: <FaFacebook />, path: "https://www.facebook.com/muhammad.huzaifa.13979" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/muhammadhuzaifa.yousaf" },
  { icon: <FaYoutube />, path: "https://www.youtube.com/@muhammadhuzaifayousaf" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
