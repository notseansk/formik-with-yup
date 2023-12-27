import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchemaSignIn } from "../validation/ValidationSchema";
import Button from "../components/Button";
// import { postUserInfo } from "../services/Api";
import { logIn } from "../store/userLoginInfoSlice";
import { useDispatch } from "react-redux";
import { TFormDataSignIn } from "./list/types/Types";
import { useNavigate } from "react-router-dom";
import { checkLoginCredentials } from "../services/Api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { loggedIn, user } = useSelector(
  //   (state: IUserInfoType) => state.userLoggedIn
  // );

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const onSubmit = (values: TFormDataSignIn) => {
    const temp = async () => {
      let res = await checkLoginCredentials(values);
      if (res === undefined) {
        dispatch(logIn(values));
        navigate("/user");
      } else {
        console.log(res);
        toast.error(res);
      }
    };
    temp();
  };

  return (
    <div className="flex justify-center">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchemaSignIn}
      >
        <Form className="flex flex-col  bg-[#1b1b1bc9] px-14 py-10 rounded-2xl">
          <label className="mt-2" htmlFor="name__field">
            username:{" "}
          </label>
          <Field
            className="rounded-xl m-2 p-2  min-w-[240px]"
            type="text"
            id="name__field"
            autoComplete="current-username"
            name="name"
          />
          <ErrorMessage
            className="text-red-500 text-xs"
            component="div"
            name="name"
          />

          <label className="mt-2" htmlFor="email__field">
            Email:{" "}
          </label>
          <Field
            className="rounded-xl m-2 p-2  min-w-[240px]"
            type="text"
            id="email__field"
            name="email"
          />
          <ErrorMessage
            className="text-red-500 text-xs"
            component="div"
            name="email"
          />

          <label className="mt-2" htmlFor="password__field">
            Password:{" "}
          </label>
          <Field
            className="rounded-xl m-2 p-2  min-w-[240px]"
            type="password"
            id="password__field"
            autoComplete="current-password"
            name="password"
          />
          <ErrorMessage
            className="text-red-500 text-xs"
            component="div"
            name="password"
          />

          <Button page="sign in" />
        </Form>
      </Formik>
      <ToastContainer />
    </div>
  );
};

export default SignIn;
