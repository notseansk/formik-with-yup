type Props = {
  user: string;
};

const UserDashboard = ({ user }: Props) => {
  return (
    <div className=" flex justify-center py-16 ">
      <h2 className="font-bold text-5xl">Hello, {user}!</h2>
    </div>
  );
};

export default UserDashboard;
