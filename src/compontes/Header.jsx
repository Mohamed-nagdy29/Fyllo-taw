import React, { useEffect, useRef, useState } from "react";
import ra from "../assent/logo.svg";

const Header = () => {
  const headerRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        headerRef.current.style.background = "#0c1524";
        headerRef.current.style.padding = "20px 40px";
      } else {
        headerRef.current.style.background = "transparent";
        headerRef.current.style.padding = "80px";
      }
    });
    <i className="mdi mdi-format-header-2:"></i>;
  });
  const [links, setlinks] = useState(["Home", "Feature", "Singin"]);
  return (
    <header
      ref={headerRef}
      className="pt-[80px] fixed top-0 left-0 w-full z-50 transition-all duration-100"
    >
      <div className="container flex items-center justify-between ms-3 sm:gap-2 flex-col sm:flex-row  ">
        <a href="/">
          <img src={ra} alt="imag-log" />
        </a>
        <ul className="flex items-start gap-4">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`/${link.toLowerCase()}`}
                className="text-white opacity-[.9] hover:opacity-[1] hover:underline transition-opacity duration-300"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
