import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, image, rating }) {
    // eslint-disable-next-line
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        //add item to basket
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                rating: rating,
                price: price,
            },
        });
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>£</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
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
                <img className="product__image" src={image} alt="" />
                <button onClick={addToBasket} className="product__button">
                    Add to basket
                </button>
            </div>
        </div>
    );
}

export default Product;
