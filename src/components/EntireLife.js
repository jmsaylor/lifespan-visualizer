import React from "react";
import Box from "./Box";

const EntireLife = (props) => {
  console.log(props);
  const renderBoxes = (num) => {
    let arr = [...Array(num)];
    arr = arr.map((week) => {
      return <Box />;
    });
    return arr;
  };
  return <div className='EntireLife'>{renderBoxes(4000)}</div>;
};

export default EntireLife;
