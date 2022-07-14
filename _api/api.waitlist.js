const createWaitList = () => {

  const getWaitListEntries = async () => {
    try {
      return null
    } catch (err) {
      return null
    }
  };

  const createWaitListEntry = async (waitlist) => {
    const url = process.env.REACT_APP_API_URL+'/v1/waitlist'
    return await fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Key': process.env.REACT_APP_PUBLIC_KEY,
          'Authorization': 'Bearer ' + process.env.REACT_APP_API_TOKEN
        },
      body: JSON.stringify({
        waitlist
      }),
    });
  }

  return {
    getWaitListEntries,
    createWaitListEntry,
  };

}

export default createWaitList();