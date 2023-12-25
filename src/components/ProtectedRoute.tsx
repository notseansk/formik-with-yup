import {} from "../store/userLoginInfoSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IUserInfoType } from "./Types";

interface Props {
  Component: React.ComponentType<any>;
}
const ProtectedRoute: React.FC<Props> = (props) => {
  const { Component } = props;
  const { loggedIn, user } = useSelector(
    (state: IUserInfoType) => state.userLoggedIn
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (!loggedIn) {
      navigate("/");
    }
  }, [loggedIn]);

  return (
    <div>
      <Component user={user} />
    </div>
  );
};

export default ProtectedRoute;
