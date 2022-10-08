/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Modal from "../UI/Modal";
import classes from "./CartSummary.module.css";
const CartSummary = (props) => {
  const cartSummary = props.onCartDetails;
  const orderName = cartSummary.map((orderItem) => orderItem.name);
  const orderQuantity = cartSummary.map((orderItem) => orderItem.quantity);
  const mergingOrder = [orderName, orderQuantity];
  let cartTotal = 0;
  cartSummary.forEach((items) => {
    cartTotal = cartTotal + items.price * items.quantity;
  });

  // Meals Adding into the cart
  const updateCartDataHandler = (mealId, type) => {
    if (type === "increase") {
      props.setFoodInCart((prevValue) => {
        let foundMeal = prevValue.find((cartItem) => cartItem.id === mealId);
        let tempCartData = [...prevValue];
        if (foundMeal.quantity > 4) {
          alert("Can't add more than 5!");
        } else {
          tempCartData = tempCartData.filter((item) => item.id !== mealId);
          foundMeal = { ...foundMeal, quantity: foundMeal.quantity + 1 };
          tempCartData.push(foundMeal);
        }
        return tempCartData;
      });
    }
  };

  // Meals Removing from the Cart
  const removeCartHandler = (mealId, type) => {
    if (type === "decrease") {
      props.setFoodInCart((prevValue) => {
        let foundMeal = prevValue.find((cartItem) => cartItem.id === mealId);
        let tempCartData = [...prevValue];
        if (
          tempCartData.find((cartId) => cartId.id === mealId) &&
          foundMeal.quantity <= 0
        ) {
          tempCartData.shift(foundMeal);
        } else {
          tempCartData = tempCartData.filter((item) => item.id !== mealId);
          foundMeal = { ...foundMeal, quantity: foundMeal.quantity - 1 };
          tempCartData.push(foundMeal);
        }
        return tempCartData;
      });
    }
  };

  // Order Button handler
  const orderHandler = () => {
    cartSummary.map((orderItem) => {
      return console.log(`Ordering ${orderItem.name} x ${orderItem.quantity}`);
    });
  };

  const Items = (
    <ul>
      {cartSummary.map((cartItem) => (
        <>
          <li className={classes.heading}>
            {cartItem?.name} x {cartItem.quantity}
          </li>
          <div>
            <div>
              <button
                style={{ marginRight: "15px" }}
                onClick={() => updateCartDataHandler(cartItem.id, "increase")}
              >
                +
              </button>
              <button
                onClick={() => removeCartHandler(cartItem.id, "decrease")}
              >
                -
              </button>
            </div>
          </div>
        </>
      ))}
    </ul>
  );

  return (
    <Modal onCloseCart={props?.onCloseCart}>
      <div>
        {Items}

        <span>Total Amount x {props.onCartDetails.length}</span>
        <div className={classes.total}>
          <span>Total Amount </span>
          <span>{cartTotal.toFixed(2)}</span>
        </div>
        <div className={classes.actions}>
          <button
            className={classes["button--alt"]}
            onClick={props.onCloseCart}
          >
            Close
          </button>
          <button className={classes.button} onClick={orderHandler}>
            Order
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CartSummary;
