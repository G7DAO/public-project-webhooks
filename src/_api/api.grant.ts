import { getHeaders } from "../utils/request";
import { browserEnv } from "../utils/env";

const createGrant = () => {
  const getGrant = async () => {
    try {
      return null;
    } catch (err) {
      return null;
    }
  };

  const createGrant = async (grant: any) => {
    const url = browserEnv("API_URL") + "/v1/grant";
    return await fetch(url, {
      method: "POST",
      // @ts-ignore-next-line
      headers: getHeaders(),
      body: JSON.stringify({
        grant,
      }),
    });
  };

  return {
    getGrant,
    createGrant,
  };
};

export default createGrant();
