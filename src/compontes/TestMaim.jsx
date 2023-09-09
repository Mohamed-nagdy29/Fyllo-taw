import React from "react";
import pro1 from "../assent/profile-1.jpg";
import pro2 from "../assent/profile-2.jpg";
import pro3 from "../assent/profile-3.jpg";

const TestMaim = () => {
  return (
    <>
      <div className="container pt-[150px] px-[20px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[60px] shadow-[10px_10px_1px_10px_#1c202c]">
          <div className="boxees bg-[#21293c] rounded-[8px]  pr-[20px] h-[200px]">
            <h2 className="text-white pb-5 text-[20px] pl-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, eius.
            </h2>
            <div className="flex  place-items-center items-center  pt-3 pl-7 ">
              <img
                src={pro1}
                alt=""
                className="rounded-full w-[50px] h-[50px]"
              />
              <h3 className="text-white">Ahmed </h3>
            </div>
          </div>
          <div className="boxees bg-[#21293c] rounded-[8px]  pr-[20px] h-[200px]">
            <h2 className="text-white pb-5 text-[20px] pl-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, eius.
            </h2>
            <div className="flex gap-3 place-items-center pt-3 pl-7 ">
              <img
                src={pro2}
                alt=""
                className="rounded-full w-[50px] h-[50px]"
              />
              <h3 className="text-white">Ahmed </h3>
            </div>
          </div>
          <div className="boxees bg-[#21293c] rounded-[8px] pr-[20px] h-[200px]">
            <h2 className="text-white pb-5 text-[20px] pl-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, eius.
            </h2>
            <div className="flex gap-3 place-items-center  pt-3 pl-7 ">
              <img
                src={pro3}
                alt=""
                className="rounded-full w-[50px] h-[50px]"
              />
              <h3 className="text-white">Ahmed </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestMaim;
