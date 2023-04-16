import React from "react";
import Card from "./Card";
import QRCodeModal from "@walletconnect/qrcode-modal";
import { MdSpaceDashboard } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaWallet } from "react-icons/fa";
import { SiMarketo, SiBitcoinsv } from "react-icons/si";
import { NavLink } from "react-router-dom";
import { AppConfig, UserSession, showConnect } from "@stacks/connect";
import { StacksTestnet, StacksMainnet } from "@stacks/network";
import { useState, useEffect } from "react";
import Client from "@walletconnect/sign-client";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [client, setClient] = useState(undefined);
  const [chain, setChain] = useState(undefined);
  const [session, setSession] = useState(undefined);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  

  useEffect(() => {
    const f = async () => {
      const c = await Client.init({
        logger: "debug",
        relayUrl: "wss://relay.walletconnect.com",
        projectId: "03b16cac090931be3c6c2d4d11287b05", // register at WalletConnect and create one for yourself - https://cloud.walletconnect.com/
        // you need to have a valid ID or the app will not start
        metadata: {
          name: "BitComp",
          description: "Bitcoin borrowing and lending app",
          url: "https://bitcomp.netlify.app/",
          icons: ["https://avatars.githubusercontent.com/u/37784886"],
        },
      });

      setClient(c);
    };

    if (client === undefined) {
      f();
    }
  }, [client]);

  const chains = ["stacks:1", "stacks:2147483648"];

  const handleConnect = async (chain) => {
    setChain(undefined);

    const { uri, approval } = await client.connect({
        pairingTopic: undefined,
        requiredNamespaces: {
            "stacks":{
            "methods":[
                'stacks_signMessage',
                'stacks_stxTransfer',
                'stacks_contractCall',
                'stacks_contractDeploy',
            ],
            "chains":[
                chain
            ],
            "events":[]
            }
        },
    });

    if (uri) {
    QRCodeModal.open(uri, () => {
        console.log("QR Code Modal closed");
    });
    }

    const session = await approval();
    setSession(session);
    setChain(chain);

    QRCodeModal.close();
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
          {
            !session && (
            <div>
                {chains.map((c, idx) => {
                    return (<div className="mx-3 hidden md:flex" key={`chain-${idx}`}>{c}  <button className="bg-grey font-bold tracking-wide rounded-2xl border border-orange p-3" disabled={!client} onClick={async () => await handleConnect(c)}>Connect Wallet</button></div>);
                })}
            </div>
            )
        }
          </div>
          <div className="font-bold text-xl text-gray3 flex md:hidden mt-1 items-center">
            <button className="px-1">
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
