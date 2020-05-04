import React from "react";

const Box = (props) => {
  return (
    <div className='box' style={props.background} key={props.id}>
      1
    </div>
  );
};

export default Box;
