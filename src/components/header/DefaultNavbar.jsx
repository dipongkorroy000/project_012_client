import React, {useEffect, useState} from "react";
import {LiaAffiliatetheme} from "react-icons/lia";
import {CiLight} from "react-icons/ci";
import {Link} from "react-router";

const DefaultNavbar = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme == "dark") return "dark";
    else if (savedTheme == "light") return "light";
    else return "light";
  });

  useEffect(() => {
    const currentTheme = theme === "light" ? "light" : "dark";
    document.querySelector("html").setAttribute("data-theme", currentTheme);
    localStorage.setItem("theme", currentTheme);
  }, [theme]);

  const handleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 100) setShowNavbar(false); // scrolling down
      else setShowNavbar(true); // scrolling up

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`fixed top-0 z-50 w-full transition-transform duration-500 bg-mint-600 dark:bg-mint-900 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}>
      <nav className="navbar w-4/6 max-xl:w-5/6 mx-auto px-0 justify-between">
        <div className="">
          <Link to="/" className="text-3xl font-bold max-md:text-sm">
            TaskNest
          </Link>
        </div>

        <div className="flex justify-between items-center">
          <div
            className={`tooltip tooltip-bottom mt-2 ${theme === "dark" ? "before:bg-gray-100 before:text-black" : "before:bg-gray-800 before:text-white"}`}
            data-tip={theme === "dark" ? "Switch to Light Theme" : "Switch to Dark Theme"}
          >
            <button onClick={handleTheme} className="cursor-pointer">
              {theme === "light" ? <LiaAffiliatetheme size={26} /> : <CiLight size={26} />}
            </button>
          </div>
          <ul className="menu menu-horizontal max-md:text-sm px-1">
            <li>
              <Link className="hover:underline dark:text-white text-sm" to="/signIn">
                Login
              </Link>
            </li>
          </ul>
          <a
            target="_blank"
            className="px-5 py-3 max-md:px-1 max-md:text-sm max-md:py-0.5 btn text-mint-900 dark:bg-mint-600 border-none dark:text-btn-primary"
            href={"https://github.com/dipongkorroy000"}
          >
            Join as Developer
          </a>
        </div>
      </nav>
    </div>
  );
};

export default DefaultNavbar;
