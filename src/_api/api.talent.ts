import { getHeaders } from "../utils/request";
import { browserEnv } from "../utils/env";

const talent = () => {
  const getTalent = async () => {
    try {
      return null;
    } catch (err) {
      return null;
    }
  };

  const createTalent = async (talent: any) => {
    const url = browserEnv("API_URL") + "/v1/talent";
    return await fetch(url, {
      method: "POST",
      // @ts-ignore-next-line
      headers: getHeaders(),
      body: JSON.stringify({
        talent,
      }),
    });
  };

  return {
    getTalent,
    createTalent,
  };
};

export default talent();
