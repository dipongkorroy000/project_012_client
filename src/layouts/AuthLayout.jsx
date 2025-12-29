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
      <Link to="/" className="btn btn-ghost text-xl">
        TaskNest
      </Link>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
