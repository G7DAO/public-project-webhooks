const createAid = () => {

  const getAid = async () => {
    try {
      return null
    } catch (err) {
      return null
    }
  };

  const createAid = async (aid) => {
    const url = process.env.REACT_APP_API_URL+'/v1/aid'
    return await fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Key': process.env.REACT_APP_PUBLIC_KEY,
          'Authorization': 'Bearer ' + process.env.REACT_APP_API_TOKEN,
        },
      body: JSON.stringify({
        aid
      }),
    });
  }

  return {
    getAid,
    createAid,
  };

}

export default createAid();