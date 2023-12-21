import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchemaSignIn } from "./ValidationSchema";
import Button from "./Button";
import { postUserInfo } from "./Api";
import { logIn } from "../store/userLoginInfoSlice";
import { useDispatch, useSelector } from "react-redux";
import { TFormDataSignIn, IUserInfoType } from "./Types";

const SignIn = () => {
  const dispatch = useDispatch();
  const { loggedIn, user } = useSelector(
    (state: IUserInfoType) => state.userLoggedIn
  );

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const onSubmit = (values: TFormDataSignIn) => {
    postUserInfo(values);
    dispatch(logIn(values.name));
  };

  return (
    <div className="flex justify-center">
      {loggedIn ? (
        <div>
          <h2 className="font-bold text-5xl">Hello, {user}!</h2>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default SignIn;
