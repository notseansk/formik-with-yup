import { Formik, Form as Formm, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "./Button";
type Props = {
  page: string;
};

type TFormData = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const onSubmit = (values: TFormData) => {
  console.log(values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required from yup validation"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Required from yup validation"),
  password: Yup.string().required("Required from yup validation"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});
const Form = ({ page }: Props) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Formm className="flex flex-col  bg-[#1b1b1bc9] p-14 rounded-2xl">
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
        <label htmlFor="password__Field">Password: </label>
        <Field
          className="rounded-xl m-2 p-2  min-w-[240px]"
          type="password"
          id="password__Field"
          autoComplete="current-password"
          name="password"
        />
        <ErrorMessage name="password" />
        {page === "sign up" && (
          <>
            <label htmlFor="password__Field">Confirm Password: </label>
            <Field
              className="rounded-xl m-2 p-2  min-w-[240px]"
              type="password"
              id="password__Field--re"
              autoComplete="current-password"
              name="passwordConfirm"
            />
            <ErrorMessage name="passwordConfirm" />
          </>
        )}
        <Button page={page} />
      </Formm>
    </Formik>
  );
};

export default Form;
