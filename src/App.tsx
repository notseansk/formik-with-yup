import HomeLayout from "./layouts/HomeLayout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDashboard from "./pages/UserDashboard";
import ProtectedRoute from "./layouts/ProtectedRoute";
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/AdminDashboard";
import RegisteredUsers from "./pages/RegisteredUsers";
import AdminQuestionsList from "./pages/AdminQuestionsList";
const App = () => {
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
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="users" element={<RegisteredUsers />} />
            <Route path="questions" element={<AdminQuestionsList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
