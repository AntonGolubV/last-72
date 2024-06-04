import { useEffect, useState } from "react";
import axios from "axios";
import "./Comparison.css";
import Block from "./Block/Block";
function Comparison() {
  const dataSmartphone = [{ name: "a" }];
  return (
    <>
      <h1 style={{ marginLeft: "40px" }}>Сравнение телефонов</h1>
      <div className="comparison_main">
        <div className="block_comparison"></div>
        {dataSmartphone.map((item, index) => (
          <Block /* key={`${index}`} data={item} */></Block>
        ))}
      </div>
    </>
  );
}

export default Comparison;
