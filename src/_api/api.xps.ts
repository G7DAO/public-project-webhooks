import { getHeaders } from "../utils/request";
import { browserEnv } from "../utils/env";

const manageXPS = () => {
  const getAllIntegrations = async () => {
    const url = browserEnv("API_URL") + "/v1/xps/manager/integrations";
    return await fetch(url, {
      method: "GET",
      // @ts-ignore-next-line
      headers: getHeaders(),
    });
  };

  const createIntegration = async (data: any) => {
    const url = browserEnv("API_URL") + "/v1/xps/manager/integration";
    return await fetch(url, {
      method: "POST",
      // @ts-ignore-next-line
      headers: getHeaders(),
      body: JSON.stringify({
        data,
      }),
    });
  };

  const deleteIntegration = async (uuid: string) => {
    const url = browserEnv("API_URL") + "/v1/xps/manager/integration/" + uuid;
    return await fetch(url, {
      method: "DELETE",
      // @ts-ignore-next-line
      headers: getHeaders(),
    });
  };

  const createWorkerJob = async (data: any) => {
    const url = browserEnv("API_URL") + "/v1/xps/job";
    return await fetch(url, {
      method: "POST",
      // @ts-ignore-next-line
      headers: getHeaders(),
      body: JSON.stringify({
        data,
      }),
    });
  };

  const deleteWorkerJob = async (uuid: string) => {
    const url = browserEnv("API_URL") + "/v1/xps/job/" + uuid;
    return await fetch(url, {
      method: "DELETE",
      // @ts-ignore-next-line
      headers: getHeaders(),
    });
  };

  const getAllTasks = async () => {
    const url = browserEnv("API_URL") + "/v1/xps/tasks";
    return await fetch(url, {
      method: "GET",
      // @ts-ignore-next-line
      headers: getHeaders(),
    });
  };

  const createTask = async (task: any) => {
    const url = browserEnv("API_URL") + "/v1/xps/task";
    return await fetch(url, {
      method: "POST",
      // @ts-ignore-next-line
      headers: getHeaders(),
      body: JSON.stringify({
        task,
      }),
    });
  };

  const deleteTask = async (uuid: string) => {
    const url = browserEnv("API_URL") + "/v1/xps/task/" + uuid;
    return await fetch(url, {
      method: "DELETE",
      // @ts-ignore-next-line
      headers: getHeaders(),
    });
  };

  const getAllQuests = async () => {
    const url = browserEnv("API_URL") + "/v1/xps/quests";
    return await fetch(url, {
      method: "GET",
      // @ts-ignore-next-line
      headers: getHeaders(),
    });
  };

  const createQuest = async (quest: any) => {
    const url = browserEnv("API_URL") + "/v1/xps/quest";
    return await fetch(url, {
      method: "POST",
      // @ts-ignore-next-line
      headers: getHeaders(),
      body: JSON.stringify({
        quest,
      }),
    });
  };

  const deleteQuest = async (uuid: string) => {
    const url = browserEnv("API_URL") + "/v1/xps/quest/" + uuid;
    return await fetch(url, {
      method: "DELETE",
      // @ts-ignore-next-line
      headers: getHeaders(),
    });
  };

  const getAllPaths = async () => {
    const url = browserEnv("API_URL") + "/v1/xps/paths";
    return await fetch(url, {
      method: "GET",
      // @ts-ignore-next-line
      headers: getHeaders(),
    });
  };

  const createPath = async (path: any) => {
    const url = browserEnv("API_URL") + "/v1/xps/path";
    return await fetch(url, {
      method: "POST",
      // @ts-ignore-next-line
      headers: getHeaders(),
      body: JSON.stringify({
        path,
      }),
    });
  };

  const deletePath = async (uuid: string) => {
    const url = browserEnv("API_URL") + "/v1/xps/path/" + uuid;
    return await fetch(url, {
      method: "DELETE",
      // @ts-ignore-next-line
      headers: getHeaders(),
    });
  };

  const getAllLevels = async () => {
    const url = browserEnv("API_URL") + "/v1/xps/levels";
    return await fetch(url, {
      method: "GET",
      // @ts-ignore-next-line
      headers: getHeaders(),
    });
  };

  const createLevel = async (level: any) => {
    const url = browserEnv("API_URL") + "/v1/xps/level";
    return await fetch(url, {
      method: "POST",
      // @ts-ignore-next-line
      headers: getHeaders(),
      body: JSON.stringify({
        level,
      }),
    });
  };

  const deleteLevel = async (uuid: string) => {
    const url = browserEnv("API_URL") + "/v1/xps/level/" + uuid;
    return await fetch(url, {
      method: "DELETE",
      // @ts-ignore-next-line
      headers: getHeaders(),
    });
  };

  const getAchievements = async () => {
    const url = browserEnv("API_URL") + "/v1/xps/achievement";
    return await fetch(url, {
      method: "GET",
      // @ts-ignore-next-line
      headers: getHeaders(),
    });
  };

  const createAchievement = async (achievement: any) => {
    const url = browserEnv("API_URL") + "/v1/xps/achievement";
    return await fetch(url, {
      method: "POST",
      // @ts-ignore-next-line
      headers: getHeaders(),
      body: JSON.stringify({
        achievement,
      }),
    });
  };

  const deleteAchievement = async (uuid: string) => {
    const url = browserEnv("API_URL") + "/v1/xps/achievement/" + uuid;
    return await fetch(url, {
      method: "DELETE",
      // @ts-ignore-next-line
      headers: getHeaders(),
    });
  };

  return {
    getAllIntegrations,
    createIntegration,
    deleteIntegration,
    createWorkerJob,
    deleteWorkerJob,
    getAchievements,
    createAchievement,
    deleteAchievement,
    getAllLevels,
    createLevel,
    deleteLevel,
    getAllPaths,
    createPath,
    deletePath,
    getAllQuests,
    createQuest,
    deleteQuest,
    getAllTasks,
    createTask,
    deleteTask,
  };
};

export default manageXPS();
