import React from "react";
import { useState } from "react";
import { SiBitcoinsv } from "react-icons/si";
import { AiFillPlusCircle } from 'react-icons/ai'
const Midbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center font-Urbanist my-7">
        <div>
          <p className="text-lg font-semibold">
            Earning Rate: <span className="text-orange">3%</span>{" "}
          </p>

          

          {toggle ? (
           <div className="font-bold tracking-wider my-3">
           <button
             className="flex items-center text-3xl my-1 text-white "
             onClick={() => setToggle((prev) => !prev)}
           >
              $ 0.00
           </button>
           <button
             className="flex items-center text-sm  text-gray3"
             onClick={() => setToggle((prev) => !prev)}
           >
            
             <span className="mr-2 t">
               <SiBitcoinsv />
             </span>
             0.0000
           </button>
         </div>
          ) : (
            <div className="font-bold tracking-wider my-3">
            <button
              className="flex items-center text-3xl my-1 text-gray3"
              onClick={() => setToggle((prev) => !prev)}
            >
              <span className="mr-2 t">
                <SiBitcoinsv />
              </span>
              0.0000
            </button>
            <button
              className="flex items-center text-sm text-white "
              onClick={() => setToggle((prev) => !prev)}
            >
              $ 0.00
            </button>
          </div>
          )}
        </div>
        <div className="flex h-1/3 items-center">
            <button className="bg-grey flex items-center mx-3 rounded-2xl px-7 py-2">
              <AiFillPlusCircle className="mr-1"/>  Supply
            </button>
            <button className="bg-grey flex items-center mx-3 rounded-2xl px-7 py-2">
              <AiFillPlusCircle className="mr-1"/> Borrow
            </button>
        </div>
      </div>
    </>
  );
};

export default Midbar;
