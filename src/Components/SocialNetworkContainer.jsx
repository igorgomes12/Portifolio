import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../Styles/components/socialnetworkcontainer.css";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/igor-gomes-77ba02129/" },
  { name: "github", icon: <FaGithub />, link: "https://github.com/igorgomes12/igorgomes12" },
  { name: "instagram", icon: <FaInstagram />, link: "https://www.instagram.com/igor_anjos9/" },
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.link} className="social-btn" id={network.name} key={network.icon}>
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;
