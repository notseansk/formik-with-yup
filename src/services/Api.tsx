import { TUserDetails, TPost } from "../pages/list/types/Types";
export const USER_URL = "https://6583382a4d1ee97c6bcdac4b.mockapi.io/users";

export const postUserInfo = async (
  dataToPost: TPost
): Promise<string | void> => {
  try {
    let res = await fetch(`${USER_URL}?email=${dataToPost.email}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    if (!res.ok) {
      await fetch(USER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToPost),
      });
    } else {
      return "user already exists";
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchUsers = async (): Promise<TUserDetails[]> => {
  let res = await fetch(USER_URL, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  let data = await res.json();
  return data;
};
