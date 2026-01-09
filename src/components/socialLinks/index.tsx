import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import "./socialLinks.css";
export default function SocialLinks() {
  const tl = gsap.timeline();
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
    tl.fromTo(".socialLinks", {
      x: -100,
      opacity: 0,
      scale: 0.8,
    }, {
      x: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power2.in",
    });
    tl.fromTo(".socialLinks__item", {
      x: -100,
      opacity: 0,
    }, {
      x: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.in",
      stagger: 0.1,
    });
  });
  return (
    <div className="socialLinks" style={{ transform: "translateX(-100%)" }}>
      <span className="socialLinks__title ">Contact me:</span>
      {socialLinks.map((link) => (
        <a
          className="socialLinks__item"
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="socialLinks__item__icon">
            {link.icon}
          </span>
        </a>
      ))}
    </div>
  );
}
