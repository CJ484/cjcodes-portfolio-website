import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import "./socialLinks.css";
export default function SocialLinks() {
  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/carloscoreas",
      icon: <LuGithub />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/carloscoreas/",
      icon: <LuLinkedin />,
    },
    {
      label: "Email",
      href: "mailto:carloscoreas@gmail.com",
      icon: <LuMail />,
    },
  ];

  useGSAP(() => {
    gsap.fromTo(".socialLinksSection__links", {
      x: -100,
      opacity: 0,
      scale: 0.8,
    }, {
      x: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power2.inOut",
      delay: 0.25,
    });
  });
  return (
    <div className="socialLinksSection__links" style={{ transform: "translateX(-100%)" }}>
      <span className="socialLinksSection__links__title">Contact me:</span>
      {socialLinks.map((link) => (
        <a
          className="socialLinksSection__links__item"
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="socialLinksSection__links__item__icon">
            {link.icon}
          </span>
        </a>
      ))}
    </div>
  );
}
