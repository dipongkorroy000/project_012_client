import React from "react";
import { Link, Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="dark:bg-mint-700 min-h-screen">
      <Link to="/" className="btn btn-ghost text-xl">
        TaskNest
      </Link>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
