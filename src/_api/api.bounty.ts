import { browserEnv } from "../utils/env";
import { getHeaders } from "../utils/request";

const createBounty = () => {
  const getBounty = async () => {
    try {
      return null;
    } catch (err) {
      return null;
    }
  };

  const createBounty = async (bounty: any) => {
    const url = browserEnv("API_URL") + "/v1/bounty";
    return await fetch(url, {
      method: "POST",
      //@ts-ignore-next-line
      headers: getHeaders(),
      body: JSON.stringify({
        bounty,
      }),
    });
  };

  return {
    getBounty,
    createBounty,
  };
};

export default createBounty();
