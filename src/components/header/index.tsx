import { LuGithub, LuHouse, LuBriefcase, LuFolder } from "react-icons/lu";
import "./header.css";

export default function Header() {
  const linkItems = [
    {
      label: "Home",
      href: "/",
      icon: <LuHouse />,
    },
    {
      label: "Resume",
      href: "/resume",
      icon: <LuBriefcase />,
    },
    {
      label: "Projects",
      href: "/projects",
      icon: <LuFolder />,
    },
    {
      label: "Github",
      href: "#github",
      icon: <LuGithub />,
    },
  ];

  return (
    <header className="header">
      <img className="header__logo" src="/images/logo.png" alt="Logo" />
      <nav className="header__nav">
        {linkItems.map((item) => (
          <a href={item.href} className="header__nav__item" key={item.label}>
            {item.icon}
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
