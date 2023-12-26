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
  password: Yup.string()
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "must contain at least 8 characters, one uppercase, one number and one special case character"
    )
    .required("password is required"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password")], "passwords must match")
    .required("Confirm Password is required"),
});
