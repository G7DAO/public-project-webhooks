import Web3Token from "web3-token";
import Cookies from "js-cookie";
import { ethers } from "ethers";

import user from '../_api/api.users';

const AuthMethods = () => {

  let address = ""
  let _c = process.env.REACT_APP_COOKIE_NAME || "g7-auth"

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
      console.log("Metamask is not installed");
    }
  };

  const authConnect = async () => {
    // attaching token to authorization header ... for example
    if (window.ethereum) {
      try {
        const addressArray = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        address = addressArray[0];
        const signed_msg = await Web3Token.sign(
          async (msg) => await signer.signMessage(msg),
          "1d"
        );

        // Create user via the api
        const resp = user.createUser(signed_msg);
        resp
          .then((r) => {
            if (r.status === 201 || r.status === 200) {
              return r.json();
            }
          })
          .then((_r) => {
            const { token } = _r.data;
            if (token === undefined) {
              alert("Metamask connect error");
              return;
            }

            const setToken = JSON.stringify({ token, signed_msg });
            createCookies(setToken)
          })
          .catch((e) => {
            alert("Metamask connect error");
          });
      } catch {
        //alert("Metamask connect error");
      }
    } else {
      console.log("Metamask is not installed")
    }
  };

  const authConnectClient = async () => {
    // attaching token to authorization header ... for example
    if (window.ethereum) {
      try {
        const addressArray = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        address = addressArray[0];
        const signed_msg = await Web3Token.sign(
          async (msg) => await signer.signMessage(msg),
          "1d"
        );

        // Create user via the api
        const resp = user.createUser(signed_msg);
        resp
          .then((r) => {
            if (r.status === 201 || r.status === 200) {
              return r.json();
            }
          })
          .then((_r) => {
            const { token } = _r.data;
            if (token === undefined) {
              address = ""
              alert("Metamask connect error");
              return;
            }

            const setToken = JSON.stringify({ token, signed_msg });
            createCookies(setToken)
          })
          .catch((e) => {
            address = ""
            alert("Metamask connect error");
          });
      } catch {
        //alert("Metamask connect error");
      }
    } else {
      console.log("Metamask is not installed")
    }
  };

  const getAddress = () => {
    return address;
  };

  const deleteCookies = () => {
    Cookies.remove(_c);
  };

  const getCookies = () => {
    return Cookies.get(_c);
  };

  const createCookies = (setToken) => {
    const one_hour = new Date(new Date().getTime() + 3600 * 1000); // sign token for 1 hour
    Cookies.set(_c, setToken, { expires: one_hour });
  };

  return {
    authConnect,
    createCookies,
    deleteCookies,
    getCookies,
    getAddress,
    isMetaMaskInstalled,
    metaMaskClientCheck,
  };
}

export default AuthMethods();