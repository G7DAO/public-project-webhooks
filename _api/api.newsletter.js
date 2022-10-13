const createNewsletter = () => {

  const getNewsletter = async () => {
    try {
      return null
    } catch (err) {
      return null
    }
  };

  const createNewsletter = async (newsletter) => {
    const url = process.env.REACT_APP_API_URL+'/v1/newsletter'
    return await fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Key': process.env.REACT_APP_PUBLIC_KEY,
          'Authorization': 'Bearer ' + process.env.REACT_APP_API_TOKEN,
        },
      body: JSON.stringify({
        newsletter
      }),
    });
  }

  return {
    getNewsletter,
    createNewsletter,
  };

}

export default createNewsletter();