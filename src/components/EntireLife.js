import React from "react";
import Box from "./Box";

const EntireLife = (props) => {
  // console.log(props)
  const renderBoxes = (num) => {
    let backgroundLived = {
      backgroundColor: "rgba(0,255,200, .8)",
    };
    let backgroundFuture = {
      backgroundColor: "rgba(0,200,200, .2)",
    };
    let arr = [...Array(props.lifespan * 52)];
    // console.log(arr);
    arr = arr.map((element, idx) => {
      return (
        <Box
          background={idx < props.age * 52 ? backgroundLived : backgroundFuture}
        />
      );
    });
    console.log(arr);
    return arr;
  };
  return <div className='EntireLife'>{renderBoxes(props.lifespan * 52)}</div>;
};

export default EntireLife;
