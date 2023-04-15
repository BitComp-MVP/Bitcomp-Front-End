import React from "react";
import Card from "./Card";
import { MdSpaceDashboard } from "react-icons/md";
import { SiMarketo, SiBitcoinsv } from "react-icons/si";
import { NavLink } from "react-router-dom";
const Navbar = () => (
  <>
    <Card>
      <div className="text-white flex justify-between items-center ">
        <h5 className=" font-Urbanist font-extrabold text-3xl">
          Bit <span className="text-orange -ml-2">Comp</span>
        </h5>
        <div className="mt-2 font-Urbanist text-lg font-semibold">
          <ul className="flex">
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
            <p className="text-lg font-Urbanist font-extrabold tracking-wider">BTC</p>
            <p className="text-lg text-gray3 mx-1">Bitcoin</p>
          </div>
          <div className="mx-3">
            <button className="bg-grey font-bold tracking-wide rounded-2xl border border-orange p-3">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </Card>
  </>
);

export default Navbar;
