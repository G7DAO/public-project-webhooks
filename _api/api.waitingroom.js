const createWaitingRoom = () => {

  const queueAdd = async (str) => {
    const url = process.env.REACT_APP_QUEUE_ADD_URL
    return await fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'text/plain',
          'Key': process.env.REACT_APP_PUBLIC_KEY,
          'Authorization': 'Bearer ' + process.env.REACT_APP_API_TOKEN
        },
      body: str,
    });
  }

  const queueStatus = async (id) => {
    const url = process.env.REACT_APP_QUEUE_STATUS_URL+`/position?id=${id}`
    return await fetch(url, {
      method: 'GET',
      headers: {
          'Key': process.env.REACT_APP_PUBLIC_KEY,
          'Authorization': 'Bearer ' + process.env.REACT_APP_API_TOKEN
        },
    });
  };

  const queueReset = async (id) => {
    const url = process.env.REACT_APP_QUEUE_RESET_URL+`/reset?id=${id}`
    return await fetch(url, {
      method: 'GET',
      headers: {
          'Key': process.env.REACT_APP_PUBLIC_KEY,
          'Authorization': 'Bearer ' + process.env.REACT_APP_API_TOKEN
        },
    });
  };

  const queueRemove = async (id) => {
    const url = process.env.REACT_APP_QUEUE_REMOVE_URL+`/remove?id=${id}`
    return await fetch(url, {
      method: 'GET',
      headers: {
          'Key': process.env.REACT_APP_PUBLIC_KEY,
          'Authorization': 'Bearer ' + process.env.REACT_APP_API_TOKEN
        },
    });
  }

  return {
    queueAdd,
    queueStatus,
    queueReset,
    queueRemove,
  };

}

export default createWaitingRoom();