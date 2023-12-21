const USER_URL = "https://6583382a4d1ee97c6bcdac4b.mockapi.io/users";

export const postUserInfo = async (dataToPost: any) => {
  try {
    await fetch(USER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToPost),
    });
  } catch (error) {
    console.log(error);
  }
};
