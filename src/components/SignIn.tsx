import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchemaSignIn } from "./ValidationSchema";
import Button from "./Button";
// import { postUserInfo } from "../services/Api";
import { logIn } from "../store/userLoginInfoSlice";
import { useDispatch } from "react-redux";
import { TFormDataSignIn } from "./Types";
import { useNavigate } from "react-router-dom";

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
    dispatch(logIn(values));
    navigate("/user");
  };

  return (
    <div className="flex justify-center">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchemaSignIn}
      >
        <Form className="flex flex-col  bg-[#1b1b1bc9] p-14 rounded-2xl">
          <label htmlFor="name__field">username: </label>
          <Field
            className="rounded-xl m-2 p-2  min-w-[240px]"
            type="text"
            id="name__field"
            autoComplete="current-username"
            name="name"
          />
          <ErrorMessage name="name" />

          <label htmlFor="email__field">Email: </label>
          <Field
            className="rounded-xl m-2 p-2  min-w-[240px]"
            type="text"
            id="email__field"
            name="email"
          />
          <ErrorMessage name="email" />

          <label htmlFor="password__field">Password: </label>
          <Field
            className="rounded-xl m-2 p-2  min-w-[240px]"
            type="password"
            id="password__field"
            autoComplete="current-password"
            name="password"
          />
          <ErrorMessage name="password" />

          <Button page="sign in" />
        </Form>
      </Formik>
    </div>
  );
};

export default SignIn;
