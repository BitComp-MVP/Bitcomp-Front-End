import React from "react";
import Card from "../components/Card";
import { SiBitcoinsv } from "react-icons/si";
const Market = () => {
  return (
    <>
      <Card>
        <div className="font-Urbanist text-base h-screen flex flex-col justify-center">
          <div className="flex flex-col md:flex-row bg-grey rounded-lg py-7 my-5">
            <div className="flex flex-col md:flex-row md:justify-evenly md:w-3/5 px-4 md:px-0">
              <div className="flex justify-between  md:flex-col  ">
                <div className="md:my-2">
                  <h4 className="font-medium text-gray3 text-opacity-70 pb-1">
                    Total Earnings
                  </h4>
                  <p className="text-white text-xl font-semibold tracking-wide">
                    $10.00K
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray3 text-opacity-70 pb-1">
                    Total Borrowings
                  </h4>
                  <p className="text-white text-right md:text-justify text-xl font-semibold tracking-wide">
                    $50.00K
                  </p>
                </div>
              </div>
              <div className="flex justify-between md:flex-col">
                <div className="md:my-2">
                  <h4 className="font-medium text-gray3 text-opacity-70 pb-1">
                    Earn APR
                  </h4>
                  <p className="flex items-center text-white text-xl font-semibold tracking-wide">
                    <SiBitcoinsv className="mr-1" /> 5.47%
                  </p>
                </div>
                <div className="">
                  <h4 className="font-medium text-gray3 text-opacity-70 pb-1">
                    Borrow APR
                  </h4>
                  <p className="flex items-center text-white text-xl font-semibold tracking-wide">
                    <SiBitcoinsv className="mr-1" /> 3.47%
                  </p>
                </div>
              </div>
             
              <div className="flex justify-between md:flex-col">
                <div className="md:my-2">
                  <h4 className="font-medium text-gray3 text-opacity-70 pb-1">
                    Reserves
                  </h4>
                  <p className="text-white text-xl font-semibold tracking-wide">
                    $10 949.34
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray3 text-opacity-70 pb-1">
                    Oracle Price
                  </h4>
                  <p className="text-white text-right md:text-justify text-xl font-semibold tracking-wide">
                    $1.50
                  </p>
                </div>
              </div>
            </div>
            <div className="w-2/5">Graph</div>
          </div>
          <div className="bg-grey my-5 rounded-lg flex md:flex-row flex-col px-4 md:px-0 py-7">
            <div className="md:w-2/5 flex flex-col md:flex-row md:justify-evenly">
              <div className="flex justify-between md:flex-col">
                <h4 className="text-gray4 font-bold  py-1">Collateral Asset</h4>
                <div className="flex items-center">
                  <SiBitcoinsv className="h-full w-10 mr-2 text-orange-2 " />
                  <div className="text-Urbanist">
                    <p className="text-gray4 font-bold md:text-lg ">Bitcoin</p>
                    <p className="text-gray3 text-opacity-60 -mt-1">BTC</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between md:flex-col">
                <h4 className="text-gray4 font-bold  py-1">Total Supply</h4>
                <div className="">
                  <p className="text-gray4 font-bold md:text-lg py-1">
                    $10.00M
                  </p>
                  <div className="bg-gray2 h-1"><div className="w-[56%] bg-orange h-full"></div></div>
                </div>
              </div>
            </div>
            <div className="md:w-3/5 flex flex-col md:flex-row md:justify-evenly">
              <div className="flex justify-between md:flex-col">
                <h4 className="font-medium text-gray3 text-opacity-70 pb-1">
                  Oracle Price
                </h4>
                <p className="text-white text-xl font-semibold tracking-wide">
                  $1.50
                </p>
              </div>
              <div className="flex justify-between md:flex-col">
                <h4 className="font-medium text-gray3 text-opacity-70 pb-1">
                  Reserves
                </h4>
                <p className="text-white text-xl font-semibold tracking-wide">
                  $0.00
                </p>
              </div>
              <div className="flex justify-between md:flex-col">
                <h4 className="font-medium text-gray3 text-opacity-70 pb-1">
                  Collateral Factor
                </h4>
                <p className="text-white text-xl font-semibold tracking-wide">
                  77%
                </p>
              </div>
              <div className="flex justify-between md:flex-col">
                <h4 className="font-medium text-gray3 text-opacity-70 pb-1">
                  Liquidation Factor
                </h4>
                <p className="text-white text-xl font-semibold tracking-wide">
                  82%
                </p>
              </div>
              <div className="flex justify-between md:flex-col">
                <h4 className="font-medium text-gray3 text-opacity-70 pb-1">
                  Liquidation Penalty
                </h4>
                <p className="text-white text-xl font-semibold tracking-wide">
                  7%
                </p>
              </div>
            </div>
          </div> 
        </div>
      </Card>
    </>
  );
};

export default Market;
