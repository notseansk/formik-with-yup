import { useEffect, useState } from "react";
import { fetchUsers } from "../services/Api";
import AdminUserComponent from "../components/AdminUserComponent";
import { TUserDetails } from "./list/types/Types";
const RegisteredUsers = () => {
  const [users, setUsers] = useState<TUserDetails[]>();
  const getUsers = async () => {
    try {
      let res = await fetchUsers();
      if (res) {
        setUsers(res);
      }
    } catch (error) {
      console.log(
        "There was some error fetching users in admin panel - ",
        error
      );
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <section className="bg-[#1b1b1bc9] h-screen flex flex-col flex-grow p-6 ">
      <h2 className="text-center font-semibold text-4xl mb-8">
        List of Registered Users
      </h2>
      <div className="bg-[#313131c9] h-[90%] rounded-xl w-full  p-8 ">
        <div className="rounded-lg bg-[#1b1b1b95] p-3 h-[100%] flex flex-col  ">
          <div className="grid grid-cols-5 p-3 border-b-2 border-sky-600 ">
            <p className="text-lg">User ID</p>
            <p className="text-lg">Users</p>
            <p className="text-lg">Email</p>
            <p className="text-lg">Password</p>
            <button>Action</button>
          </div>
          <div className="overflow-y-scroll">
            {users ? (
              users.map((oneUserDetail) => (
                <AdminUserComponent
                  key={oneUserDetail.id}
                  name={oneUserDetail.name}
                  email={oneUserDetail.email}
                  id={oneUserDetail.id}
                  password={oneUserDetail.password}
                  getUsers={getUsers}
                />
              ))
            ) : (
              <h5 className="text-3xl text-sky-400 text-center my-8">
                fetching users please wait...
              </h5>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisteredUsers;
