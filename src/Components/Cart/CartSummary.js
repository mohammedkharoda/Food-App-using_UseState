import React from "react";
import Modal from "../UI/Modal";
import classes from "./CartSummary.module.css";
const CartSummary = (props) => {
  const total = +props.onFoodAdding?.price * +props.onFoodAdding.quantity;
  const Items = (
    <ul style={{ textDecoration: "none" }}>
      {[
        {
          id: props.onFoodAdding?.id,
          name: props.onFoodAdding?.name,
          amount: props.onFoodAdding.quantity,
          price: props.onFoodAdding?.price,
        },
      ].map((cartItem) => (
        <li className={classes.heading}>{cartItem?.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onCloseCart={props?.onCloseCart}>
      <div>
        {Items}
        <span>Total Amount x {props.onFoodAdding.quantity}</span>
        <div className={classes.total}>
          <span>Total Amount </span>
          <span>{total}</span>
        </div>
        <div className={classes.actions}>
          <button
            className={classes["button--alt"]}
            onClick={props.onCloseCart}
          >
            Close
          </button>
          <button className={classes.button}>Order</button>
        </div>
      </div>
    </Modal>
  );
};

export default CartSummary;
