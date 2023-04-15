import React from "react";
import Midbar from "../components/Midbar";
import Card from "../components/Card";
import { SiBitcoinsv } from "react-icons/si";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
const Dashboard = () => {
  return (
    <>
      <Card>
        <Midbar />
        <div className="bg-grey flex justify-between px-[7%] rounded-lg py-10 font-Urbanist">
          <div className="w-1/2">
            <h4 className="text-gray4 font-bold text-lg py-1">
              Collateral Asset
            </h4>
            <div className="flex items-center">
              <SiBitcoinsv className="h-full w-10 mr-2 text-orange-2" />
              <div className="text-Urbanist">
                <p className="text-gray4 font-bold text-lg ">Bitcoin</p>
                <p className="text-gray3 text-opacity-60 -mt-1">BTC</p>
              </div>
            </div>
          </div>
          <div className=" flex flex-col items-end w-1/2">
            <h4 className="text-center text-gray4 font-bold text-lg py-1">
              Protocol Balance
            </h4>
            <div className="flex items-center">
              <p className="font-Urbanist text-2xl font-bold text-opacity-30 text-gray3 mx-5">
                0.0000
              </p>
              <AiFillPlusCircle className=" text-gray2 text-opacity-50 hover:text-orange hover:text-opacity-60 w-10 h-full mr-2" />
              <AiFillMinusCircle className=" text-gray2 text-opacity-50 hover:text-orange hover:text-opacity-60 w-10 h-full ml-2" />
            </div>
          </div>
        </div>
        <div className="flex justify-between my-10">
          <div className="bg-grey h-1/2 px-[7%]  rounded-lg py-10 font-Urbanist w-1/2 mr-5 ">
            <div className="flex justify-between w-full border-b border-b-gray2 pb-5">
              <h4 className="text-gray4  font-bold text-lg ">
                BTC Wallet Balance
              </h4>
              <h4 className="text-gray4 font-bold text-lg ">0.0000</h4>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-gray3 font-semibold text-opacity-70 mb-3">
                <p>Supply APR</p>
                <p>3.00%</p>
              </div>
              <div className="flex justify-between text-gray3 font-semibold text-opacity-70 mt-3">
                <p>Borrow APR</p>
                <p>5.00%</p>
              </div>
            </div>
          </div>
          <div className="bg-grey  px-[7%] rounded-lg py-10  font-Urbanist w-1/2 ml-5">
            <h4 className="text-gray4  font-bold text-lg ">Position Summary</h4>
            <div className="mt-4">
              <div className="flex justify-between mb-4 text-gray3 font-semibold text-opacity-70">
                <p>Collateral Value</p>
                <p>0.000 BTC</p>
              </div>
              <div className="flex justify-between mb-4 text-gray3 font-semibold text-opacity-70">
                <p>Liquidation Point</p>
                <p>0.000 BTC</p>
              </div>
              <div className="flex justify-between mb-4 text-gray3 font-semibold text-opacity-70">
                <p>Borrow Capacity </p>
                <p>0.000 BTC</p>
              </div>
              <div className="flex justify-between mb-4 text-gray3 font-semibold text-opacity-70">
                <p>Available to Borrow</p>
                <p>0.000 BTC</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="text-gray3"/>
        <div className="flex justify-center items-center mt-2 text-gray3 text-opacity-40">
          <h5>BitComp &copy;2023</h5>
        </div>
      </Card>
    </>
  );
};

export default Dashboard;
