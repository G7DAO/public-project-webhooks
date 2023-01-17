import { getHeaders } from "../utils/request";
import { browserEnv } from "../utils/env";

const createWaitList = () => {
  const getWaitListEntries = async () => {
    try {
      return null;
    } catch (err) {
      return null;
    }
  };

  const createWaitListEntry = async (waitlist: any) => {
    const url = browserEnv("API_URL") + "/v1/waitlist";
    return await fetch(url, {
      method: "POST",
      // @ts-ignore-next-line
      headers: getHeaders(),
      body: JSON.stringify({
        waitlist,
      }),
    });
  };

  const validateWaitListCode = async (code: any) => {
    const url = browserEnv("API_URL") + "/v1/waitlist/validate";
    return await fetch(url, {
      method: "POST",
      // @ts-ignore-next-line
      headers: getHeaders(),
      body: JSON.stringify({
        code,
      }),
    });
  };

  return {
    getWaitListEntries,
    createWaitListEntry,
    validateWaitListCode,
  };
};

export default createWaitList();
