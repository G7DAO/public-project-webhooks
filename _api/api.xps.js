const manageXPS = () => {
  const getAchievements = async () => {
    const url = process.env.REACT_APP_API_URL+'/v1/xps/achievements'
    return await fetch(url, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Key': process.env.REACT_APP_PUBLIC_KEY,
          'Authorization': 'Bearer ' + process.env.REACT_APP_API_TOKEN
        },
    });
  };

  const getAllLevels = async () => {
    const url = process.env.REACT_APP_API_URL+'/v1/xps/levels'
    return await fetch(url, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Key': process.env.REACT_APP_PUBLIC_KEY,
          'Authorization': 'Bearer ' + process.env.REACT_APP_API_TOKEN
        },
    });
  };

  const getAllIntegrations = async () => {
    const url = process.env.REACT_APP_API_URL+'/v1/xps/manager/integrations'
    return await fetch(url, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Key': process.env.REACT_APP_PUBLIC_KEY,
          'Authorization': 'Bearer ' + process.env.REACT_APP_API_TOKEN
        },
    });
  };

  const getAttributes = async () => {
    const url = process.env.REACT_APP_API_URL+'/v1/xps/manager/attributes'
    return await fetch(url, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Key': process.env.REACT_APP_PUBLIC_KEY,
          'Authorization': 'Bearer ' + process.env.REACT_APP_API_TOKEN
        },
    });
  };

  const getAllQuests = async () => {
    const url = process.env.REACT_APP_API_URL+'/v1/xps/quests'
    return await fetch(url, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Key': process.env.REACT_APP_PUBLIC_KEY,
          'Authorization': 'Bearer ' + process.env.REACT_APP_API_TOKEN
        },
    });
  };

  const getAllPaths = async () => {
    const url = process.env.REACT_APP_API_URL+'/v1/xps/paths'
    return await fetch(url, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Key': process.env.REACT_APP_PUBLIC_KEY,
          'Authorization': 'Bearer ' + process.env.REACT_APP_API_TOKEN
        },
    });
  };

  const getAllTasks = async () => {
    const url = process.env.REACT_APP_API_URL+'/v1/xps/tasks'
    return await fetch(url, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Key': process.env.REACT_APP_PUBLIC_KEY,
          'Authorization': 'Bearer ' + process.env.REACT_APP_API_TOKEN
        },
    });
  };

  const getWaitlistEntryByAddress = async (address) => {
    const url = process.env.REACT_APP_API_URL+'/v1/xps/waitlist/entry/'+address
    return await fetch(url, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Key': process.env.REACT_APP_PUBLIC_KEY,
          'Authorization': 'Bearer ' + process.env.REACT_APP_API_TOKEN
        },
    });
  };

  const deleteIntegration = async (uuid) => {
    const url = process.env.REACT_APP_API_URL+'/v1/xps/manager/integration/'+uuid
    return await fetch(url, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json',
          'Key': process.env.REACT_APP_PUBLIC_KEY,
          'Authorization': 'Bearer ' + process.env.REACT_APP_API_TOKEN
        }
    });
  }

  const deleteWorkerJob = async (uuid) => {
    const url = process.env.REACT_APP_API_URL+'/v1/xps/job/'+uuid
    return await fetch(url, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json',
          'Key': process.env.REACT_APP_PUBLIC_KEY,
          'Authorization': 'Bearer ' + process.env.REACT_APP_API_TOKEN
        }
    });
  }

  const deleteTask = async (uuid) => {
    const url = process.env.REACT_APP_API_URL+'/v1/xps/task/'+uuid
    return await fetch(url, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json',
          'Key': process.env.REACT_APP_PUBLIC_KEY,
          'Authorization': 'Bearer ' + process.env.REACT_APP_API_TOKEN
        }
    });
  }

  const deleteQuest = async (uuid) => {
    const url = process.env.REACT_APP_API_URL+'/v1/xps/quest/'+uuid
    return await fetch(url, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json',
          'Key': process.env.REACT_APP_PUBLIC_KEY,
          'Authorization': 'Bearer ' + process.env.REACT_APP_API_TOKEN
        }
    });
  }

  const deletePath = async (uuid) => {
    const url = process.env.REACT_APP_API_URL+'/v1/xps/path/'+uuid
    return await fetch(url, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json',
          'Key': process.env.REACT_APP_PUBLIC_KEY,
          'Authorization': 'Bearer ' + process.env.REACT_APP_API_TOKEN
        }
    });
  }

  const deleteLevel = async (uuid) => {
    const url = process.env.REACT_APP_API_URL+'/v1/xps/level/'+uuid
    return await fetch(url, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json',
          'Key': process.env.REACT_APP_PUBLIC_KEY,
          'Authorization': 'Bearer ' + process.env.REACT_APP_API_TOKEN
        }
    });
  }

  const deleteAchievement = async (uuid) => {
    const url = process.env.REACT_APP_API_URL+'/v1/xps/achievement/'+uuid
    return await fetch(url, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json',
          'Key': process.env.REACT_APP_PUBLIC_KEY,
          'Authorization': 'Bearer ' + process.env.REACT_APP_API_TOKEN
        }
    });
  }

  const deleteAttribute = async (uuid) => {
    const url = process.env.REACT_APP_API_URL+'/v1/xps/manager/attribute/'+uuid
    return await fetch(url, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json',
          'Key': process.env.REACT_APP_PUBLIC_KEY,
          'Authorization': 'Bearer ' + process.env.REACT_APP_API_TOKEN
        }
    });
  }

  const createAchievement = async (data) => {
    const url = process.env.REACT_APP_API_URL+'/v1/xps/achievement'
    return await fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Key': process.env.REACT_APP_PUBLIC_KEY,
          'Authorization': 'Bearer ' + process.env.REACT_APP_API_TOKEN
        },
      body: JSON.stringify({
        data
      }),
    });
  }

  const createAttribute = async (data) => {
    const url = process.env.REACT_APP_API_URL+'/v1/xps/manager/attribute'
    return await fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Key': process.env.REACT_APP_PUBLIC_KEY,
          'Authorization': 'Bearer ' + process.env.REACT_APP_API_TOKEN
        },
      body: JSON.stringify({
        data
      }),
    });
  }

  const createIntegration = async (data) => {
    const url = process.env.REACT_APP_API_URL+'/v1/xps/manager/integration'
    return await fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Key': process.env.REACT_APP_PUBLIC_KEY,
          'Authorization': 'Bearer ' + process.env.REACT_APP_API_TOKEN
        },
      body: JSON.stringify({
        data
      }),
    });
  }

  const createLevel = async (level) => {
    const url = process.env.REACT_APP_API_URL+'/v1/xps/level'
    return await fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Key': process.env.REACT_APP_PUBLIC_KEY,
          'Authorization': 'Bearer ' + process.env.REACT_APP_API_TOKEN
        },
      body: JSON.stringify({
        level
      }),
    });
  }

  const createPath = async (path) => {
    const url = process.env.REACT_APP_API_URL+'/v1/xps/path'
    return await fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Key': process.env.REACT_APP_PUBLIC_KEY,
          'Authorization': 'Bearer ' + process.env.REACT_APP_API_TOKEN
        },
      body: JSON.stringify({
        path
      }),
    });
  }

  const createQuest = async (quest) => {
    const url = process.env.REACT_APP_API_URL+'/v1/xps/quest'
    return await fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Key': process.env.REACT_APP_PUBLIC_KEY,
          'Authorization': 'Bearer ' + process.env.REACT_APP_API_TOKEN
        },
      body: JSON.stringify({
        quest
      }),
    });
  }

  const createTask = async (task) => {
    const url = process.env.REACT_APP_API_URL+'/v1/xps/task'
    return await fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Key': process.env.REACT_APP_PUBLIC_KEY,
          'Authorization': 'Bearer ' + process.env.REACT_APP_API_TOKEN
        },
      body: JSON.stringify({
        task
      }),
    });
  }

  const createWaitListEntry = async (data) => {
    const url = process.env.REACT_APP_API_URL+'/v1/xps/waitlist/entry'
    return await fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Key': process.env.REACT_APP_PUBLIC_KEY,
          'Authorization': 'Bearer ' + process.env.REACT_APP_API_TOKEN
        },
      body: JSON.stringify({
        data
      }),
    });
  }

  const createWorkerJob = async (data) => {
    const url = process.env.REACT_APP_API_URL+'/v1/xps/job'
    return await fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Key': process.env.REACT_APP_PUBLIC_KEY,
          'Authorization': 'Bearer ' + process.env.REACT_APP_API_TOKEN
        },
      body: JSON.stringify({
        data
      }),
    });
  }

  const updateAttribute = async (data, uuid) => {
    const url = process.env.REACT_APP_API_URL+'/v1/xps/manager/attribute/'+uuid
    return await fetch(url, {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
          'Key': process.env.REACT_APP_PUBLIC_KEY,
          'Authorization': 'Bearer ' + process.env.REACT_APP_API_TOKEN
        },
      body: JSON.stringify({
        data
      }),
    });
  }

  const updateAchievement = async (data, uuid) => {
    const url = process.env.REACT_APP_API_URL+'/v1/xps/achievement/'+uuid
    return await fetch(url, {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
          'Key': process.env.REACT_APP_PUBLIC_KEY,
          'Authorization': 'Bearer ' + process.env.REACT_APP_API_TOKEN
        },
      body: JSON.stringify({
        data
      }),
    });
  }

  const xpsAuth = async (signed_msg) => {
    const url = process.env.REACT_APP_API_URL+'/v1/xps/auth/user'
    return await fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Key': process.env.REACT_APP_PUBLIC_KEY,
          'Authorization': 'Bearer ' + process.env.REACT_APP_API_TOKEN
        },
      body: JSON.stringify({
        signed_msg,
      }),
    });
  }

  return {
    getWaitlistEntryByAddress,
    getAchievements,
    getAllIntegrations,
    getAllLevels,
    getAllPaths,
    getAllTasks,
    getAllQuests,
    getAttributes,
    createAchievement,
    createAttribute,
    createIntegration,
    createLevel,
    createPath,
    createQuest,
    createTask,
    createWaitListEntry,
    createWorkerJob,
    updateAchievement,
    updateAttribute,
    deleteIntegration,
    deleteWorkerJob,
    deleteAchievement,
    deleteAttribute,
    deleteLevel,
    deletePath,
    deleteQuest,
    deleteTask,
    xpsAuth,
  };

}

export default manageXPS();