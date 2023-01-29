const fileManagement = () => {

  const cfImageSign = async () => {
    const url = process.env.REACT_APP_API_URL+'/v1/xps/utility/image/cf-image-sign'
    return await fetch(url, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Key': process.env.REACT_APP_PUBLIC_KEY,
          'Authorization': 'Bearer ' + process.env.REACT_APP_API_TOKEN,
        },
    });
  }

  return {
    cfImageSign,
  };

}

export default fileManagement();