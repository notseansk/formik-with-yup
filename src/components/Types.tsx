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

// export { TFormDataSignIn, TFormDataSignUp };
