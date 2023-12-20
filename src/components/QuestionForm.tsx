import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "./Button";
type Props = {
  page: string;
};

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

const validationSchema = Yup.object({
  name: Yup.string().required("Required from yup validation"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Required from yup validation"),
  password: Yup.string().required("Required from yup validation"),
});
const Form = ({ page }: Props) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <div>
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
          autoComplete="current-username"
          {...formik.getFieldProps("name")}
        />
        {formik.touched.name && formik.errors.name && (
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
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
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
          autoComplete="current-password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password && (
          <p className="text-[0.8rem] mb-3 text-red-600">
            {formik.errors.password}
          </p>
        )}
        {page === "sign up" && (
          <>
            <label htmlFor="password__input">Re-type Password: </label>
            <input
              className="rounded-xl m-2 p-2  min-w-[240px]"
              type="password"
              id="password__input--re"
              name="password--re"
              autoComplete="current-password"
            />
          </>
        )}
        <Button page={page} />
      </form>
    </div>
  );
};

export default Form;
