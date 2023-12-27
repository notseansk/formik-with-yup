import { NavLink } from "react-router-dom";

interface Props {
  user: string;
}

const UserDashboard = ({ user }: Props) => {
  return (
    <>
      <div className="flex h-screen ">
        <nav className="flex basis-60 flex-col bg-[#10101091] p-6">
          <NavLink className="mt-auto" to="/">
            -Sign out
          </NavLink>
        </nav>
        <div className="grow">
          <h2 className="font-bold text-center text-5xl py-8">
            Hello, {user}!
          </h2>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
