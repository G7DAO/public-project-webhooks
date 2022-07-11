const talent = () => {

  const getTalent = async () => {
    try {
      return null
    } catch (err) {
      return null
    }
  };

  const createTalent = async (talent) => {
    const url = process.env.REACT_APP_API_URL+'/v1/talent'
    return await fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Key': process.env.REACT_APP_PUBLIC_KEY,
          'Authorization': 'Bearer ' + process.env.REACT_APP_API_TOKEN,
        },
      body: JSON.stringify({
        talent
      }),
    })
  }

  return {
    getTalent,
    createTalent,
  };

}

export default talent();