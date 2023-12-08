import React from "react";
import Header from "../Header/Header";
import MainPart1 from "../Main/MainPart1/MainPart1";
import MainPart2 from "../Main/MainPart2/MainPart2";
import Footer from "../Footer/Footer";
import "./wrapper.scss";
export default function Wrapper() {
  return (
    <div className="container">
      <Header />
      <MainPart1 />
      <MainPart2 />
      <Footer />
    </div>
  );
}
