import { USER_URL } from "../services/Api";
interface Props {
  name: string;
  email: string;
  id: string;
  getUsers: () => void;
}

const AdminUserComponent = ({ name, email, id, getUsers }: Props) => {
  const handleDelete = async () => {
    try {
      let res = await fetch(`${USER_URL}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      getUsers();
      console.log(res);
    } catch (error) {
      console.log("Error deleting user account - ", error);
    }
  };
  return (
    <>
      <div className="grid grid-cols-4 m-6">
        <p className="text-sm">{id}</p>
        <p className="text-sm">{name}</p>
        <p className="text-sm">{email}</p>
        <button
          onClick={() => {
            handleDelete();
          }}
          className="text-red-400"
        >
          Delete User Account
        </button>
      </div>
    </>
  );
};

export default AdminUserComponent;
