import { LuHouse, LuBriefcase, LuFolder, LuGithub } from "react-icons/lu";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./navbar.css";

export default function Navbar() {
    const linkItems = [
        {
          label: "Home",
          href: "#home",
          icon: <LuHouse />,
        },
        {
          label: "Resume",
          href: "#resume",
          icon: <LuBriefcase />,
        },
        {
          label: "Projects",
          href: "#projects",
          icon: <LuFolder />,
        },
        {
          label: "Github",
          href: "#github",
          icon: <LuGithub />,
        },
      ];
      useGSAP(() => {
        gsap.to(".navbar", {
          opacity: 1,
          x: "0",
          duration: 1,
          ease: "power2.inOut",
          delay: 0.5,
        });
      });
    return (
        <nav className="navbar" style={{ transform: "translateX(100%)" }}>
            {linkItems.map((item) => (
                <a href={item.href} className="navbar__item" key={item.label}>
                    {item.icon}
                    {item.label}
                </a>
            ))}
        </nav>
    )
}