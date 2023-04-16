import React from "react";
import Card from "./Card";
import { useState } from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaWallet } from "react-icons/fa";
import { SiMarketo, SiBitcoinsv } from "react-icons/si";
import { NavLink } from "react-router-dom";
import { AppConfig, UserSession, showConnect } from "@stacks/connect";
import { StacksTestnet, StacksMainnet } from "@stacks/network";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const appConfig = new AppConfig(
    ["store_write", "publish_data"],
    "https://bitcomp.netlify.app/",
    {
      name: "BitComp",
      icon: "https://bitcomp.netlify.app//icon.png",
    }
  );
  const userSession = new UserSession({ appConfig });
  var resolve = function (cardinalAddress, ordinalAddress) {};

  if (!userSession.isUserSignedIn()) {
    showConnect({
      userSession,
      network: StacksTestnet,
      appDetails: {
        name: "BitComp",
        icon: window.location.origin + "/app-icon.png",
      },
      onFinish: () => {
        resolve(
          userSession.loadUserData().profile.btcAddress.p2wpkh.testnet,
          userSession.loadUserData().profile.btcAddress.p2tr.testnet
        );
      },
      onCancel: () => {
        // handle if user closed connection prompt
      },
    });
  } else {
    const cardinalAddress =
      userSession.loadUserData().profile.btcAddress.p2wpkh.testnet;
    const ordinalAddress =
      userSession.loadUserData().profile.btcAddress.p2tr.testnet;
      resolve(cardinalAddress, ordinalAddress);
  }

  const handleConnectWallet = async () => {
    try {
      const userData = await userSession.loadUserData();

      if (!userSession.isUserSignedIn()) {
        userSession.showConnect({
          network: StacksTestnet,
          appDetails: appConfig.userAppConfig,
          onFinish: () => {
            const btcAddress = userData.profile.btcAddress;
            const cardinalAddress = btcAddress.p2wpkh.testnet;
            const ordinalAddress = btcAddress.p2tr.testnet;
            resolve(cardinalAddress, ordinalAddress);
          },
          onCancel: () => {
            console.log("User closed the Connect modal");
          },
        });
      } else {
        const btcAddress = userData.profile.btcAddress;
        const cardinalAddress = btcAddress.p2wpkh.testnet;
        const ordinalAddress = btcAddress.p2tr.testnet;
        resolve(cardinalAddress, ordinalAddress);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Card>
        <div className="text-white flex justify-between items-center ">
          <h5 className="flex font-Urbanist text-lg tracking-wide font-extrabold md:text-3xl">
            Bit <span className="text-orange ">Comp</span>
          </h5>
          <div className="mt-2 font-Urbanist text-lg font-semibold ">
            <ul className="md:flex hidden ">
              <NavLink to="/">
                <li className="flex mx-2 hover:bg-grey px-2 rounded-2xl active:animate-ping">
                  <button className="flex">
                    <span className="mt-1">
                      <MdSpaceDashboard />
                    </span>{" "}
                    Dashboard
                  </button>
                </li>
              </NavLink>
              <NavLink to="/market">
                <li className="flex mx-2 hover:bg-grey px-2 rounded-2xl active:animate-ping ">
                  <button className="flex active:underline">
                    <span className="mt-1">
                      <SiMarketo />
                    </span>{" "}
                    Market
                  </button>
                </li>
              </NavLink>
            </ul>
          </div>
          <div className="flex mt-2 items-center font-Urbanist">
            <div className="flex items-center mx-3">
              <SiBitcoinsv className=" text-orange mx-2" />
              <p className="text-lg font-Urbanist font-extrabold tracking-wider">
                BTC
              </p>
              <p className="text-lg text-gray3 mx-1">Bitcoin</p>
            </div>
            <div className="mx-3 hidden md:flex">
              <button
                className="bg-grey font-bold tracking-wide rounded-2xl border border-orange p-3"
                onClick={handleConnectWallet}
              >
                Connect Wallet
              </button>
            </div>
          </div>
          <div className="font-bold text-xl text-gray3 flex md:hidden mt-1 items-center">
            <button className="px-1" onClick={handleConnectWallet}>
              <FaWallet />
            </button>

            <div>
              <button
                className="px-1"
                onClick={() => setToggle((prev) => !prev)}
              >
                <AiOutlineMenu />
              </button>
              {toggle ? (
                <Card>
                  <div className="mt-2 font-Urbanist text-lg font-semibold justify-center items-center bg-grey bg-opacity-90 flex overflow-x-hidden overflow-y-auto fixed transition-all  ease ease-in duration-3000 inset-0 z-0">
                    <button
                      className="absolute top-1 right-1 w-20 "
                      onClick={() => setToggle((prev) => !prev)}
                    >
                      <AiOutlineClose className="w-10 h-full" />
                    </button>
                    <ul className=" text-2xl text-center  ">
                      <NavLink to="/">
                        <li className="flex mx-2 hover:bg-grey px-2 rounded-2xl active:animate-ping">
                          <button className="flex">
                            <span className="mt-1">
                              <MdSpaceDashboard />
                            </span>{" "}
                            Dashboard
                          </button>
                        </li>
                      </NavLink>
                      <hr />
                      <NavLink to="/market">
                        <li className="flex mx-2 hover:bg-grey px-2 rounded-2xl active:animate-ping ">
                          <button className="flex active:underline">
                            <span className="mt-1">
                              <SiMarketo />
                            </span>{" "}
                            Market
                          </button>
                        </li>
                      </NavLink>
                    </ul>
                  </div>
                </Card>
              ) : null}
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Navbar;
