import { browserEnv } from "../utils/env";
import { getHeaders } from "../utils/request";

const createAid = () => {
  const getAid = async () => {
    try {
      return null;
    } catch (err) {
      return null;
    }
  };

  const createAid = async (aid: any) => {
    const url = browserEnv("API_URL") + "/v1/aid";
    return await fetch(url, {
      method: "POST",
      //@ts-ignore-next-line
      headers: getHeaders(),
      body: JSON.stringify({
        aid,
      }),
    });
  };

  return {
    getAid,
    createAid,
  };
};

export default createAid();
