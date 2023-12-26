import { Outlet } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

const AdminLayout = () => {
  return (
    <div className="flex h-screen">
      <AdminNavbar />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
