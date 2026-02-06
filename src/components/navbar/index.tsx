import { LuHouse, LuBriefcase, LuFolder, LuUser, LuSearch } from "react-icons/lu";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./navbar.css";

export default function Navbar() {
  const tl = gsap.timeline();

    const linkItems = [
        {
          label: "Home",
          href: "#home",
          icon: <LuHouse />,
        },
        {
          label: "Bio",
          href: "#bio",
          icon: <LuUser />,
        },
        {
          label: "SEO",
          href: "#seo",
          icon: <LuSearch />,
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
      ];
      useGSAP(() => {
        tl.fromTo(".navbar", {
          opacity: 0,
          x: 100,
          scale: 0.8,
        }, {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power2.in",
        });
        tl.fromTo(".navbar__item", {
          x: 100,
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