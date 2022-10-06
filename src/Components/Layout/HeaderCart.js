import React from "react";
import classes from "./HeaderCart.module.css";
import CartIcon from "../Cart/Cart";
const HeaderCart = (props) => {
  return (
    <>
      <button className={classes.button} onClick={props.onCartClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{props.onAddFoodData?.quantity}</span>
      </button>
    </>
  );
};

export default HeaderCart;
