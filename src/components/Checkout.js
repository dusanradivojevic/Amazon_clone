import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "../context/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <h3>Hello, {user?.email || "Guest"}</h3>
        <h2 className="checkout__title">Your shopping Basket</h2>

        <FlipMove>
          {basket.map((item, index) => (
            <CheckoutProduct
              key={item.id + index + 5}
              id={item.id}
              rating={item.rating}
              price={item.price}
              title={item.title}
              image={item.image}
            />
          ))}
        </FlipMove>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
