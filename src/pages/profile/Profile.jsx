import {FaUserCircle, FaEnvelope, FaIdBadge, FaUserTag} from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import {Link, useNavigate} from "react-router";
import PageSpinner from "../../components/Spinner/PageSpinner";
import {useQuery} from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import {format} from "date-fns";

function Profile() {
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const {user, logout, loading: load} = useAuth();

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

  function capitalizeWords(name) {
    return (
      name
        ?.split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ") || ""
    );
  }

  const userName = capitalizeWords(user?.displayName);

  return (
    <section className="max-md:p-5 pt-32 pb-20">
      <div className="max-w-md mx-auto rounded-xl shadow-sm overflow-hidden p-6 animate-fadeIn border max-md:p-5 dark:border-gray-700 border-gray-200">
        <div className="flex items-center space-x-4">
          <img
            src={user?.photoURL || "https://laser360clinic.com/wp-content/uploads/2020/08/user-image.jpg"}
            alt="User"
            className="w-24 h-24 max-md:w-20 max-md:h-20 rounded-full object-cover shadow-sm"
          />
          <div>
            <h2 className="text-2xl max-md:text-xl font-bold">{user ? userName : "loading..."}</h2>
            <p className="text-sm flex items-center gap-2">
              <FaUserTag size={18} /> {data.role}
            </p>
          </div>

          <Link
            to={"/profileUpdate"}
            className="text-sm font-semibold underline ml-16 mb-10 cursor-pointer tooltip tooltip-bottom before:rounded before:px-2 before:py-1"
            data-tip="Update Profile"
          >
            Edit
          </Link>
        </div>

        <div className="mt-6 space-y-5 max-md:space-y-3 text-xl max-md:text-sm">
          <p className="flex items-center gap-2">
            <FaEnvelope size={18} /> {user ? user.email : "Loading..."}
          </p>

          {data?.number && (
            <p className="flex items-center gap-2">
              <FaIdBadge size={18} /> {data?.number}
            </p>
          )}

          <p className="flex items-center gap-2">
            <FaUserCircle size={18} /> Joined: {data?.created_at ? format(new Date(data.created_at), "PPPp") : "Loading"}
          </p>

          <p className="flex items-center gap-2">
            <FaUserCircle size={18} /> last Log In: {data?.last_log_in ? format(new Date(data.last_log_in), "PPPp") : "Unknown"}
          </p>

          <button
            onClick={handleLogout}
            href="#_"
            className="relative max-md:px-3 max-md:py-1.5 px-5 py-2 overflow-hidden font-medium border rounded-xl shadow-inner group cursor-pointer border-mint-600 dark:border-mint-900"
          >
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 ease">Logout</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Profile;
