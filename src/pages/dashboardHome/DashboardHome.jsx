import useUserRole from "../../hooks/useUserRole";
import AdminHome from "./adminHome/AdminHome";
import BuyerHome from "./buyerHome/BuyerHome";
import WorkerHome from "./workerHome/WorkerHome";

const DashboardHome = () => {
  const {role} = useUserRole();

  if (role === "admin") {
    return <AdminHome></AdminHome>;
  }

  if (role === "buyer") {
    return <BuyerHome></BuyerHome>;
  }

  if (role === "worker") {
    return <WorkerHome></WorkerHome>;
  }
};

export default DashboardHome;
