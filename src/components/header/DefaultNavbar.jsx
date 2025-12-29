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

  const handleTheme = () => setTheme(theme === "dark" ? "light": "dark");

  return (
    <div className="shadow-sm dark:bg-mint-900">
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
              <Link className="hover:underline dark:text-blue-400 text-sm" to="/signIn">
                Login
              </Link>
            </li>
          </ul>
          <a
            target="_blank"
            className=" px-5 py-3 max-md:px-1 max-md:text-sm max-md:py-0.5 btn dark:bg-btn-primary border-none hover:text-btn-primary hover:bg-white"
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
