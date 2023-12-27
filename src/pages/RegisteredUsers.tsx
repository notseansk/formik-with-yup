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
    <section className="bg-[#1b1b1bc9] flex-grow p-6 ">
      <h2 className="text-center font-semibold text-4xl mb-8">
        List of Registered Users
      </h2>
      <div className="bg-[#313131c9] rounded-xl w-full min-h-[90%] p-8">
        <div className="grid grid-cols-4 p-3 ">
          <p className="text-lg">User ID</p>
          <p className="text-lg">Users</p>
          <p className="text-lg">Email</p>
          <button>Action</button>
        </div>
        <div className="rounded-lg bg-[#1b1b1b95] p-3">
          {users ? (
            users.map((oneUserDetail) => (
              <AdminUserComponent
                key={oneUserDetail.id}
                name={oneUserDetail.name}
                email={oneUserDetail.email}
                id={oneUserDetail.id}
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
    </section>
  );
};

export default RegisteredUsers;
