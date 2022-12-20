const manageXPS = () => {

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

  const getAchievements = async () => {
    const url = process.env.REACT_APP_API_URL+'/v1/xps/achievement'
    return await fetch(url, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Key': process.env.REACT_APP_PUBLIC_KEY,
          'Authorization': 'Bearer ' + process.env.REACT_APP_API_TOKEN
        },
    });
  };

  const createAchievement = async (achievement) => {
    const url = process.env.REACT_APP_API_URL+'/v1/xps/achievement'
    return await fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Key': process.env.REACT_APP_PUBLIC_KEY,
          'Authorization': 'Bearer ' + process.env.REACT_APP_API_TOKEN
        },
      body: JSON.stringify({
        achievement
      }),
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

  return {
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

}

export default manageXPS();