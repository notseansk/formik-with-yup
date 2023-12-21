import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchemaSignUp } from "./ValidationSchema";
import Button from "./Button";
import { TFormDataSignUp } from "./Types";

const SignUp = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };

  const onSubmit = (values: TFormDataSignUp) => {
    console.log(values);
  };

  return (
    <div className="flex justify-center">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchemaSignUp}
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

          <label htmlFor="password__Field--confirm">Confirm Password: </label>
          <Field
            className="rounded-xl m-2 p-2  min-w-[240px]"
            type="password"
            id="password__field--confirm"
            autoComplete="current-password"
            name="passwordConfirm"
          />
          <ErrorMessage name="passwordConfirm" />

          <Button page="sign up" />
        </Form>
      </Formik>
    </div>
  );
};

export default SignUp;
