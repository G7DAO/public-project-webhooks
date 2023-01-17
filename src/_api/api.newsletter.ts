import { getHeaders } from "../utils/request";
import { browserEnv } from "../utils/env";

const createNewsletter = () => {
  const getNewsletter = async () => {
    try {
      return null;
    } catch (err) {
      return null;
    }
  };

  const createNewsletter = async (newsletter: any) => {
    const url = browserEnv("API_URL") + "/v1/newsletter";
    return await fetch(url, {
      method: "POST",
      // @ts-ignore-next-line
      headers: getHeaders(),
      body: JSON.stringify({
        newsletter,
      }),
    });
  };

  return {
    getNewsletter,
    createNewsletter,
  };
};

export default createNewsletter();
