import { browserEnv } from "./env";

// TODO: @ogarciarevett implement this later
export const createFetchRequest = ({ method, body }: { method: string; body: any }) => {
  return {
    method,
    headers: {
      "Content-Type": "application/json",
      Key: browserEnv("PUBLIC_KEY"),
      Authorization: "Bearer " + browserEnv("API_TOKEN"),
    },
    body: JSON.stringify({
      body,
    }),
  };
};

export const getHeaders = () => {
  return {
    headers: {
      "Content-Type": "application/json",
      Key: browserEnv("PUBLIC_KEY"),
      Authorization: "Bearer " + browserEnv("API_TOKEN"),
    },
  };
};
