import React from "react";
import raa from "../assent/logo.svg";
const Footer = () => {
  return (
    <>
      <section className="pt-[300px] bg-[#0c1524]">
        <div className="container px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            <div className="">
              <img src={raa} alt="" />
              <div className="pt-5 text-white">
                <i class="fa-solid fa-location-dot text-[20px]"></i>
                <h3 className="font-normal w-[300px] pt-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Animi, aspernatur?
                </h3>
              </div>
            </div>
            <div className="conact pt-5">
              <div className="con1 text-white flex gap-4 place-items-center items-center ">
                <i class="fa-solid fa-phone text-[20px]"></i>
                <p>121456897</p>
              </div>
              <div className="con1 text-white flex gap-4 place-items-center items-center pt-10 ">
                <i class="fa-solid fa-envelope text-[20px]"></i>
                <p>Mn@gmail.com</p>
              </div>
            </div>
            <div className="icons text-white flex ">
              <ul className="p-5 mr-2">
                <i class=" hover:bg-cyan-400 fa-brands fa-facebook"></i>
                <i class=" hover:bg-cyan-400 fa-brands fa-instagram"></i>
                <i class=" hover:bg-cyan-400 fa-brands fa-twitter"></i>
                <i class=" hover:bg-cyan-400 fa-brands fa-linkedin"></i>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
