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
            <h4 className="text-gray4 font-bold md:text-lg py-1">
              Collateral Asset
            </h4>
            <div className="flex items-center">
              <SiBitcoinsv className="h-full w-10 mr-2 text-orange-2" />
              <div className="text-Urbanist">
                <p className="text-gray4 font-bold md:text-lg ">Bitcoin</p>
                <p className="text-gray3 text-opacity-60 -mt-1">BTC</p>
              </div>
            </div>
          </div>
          <div className=" flex flex-col items-end w-1/2">
            <h4 className="text-center text-gray4 font-bold md:text-lg py-1">
              Protocol Balance
            </h4>
            <div className="flex items-center">
              <p className="font-Urbanist text-base md:text-2xl font-bold text-opacity-30 text-gray3 md:mx-5">
                0.0000
              </p>
              <AiFillPlusCircle className=" text-gray2 text-opacity-50 hover:text-orange hover:text-opacity-60 md:w-10 h-full mx-2" />
              <AiFillMinusCircle className=" text-gray2 text-opacity-50 hover:text-orange hover:text-opacity-60 md:w-10 h-full ml-2" />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row  md:justify-between my-10">
          <div className="bg-grey h-1/2 px-[7%]  rounded-lg py-10 font-Urbanist md:w-1/2 md:mr-5 mb-5 md:mb-0 ">
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
          <div className="bg-grey  px-[7%] rounded-lg py-10  font-Urbanist md:w-1/2 md:ml-5 mt-5 md:mt-0">
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
       
      </Card>
    </>
  );
};

export default Dashboard;
