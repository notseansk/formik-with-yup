import * as Yup from "yup";

export const validationSchemaSignIn = Yup.object({
  name: Yup.string().required("username is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("email is required"),
  password: Yup.string().required("password is required"),
});
export const validationSchemaSignUp = Yup.object({
  name: Yup.string().required("username is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("email is required"),
  password: Yup.string().required("password is required"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password")], "passwords must match")
    .required("Confirm Password is required"),
});
