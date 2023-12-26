import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchemaSignUp } from "../validation/ValidationSchema";
import Button from "../components/Button";
import { TFormDataSignUp } from "./list/types/Types";
import { postUserInfo } from "../services/Api";
import { useState } from "react";

const SignUp = () => {
  // const dispatch = useDispatch();
  const [errorSignUp, setErrorSignUp] = useState("");
  const initialValues = {
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };

  const onSubmit = (values: TFormDataSignUp) => {
    const checkAndPost = async () => {
      let res = await postUserInfo({
        name: values.name,
        email: values.email,
        password: values.password,
      });
      if (res) {
        setErrorSignUp(res);
      } else {
        setErrorSignUp("");
      }
    };
    checkAndPost();
  };

  return (
    <div className="flex justify-center">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchemaSignUp}
      >
        <Form className="flex flex-col  bg-[#1b1b1bc9] px-14 py-10 rounded-2xl w-[28%]">
          <label htmlFor="name__field">username: </label>
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

          <label className="mt-2" htmlFor="password__Field--confirm">
            Confirm Password:{" "}
          </label>
          <Field
            className="rounded-xl m-2 p-2  min-w-[240px]"
            type="password"
            id="password__field--confirm"
            autoComplete="current-password"
            name="passwordConfirm"
          />
          <ErrorMessage
            className="text-red-500 text-xs"
            component="div"
            name="passwordConfirm"
          />

          <Button page="sign up" />

          {errorSignUp && (
            <h3 className="text-red-500 bg-[#0e0e0e6f] rounded-lg px-4 py-2 mt-4 text-center">
              Email already exists
            </h3>
          )}
        </Form>
      </Formik>
    </div>
  );
};

export default SignUp;
