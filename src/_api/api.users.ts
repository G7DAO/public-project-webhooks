import { getHeaders } from "../utils/request";
import { browserEnv } from "../utils/env";

const createUsers = () => {
  const getUsers = async () => {
    try {
      return null;
    } catch (err) {
      return null;
    }
  };

  const createUser = async (signed_msg: any) => {
    const url = browserEnv("API_URL") + "/v1/user";
    return await fetch(url, {
      method: "POST",
      // @ts-ignore-next-line
      headers: getHeaders(),
      body: JSON.stringify({
        signed_msg,
      }),
    });
  };

  return {
    getUsers,
    createUser,
  };
};

export default createUsers();
