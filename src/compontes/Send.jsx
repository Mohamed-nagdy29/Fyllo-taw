import React from "react";

const Send = () => {
  return (
    <section className="pt-[50px]">
      <div className="container relative">
        <div className="absolute left-[50%] translate-x-[-50%] w-[700px] max-w-full bg-[#1c2230] top--130px h-[175px] text-white p-[30px] ">
          <div className="text text-center">
            <h2 className="text-[25px]">Get Early acces Tody</h2>
            <p className="text-fw-normal pb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni,
              assumenda!
            </p>
          </div>
          <div className="box text-center">
            <form action="">
              <input
                type="email"
                placeholder="<EMAIL>"
                className="pr-4 w-[300px] h-[30px] rounded-[50px] text-red-950"
              />
              <button className="bg-cyan-700 rounded-[80px] ml-8 w-[80px] hover:bg-gray-800 mt-2">
                <span></span>Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Send;
