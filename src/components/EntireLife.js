import React from "react";
import Box from "./Box";

const EntireLife = (props) => {
  console.log(props);
  const renderBoxes = (num) => {
    let backgroundLived = {
      backgroundColor: "rgba(0,255,200, .8)",
    };
    let backgroundFuture = {
      backgroundColor: "rgba(0,200,200, .2)",
    };
    let arr = [...Array(num)];
    console.log(arr);
    // arr.forEach((element, idx) => {
    //   element.lived = idx < props.age * 52 ? true : false;
    // });

    arr = arr.map((week, idx) => {
      return (
        <Box
          johnStyle={idx < props.age * 52 ? backgroundLived : backgroundFuture}
        />
      );
    });
    return arr;
  };
  return <div className='EntireLife'>{renderBoxes(props.lifespan * 52)}</div>;
};

export default EntireLife;
