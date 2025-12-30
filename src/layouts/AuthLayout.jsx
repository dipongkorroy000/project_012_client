import {useEffect} from "react";
import {Link, Outlet} from "react-router";

const AuthLayout = () => {
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    const currentTheme = theme === "light" ? "light" : "dark";
    document.querySelector("html").setAttribute("data-theme", currentTheme);

    localStorage.setItem("theme", currentTheme);
  }, []);

  return (
    <div className="min-h-screen">
      <Link to="/" className="cursor-pointer text-bold text-3xl p-5">
        TaskNest
      </Link>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
