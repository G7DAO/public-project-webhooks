const authMethods = () => {

  // Created check function to see if the MetaMask extension is installed
  const isMetaMaskInstalled = () => {
    // Have to check the ethereum binding on the window object to see if it's installed
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
  };

  const metaMaskClientCheck = () => {
    // Now we check to see if MetaMask is installed
    if (!isMetaMaskInstalled()) {
      // If it isn't installed we ask the user to click to install it
      alert("Please install Metamask");
    }
  };

  return {
    isMetaMaskInstalled,
    metaMaskClientCheck,
  };

}

export default authMethods();