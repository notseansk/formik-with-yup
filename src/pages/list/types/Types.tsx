export type TFormDataSignIn = {
  name: string;
  email: string;
  password: string;
};
export type TFormDataSignUp = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};
export type IUserInfoType = {
  userLoggedIn: {
    loggedIn: boolean;
    user: string;
  };
};
export type TUserDetails = {
  name: string;
  email: string;
  password: string;
  id: string;
};
export type TPost = {
  name: string;
  email: string;
  password: string;
};
// export { TFormDataSignIn, TFormDataSignUp };
