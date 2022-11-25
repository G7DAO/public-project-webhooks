const createWaitList = () => {

  const getAllTasks = async () => {
    const url = process.env.REACT_APP_API_URL+'/v1/xps/task'
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

  const getAllQuests = async () => {
    const url = process.env.REACT_APP_API_URL+'/v1/xps/quest'
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


  return {
    getAllQuests,
    createQuest,
    getAllTasks,
    createTask,
  };

}

export default createWaitList();