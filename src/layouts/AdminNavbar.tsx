import { NavLink } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <>
      <nav className="flex basis-60 flex-col bg-[#10101091] p-6">
        <div className="mb-10">
          <p className="text-2xl font-bold ">
            <span className="text-sky-400">Mind</span> Minners
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <NavLink to=".">Dashboard</NavLink>
          <NavLink to="users">Users</NavLink>
          <NavLink to="questions">Questions</NavLink>
        </div>
      </nav>
    </>
  );
};

export default AdminNavbar;
