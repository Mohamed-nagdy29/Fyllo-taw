import React from "react";
import stay from "../assent/illustration-stay-productive.png";
import ani from "../assent/icon-arrow.svg";
const StayProduct = () => {
  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-2 place-items-center">
        <div>
          <img src={stay} alt="" className="w-[500px]" />
        </div>
        <div className="text-white">
          <h3 className="font-medium text-[30px]">
            Stay Product
            <br />
            Where every you
          </h3>
          <div>
            <p className="my-[15px] text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              nesciunt?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              nesciunt?
            </p>
          </div>
          <div className="flex">
            <a
              href="/"
              className="text-[#42b0d1] mt-2 border-b-2 border-primary pb-3 text-[20px]"
            >
              See how flyo
            </a>
            <img
              src={ani}
              alt=""
              className="w-[35px] animate-[moveRight_1s_ease-in-out_infinite]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default StayProduct;
