import HomeLayout from "./components/HomeLayout";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { IUserInfoType } from "./components/Types";
import UserDashboard from "./components/UserDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
const App = () => {
  // const { loggedIn, user } = useSelector(
  //   (state: IUserInfoType) => state.userLoggedIn
  // );
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
          </Route>
          <Route
            path="/user"
            element={<ProtectedRoute Component={UserDashboard} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
