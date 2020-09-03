import React from "react";
import "./Product.css";

function Product({ id, title, price, image, rating }) {
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
                <button className="product__button">Add to basket</button>
            </div>
        </div>
    );
}

export default Product;
