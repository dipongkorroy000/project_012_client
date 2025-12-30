import {useState} from "react";
import Footer from "../pages/dashboard/footer/Footer";
import {Link, NavLink, Outlet, useNavigate} from "react-router-dom";
import {FiHome, FiLogOut, FiPackage, FiSettings, FiPlusCircle, FiClipboard, FiCreditCard, FiShoppingCart, FiList, FiSend, FiDollarSign} from "react-icons/fi";
import useAuth from "../hooks/useAuth";
import {useQuery} from "@tanstack/react-query";
import PageSpinner from "../components/Spinner/PageSpinner";
import useAxiosSecure from "../hooks/useAxiosSecure";
import {useEffect} from "react";

const DashboardLayout = () => {
  const [theme, _] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "dark"; // default to dark
  });

  useEffect(() => {
    const currentTheme = theme === "light" ? "light" : "dark";
    document.querySelector("html").setAttribute("data-theme", currentTheme);

    localStorage.setItem("theme", currentTheme);
  }, [theme]);

  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const {user, loading: load, logout} = useAuth();

  const {data = {}, loading} = useQuery({
    queryKey: ["user", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`/userFind?email=${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  if (loading || load) return <PageSpinner></PageSpinner>;

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      <div className="drawer lg:drawer-open">
        {/* Sidebar */}
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className={`drawer-side`}>
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className={`menu p-4 w-72 min-h-full text-base-content`}>
            <h2 className="p-5">
              <Link to="/" className="text-xl font-bold mb-4 max-md:text-lg">
                TaskNest
              </Link>
            </h2>

            <li>
              <NavLink
                to="/dashboard"
                end
                className={({isActive}) =>
                  `flex items-center max-md:text-sm gap-2 px-4 py-2 rounded-md font-bold ${isActive ? "bg-mint-900 text-white" : "hover:bg-base-200"}`
                }
              >
                <FiHome className="text-lg" /> Home
              </NavLink>
            </li>

            {/* admin */}
            {data.role === "admin" && (
              <>
                <li>
                  <NavLink
                    to="/dashboard/manageTask"
                    className={({isActive}) =>
                      `flex items-center max-md:text-sm gap-2 px-4 py-2 rounded-md font-bold ${isActive ? "bg-mint-900 text-white" : "hover:bg-base-200"}`
                    }
                  >
                    <FiPackage className="text-lg" /> ManageTask
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/manageUsers"
                    className={({isActive}) =>
                      `flex items-center max-md:text-sm gap-2 px-4 py-2 rounded-md font-bold ${isActive ? "bg-mint-900 text-white" : "hover:bg-base-200"}`
                    }
                  >
                    <FiSettings className="text-lg" /> Manage Users
                  </NavLink>
                </li>
              </>
            )}

            {/* buyer */}
            {data.role === "buyer" && (
              <>
                <li>
                  <NavLink
                    to="/dashboard/addNewTask"
                    className={({isActive}) =>
                      `flex items-center max-md:text-sm gap-2 px-4 py-2 rounded-md font-bold ${isActive ? "bg-mint-900 text-white" : "hover:bg-base-200"}`
                    }
                  >
                    <FiPlusCircle className="text-lg" /> Add Task
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/myTasks"
                    className={({isActive}) =>
                      `flex items-center max-md:text-sm gap-2 px-4 py-2 rounded-md font-bold ${isActive ? "bg-mint-900 text-white" : "hover:bg-base-200"}`
                    }
                  >
                    <FiClipboard className="text-lg" /> My Tasks
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/paymentHistory"
                    className={({isActive}) =>
                      `flex items-center max-md:text-sm gap-2 px-4 py-2 rounded-md font-bold ${isActive ? "bg-mint-900 text-white" : "hover:bg-base-200"}`
                    }
                  >
                    <FiCreditCard className="text-lg" /> Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/purchaseCoin"
                    className={({isActive}) =>
                      `flex items-center max-md:text-sm gap-2 px-4 py-2 rounded-md font-bold ${isActive ? "bg-mint-900 text-white" : "hover:bg-base-200"}`
                    }
                  >
                    <FiShoppingCart className="text-lg" /> Purchase Coin
                  </NavLink>
                </li>
              </>
            )}

            {/* worker */}
            {data.role === "worker" && (
              <>
                <li>
                  <NavLink
                    to="/dashboard/taskList"
                    className={({isActive}) =>
                      `flex items-center max-md:text-sm gap-2 px-4 py-2 rounded-md font-bold ${isActive ? "bg-mint-900 text-white" : "hover:bg-base-200"}`
                    }
                  >
                    <FiList className="text-lg" /> Task List
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/mySubmissions"
                    className={({isActive}) =>
                      `flex items-center max-md:text-sm gap-2 px-4 py-2 rounded-md font-bold ${isActive ? "bg-mint-900 text-white" : "hover:bg-base-200"}`
                    }
                  >
                    <FiSend className="text-lg" /> My Submissions
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/withdrawals"
                    className={({isActive}) =>
                      `flex items-center max-md:text-sm gap-2 px-4 py-2 rounded-md font-bold ${isActive ? "bg-mint-900 text-white" : "hover:bg-base-200"}`
                    }
                  >
                    <FiDollarSign className="text-lg" /> Withdrawals
                  </NavLink>
                </li>
              </>
            )}

            <li>
              <button onClick={handleLogout} className="flex items-center max-md:text-sm gap-2 px-4 py-2 rounded-md font-bold hover:bg-red-600">
                <FiLogOut className="text-lg" /> Logout
              </button>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="drawer-content flex flex-col">
          {/* Top Navbar */}
          <div className={`navbar px-4 shadow-sm ${theme === "dark" && "bg-mint-900"}`}>
            <div className="flex-1">
              <label htmlFor="dashboard-drawer" className="btn btn-ghost lg:hidden">
                ☰
              </label>
              <span className="font-bold text-xl max-md:text-lg">Dashboard</span>
            </div>

            <div className="flex flex-col items-end space-y-1 px-12 py-1">
              <div className="flex items-center space-x-2 justify-center">
                <h2 className="text-2xl max-md:text-xl flex-1">{data?.coin || 0}</h2>
                <span className="flex-1">|</span>

                {user?.photoURL ? (
                  <img src={user?.photoURL} className="w-7 h-7 content-center rounded-2xl" alt="profile pic" />
                ) : (
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6KK6VjSXL_KiLy8TgTSDm2oLwtFwMiZK-wg&s"
                    className="w-7 content-center h-7 rounded-2xl"
                    alt="profile pic"
                  />
                )}
              </div>

              {/* Second row: userRole | userName */}
              <div className="flex space-x-2 justify-end text-gray-500 text-sm">
                <h2>{data?.role || "loading..."}</h2>
                <span>|</span>
                <h2>{user?.displayName || "Loading..."}</h2>
              </div>
            </div>
          </div>

          {/* Page Content */}
          <div className={`min-h-[calc(100vh-284px)] p-6`}>
            <Outlet></Outlet>
          </div>

          <div>
            <Footer></Footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
