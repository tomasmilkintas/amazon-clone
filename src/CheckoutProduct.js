import React from "react";
import { useStateValue } from "./StateProvider";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, title, price, image, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove item from basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    };

    return (
        <div className="checkoutProduct">
            <img src={image} alt="" className="checkoutProduct__image" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>£</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <p>
                                <span role="img" aria-label="logo">
                                    ⭐
                                </span>
                            </p>
                        ))}
                </div>
                <button className="checkoutProduct__button" onClick={removeFromBasket}>
                    Remove from basket
                </button>
            </div>
        </div>
    );
}

export default CheckoutProduct;
