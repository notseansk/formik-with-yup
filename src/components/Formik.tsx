import { useFormik } from "formik";

const initialValues = {
  name: "",
  email: "",
  password: "",
};
const Formik = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return <div>Formik</div>;
};

export default Formik;
