import React, { useContext } from "react";
import classes from "./Cart.module.css";
import { DataContext } from "../../components/DataProvider/Data provider";
import ProductCard from "../../components/product/ProductCard";
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
const Cart = () => {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount,item)=>{
     return item.price + amount
  }, 0)
  return (
    <div className={classes.cart__container}>
      <section className={classes.cart__containers}>
        <div>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr />
          {basket?.length == 0 ? (
            <p>sorry! Your Amazon Cart is empty</p>
          ) : (
            basket?.map((item, i) => {
              return (
                <ProductCard
                  key={i}
                  product={item}
                  renderAdd={false}
                  renderDesc={true}
                  flex={true}
                />
              );
            })
          )}
        </div>
        {basket?.length !== 0 && (
          <div className={classes.Cart__subtotal}>
            <div>
              <p>subtotal({basket?.length}items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payments" className={classes.Cart__subtotallink}>continue to checkout</Link>
          </div>
        )}
      </section>
    </div>
  );
};

export default Cart;

