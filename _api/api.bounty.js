const createBounty = () => {

  const getBounty = async () => {
    try {
      return null
    } catch (err) {
      return null
    }
  };

  const createBounty = async (bounty) => {
    const url = process.env.REACT_APP_API_URL+'/v1/bounty'
    return await fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Key': process.env.REACT_APP_PUBLIC_KEY,
          'Authorization': 'Bearer ' + process.env.REACT_APP_API_TOKEN,
        },
      body: JSON.stringify({
        bounty
      }),
    });
  }

  return {
    getBounty,
    createBounty,
  };

}

export default createBounty();