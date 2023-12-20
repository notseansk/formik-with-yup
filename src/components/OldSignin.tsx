import Button from "./Button";
import { useFormik } from "formik";
import * as Yup from "yup";

type TFormData = {
  name: string;
  email: string;
  password: string;
};
const initialValues = {
  name: "",
  email: "",
  password: "",
};
const onSubmit = (values: TFormData) => {
  console.log(values);
};

// const validate = (values: TFormData) => {
//   let errors = {
//     name: "",
//     email: "",
//     password: "",
//   };
//   if (!values.name) {
//     errors.name = "username is required";
//   }
//   if (!values.email) {
//     errors.email = "email is required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email format";
//   }
//   if (!values.password) {
//     errors.password = "password is required";
//   }
//   return errors;
// };

const validationSchema = Yup.object({
  name: Yup.string().required("Required from yup validation"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Required from yup validation"),
  password: Yup.string().required("Required from yup validation"),
});

const SignIn = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div className="flex justify-center">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col  bg-[#1b1b1bc9] p-14 rounded-2xl"
      >
        <label htmlFor="name__input">username: </label>
        <input
          className="rounded-xl m-2 p-2  min-w-[240px]"
          type="text"
          id="name__input"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && (
          <p className="text-[0.8rem] mb-3 text-red-600">
            {formik.errors.name}
          </p>
        )}
        <label htmlFor="email__input">Email: </label>
        <input
          className="rounded-xl m-2 p-2  min-w-[240px]"
          type="text"
          id="email__input"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.name && (
          <p className="text-[0.8rem] mb-3 text-red-600">
            {formik.errors.email}
          </p>
        )}
        <label htmlFor="password__input">Password: </label>
        <input
          className="rounded-xl m-2 p-2  min-w-[240px]"
          type="password"
          id="password__input"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.errors.name && (
          <p className="text-[0.8rem] mb-3 text-red-600">
            {formik.errors.password}
          </p>
        )}
        <Button page="sign in" />
      </form>
    </div>
  );
};

export default SignIn;
