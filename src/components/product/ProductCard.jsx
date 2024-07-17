import React from 'react'
import Rating from "@mui/material/Rating";
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import classes from "./Product.module.css";
const ProductCard = ({product}) => {
    const { image, title, id, rating, price } = product;
  return (
    <div className={classes.card}>
      <a href="">
        <img className={classes.card__image} src={image}></img>
      </a>
      <div>
        <h3 className={classes.card__title}>{title}</h3>
        <div className={classes.card__rating}>
          <Rating value={rating.rate} precision={0.1} />
          <small>{rating.count}</small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
        <button className={classes.card__button}>add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard