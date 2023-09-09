import React, { Fragment } from "react";
import Landing from "./Landing";
import Features from "../compontes/Features";
import StayProduct from "../compontes/StayProduct";
import TestMaim from "../compontes/TestMaim";
import Send from "../compontes/Send";

const Home = () => {
  return (
    <Fragment>
      <Landing />
      <Features />
      <StayProduct />
      <TestMaim />
      <Send />
    </Fragment>
  );
};

export default Home;
