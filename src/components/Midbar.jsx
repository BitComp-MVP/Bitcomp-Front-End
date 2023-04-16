import React from "react";
import { useState, useEffect, useCallback } from "react";
import { SiBitcoinsv } from "react-icons/si";
import { AiFillPlusCircle, AiOutlineClose } from 'react-icons/ai'

const Midbar = (props, propsb) => {
  const [supply, setSupply] = useState(false);
  const [borrow, setBorrow] = useState(false);
  const [value, setValue] = useState(0);
  const [supplyAmount, setSupplyAmount] = useState('');
  const [borrowAmount, setBorrowAmount] = useState('');
  const [isBorrowEnabled, setIsBorrowEnabled] = useState(false);
  const [supplyCount, setSupplyCount] = useState(0);
  const [toggle, setToggle] = useState(false);
  const specifiedValue = 0.03 * supplyAmount ; // example specified value



  useEffect(() => {
    const incrementValue = setInterval(() => {
      setValue((prevValue) => prevValue + specifiedValue / 31536000);
    }, 1000); // increment every second

    return () => clearInterval(incrementValue);
  }, [specifiedValue]);
   
  const handleSupplyAmount = event => {
    const supplied = event.target.value;
    setSupplyAmount(supplied);
    console.log('value is:', event.target.value);
  };

  const handleBorrowAmount = event => {
    const borrowed = event.target.value;
    setBorrowAmount(borrowed);
    console.log('value is:', event.target.value);
  };

  const handleClick = useCallback(() => {
    props.onChange(supplyAmount);
    setSupplyCount(supplyCount + 1);
    setIsBorrowEnabled(true);
  }, [supplyAmount, props]);

  const handleClickBorrow = useCallback(() => {
    propsb.onChanged(borrowAmount);
    
  }, [borrowAmount, propsb]);


    const borrowLimitHigh = 0.7 * supplyAmount;
    const borrowLimitLow = 0.05 * supplyAmount;
    
  
 
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between  md:items-center font-Urbanist my-7">
        <div>
          <p className="text-lg font-semibold">
            Earning Rate: <span className="text-orange">3%</span>{" "}
          </p>

          

          {toggle ? (
           <div className="font-bold tracking-wider my-3">
           <button
             className="flex items-center text-lg md:text-3xl my-1 text-white "
             onClick={() => setToggle((prev) => !prev)}
           >
              $ {value * 10000}
           </button>
           <button
             className="flex items-center text-sm  text-gray3"
             onClick={() => setToggle((prev) => !prev)}
           >
            
             <span className="mr-2 t">
               <SiBitcoinsv />
             </span>
             {value}
           </button>
         </div>
          ) : (
            <div className="font-bold tracking-wider my-3">
            <button
              className="flex items-center text-lg md:text-3xl my-1 text-gray3"
              onClick={() => setToggle((prev) => !prev)}
            >
              <span className="mr-2 t">
                <SiBitcoinsv />
              </span>
              {value}
            </button>
            <button
              className="flex items-center text-sm text-white "
              onClick={() => setToggle((prev) => !prev)}
            >
               $ {value * 10000}
            </button>
          </div>
          )}
        </div>
        <div className="flex h-1/3 justify-between items-center">
            <button className="bg-grey flex items-center md:mx-3 rounded-2xl px-7 py-2"  onClick={() => setSupply((prev) => !prev)}>
              <AiFillPlusCircle className="mr-1"/>  Supply
              
            </button>
            <button className="bg-grey flex items-center md:mx-3 rounded-2xl px-7 py-2" disabled={!isBorrowEnabled} onClick={() => setBorrow((prev) => !prev)}>
              <AiFillPlusCircle className="mr-1"/> Borrow
            </button>
        </div>
        {supply ? (
           <div className="justify-center items-center bg-black bg-opacity-90 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-0 outline-none focus:outline-none ease-linear transition-all duration-300">
           <div className="bg-orange bg-opacity-20 h-3/4 w-2/5 py-5 rounded-md font-Urbanist">
             <div className="px-[5%]">
              <div className="text-3xl font-bold flex items-center justify-between">
                <div className="flex items-center">
                <SiBitcoinsv className=""/> <p className="mx-2">BTC</p>
                </div>
                <button onClick={() => setSupply((prev) => !prev)}>
              <AiOutlineClose/>
              </button>
              </div>
              <div className="bg-tranparent  h-14 flex justify-center mt-4">
                <input type="number" value={supplyAmount} onChange={handleSupplyAmount} className="px-4 bg-transparent border-b-2 text-2xl focus:outline-none border-white h-full w-1/2"/>
              </div>
              <div className="flex justify-between my-5" >
               <div className="border-b-2 border-orange w-1/2 text-center">Supply</div>
               <div className=" w-1/2 text-center">Withdraw</div>
              </div>
              <div>
              <div className="flex justify-between text-white border-b border-gray3 pb-4 font-semibold text-opacity-70 mb-3">
                <p>Supply APR</p>
                <p>3.00%</p>
              </div>
              <div className="flex justify-between text-white border-b mt-7 border-gray3 pb-4 font-semibold text-opacity-70 mb-3">
                <p>Borrow Limit</p>
                <p>$ {borrowLimitHigh} - $ {borrowLimitLow}</p>
              </div>
              <div className="flex justify-between text-white border-b mt-7 border-gray3 pb-4 font-semibold text-opacity-70 mb-3">
                <p>Borrow Limit Used</p>
                <p>0.00%</p>
              </div>
              <div className="w-full" onClick={() => setSupply((prev) => !prev)}>
                <button className="w-full py-4 text-center font-bold bg-orange" onClick={handleClick}>Supply</button>
              </div>
              <div className="flex justify-between text-white mt-7  pb-4 font-semibold text-opacity-70 mb-3">
                <p>Wallet Balance</p>
                <p>{10 - supplyAmount} BTC</p>
              </div>
              </div>
             </div>
           </div>
         </div>
        ) : null}
         
      </div>
      {borrow ? (
          <div className="justify-center items-center bg-black bg-opacity-90 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-0 outline-none focus:outline-none ease-linear transition-all duration-300">
          <div className="bg-orange bg-opacity-20 h-3/4 w-2/5 py-5 rounded-md font-Urbanist">
            <div className="px-[5%]">
             <div className="text-3xl font-bold flex items-center justify-between">
               <div className="flex items-center">
               <SiBitcoinsv className=""/> <p className="mx-2">BTC</p>
               </div>
               <button onClick={() => setBorrow((prev) => !prev)}>
             <AiOutlineClose/>
             </button>
             </div>
             <div className="bg-tranparent  h-14 flex justify-center mt-4">
               <input type="number" value={borrowAmount} onChange={handleBorrowAmount} className="px-4 bg-transparent border-b-2 text-2xl focus:outline-none border-white h-full w-1/2"/>
             </div>
             <div className="flex justify-between my-5" >
              <div className="border-b-2 border-orange w-1/2 text-center">Borrow</div>
              <div className=" w-1/2 text-center">Repay</div>
             </div>
             <div>
             <div className="flex justify-between text-white border-b border-gray3 pb-4 font-semibold text-opacity-70 mb-3">
               <p>Borrow APR</p>
               <p>5.00%</p>
             </div>
             <div className="flex justify-between text-white border-b mt-7 border-gray3 pb-4 font-semibold text-opacity-70 mb-3">
               <p>Borrow Limit</p>
               <p>$ {borrowLimitHigh} - $ {borrowLimitLow}</p>
             </div>
             <div className="flex justify-between text-white border-b mt-7 border-gray3 pb-4 font-semibold text-opacity-70 mb-3">
               <p>Borrow Limit Used</p>
               <p>0.00%</p>
             </div>
             <div className="w-full" onClick={() => setBorrow((prev) => !prev)}>
               <button className="w-full py-4 text-center font-bold bg-orange" onClick={handleClickBorrow}>Borrow</button>
             </div>
             <div className="flex justify-between text-white mt-7  pb-4 font-semibold text-opacity-70 mb-3">
               <p>Wallet Balance</p>
               <p>1.00BTC</p>
             </div>
             </div>
            </div>
          </div>
        </div>
        ) : null}
    </>
  );
};

export default Midbar;
