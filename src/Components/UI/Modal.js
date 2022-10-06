import React from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onCloseCart} />;
};

const ModelOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portal = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onCloseCart={props.onCloseCart} />,
        portal
      )}
      {ReactDOM.createPortal(
        <ModelOverlay >{props.children}</ModelOverlay>,
        portal
      )}
    </>
  );
};

export default Modal;
