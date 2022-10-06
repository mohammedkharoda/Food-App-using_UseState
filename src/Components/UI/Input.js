import React from "react";

const Input = (props) => {
  return (
    <>
      <div>
        <label htmlFor={props.input.id}>{props.label}</label>
        {/* Destructing for storing Data */}
        <input {...props.input} />
      </div>
    </>
  );
};

export default Input;
