import {useEffect, useState} from "react";
import {CiLight} from "react-icons/ci";
import {LiaAffiliatetheme} from "react-icons/lia";
import {Link, NavLink} from "react-router-dom";

const UserNavbar = ({user}) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") return "dark";
    else if (savedTheme === "light") return "light";
    else return "light";
  });

  useEffect(() => {
    const currentTheme = theme === "light" ? "light" : "dark";
    document.querySelector("html").setAttribute("data-theme", currentTheme);

    localStorage.setItem("theme", currentTheme);
  }, [theme]);

  const handleTheme = () => setTheme(theme == "dark" ? "light" : "dark");

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

  const links = (
    <>
      <li>
        <NavLink to="/dashboard" className={({isActive}) => `px-4 py-2 rounded-md font-semibold text-lg max-md:text-sm ${isActive ? "text-white" : ""}`}>
          Dashboard
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/profile"
          className={({isActive}) =>
            `px-4 py-2 rounded-md font-semibold text-lg max-md:text-sm ${isActive ? "bg-mint-900 dark:bg-mint-600 dark:text-mint-900 text-white" : ""}`
          }
        >
          Profile
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/aboutUs"
          end
          className={({isActive}) =>
            `px-4 py-2 rounded-md font-semibold text-lg max-md:text-sm ${isActive ? "bg-mint-900 dark:bg-mint-600 dark:text-mint-900 text-white" : ""}`
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          end
          className={({isActive}) =>
            `px-4 py-2 rounded-md font-semibold text-lg max-md:text-sm ${isActive ? "bg-mint-900 dark:bg-mint-600 dark:text-mint-900 text-white" : ""}`
          }
        >
          Contact
        </NavLink>
      </li>

      <li>
        <a
          href="https://github.com/dipongkorroy000"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 link underline-offset-2 font-semibold text-lg max-md:text-sm"
        >
          Join as Developer
        </a>
      </li>
    </>
  );

  return (
    <div
      className={`fixed top-0 z-50 w-full transition-transform duration-500 bg-mint-600 dark:bg-mint-900 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="navbar w-4/6 max-xl:w-5/6 mx-auto px-0 relative">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 max-md:h-4 max-md:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>

            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 shadow">
              {links}
            </ul>
          </div>
          <Link to="/" className="text-3xl font-bold max-md:text-lg p-0">
            TaskNest
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-0">{links}</ul>
        </div>

        <div className="navbar-end gap-5 items-center">
          <div
            className={`tooltip tooltip-bottom mr-3 mt-2 ${theme == "dark" ? "before:bg-gray-800 before:text-white" : "before:bg-gray-100 before:text-black"}`}
            data-tip={theme ? "Switch to Dark Theme" : "Switch to Light Theme"}
          >
            <button onClick={handleTheme} className="cursor-pointer">
              {theme === "dark" ? <LiaAffiliatetheme size={26} /> : <CiLight size={26} />}
            </button>
          </div>

          {user?.photoURL ? (
            <img className="w-10 h-10 max-md:w-8 max-md:h-8 rounded-full p-0" alt="Profile Picture" src={user?.photoURL} />
          ) : (
            <img
              className="w-10 h-10 rounded-full max-md:w-8 max-md:h-8"
              alt="Profile Picture"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6KK6VjSXL_KiLy8TgTSDm2oLwtFwMiZK-wg&s"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;
