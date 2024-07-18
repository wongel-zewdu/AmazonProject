import React,{useContext} from 'react'
import Rating from "@mui/material/Rating";
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import classes from "./Product.module.css";
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/Data provider';
import { Type } from '../../utiliy/action.type';
const ProductCard = ({ product, flex, renderDesc }) => {
  const { image, title, id, rating, price, description } = product;
  const[sate,dispatch]=useContext(DataContext)
  
  const addToCart=()=>{
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: { image, title, id, rating, price, description }
    });
  }
  return (
    <div className={`${classes.card} ${flex ? classes.product__flexed : ""}`}>
      <Link to={`/products/${id}`}>
        <img className={classes.card__image} src={image}></img>
      </Link>
      <div>
        <h3 className={classes.card__title}>{title}</h3>
        {renderDesc && <div className={classes.product__desc}>{description}</div>}
        <div className={classes.card__rating}>
          <Rating value={rating.rate} precision={0.1} />
          <small>{rating.count}</small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
        <button className={classes.card__button} onClick={addToCart}>add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard