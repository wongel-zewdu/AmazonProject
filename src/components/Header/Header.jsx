

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import classes from "./Header.module.css";
import LowerHeader from "../LowerHeader/LowerHeader";
import { DataContext } from '../DataProvider/Data provider';
const Header = () => {
  const [{basket},dispatch]=useContext(DataContext)
const totalItem = basket?.reduce((amount,item)=>{
  return item.amount + amount
},0)
  return (
    <section className={classes.header}>
      <section className={classes.header__continer}>
        <div className={classes.header__logo_continer}>
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon logo"
            />
          </Link>
          <div className={classes.header__delivery}>
            <span>
              <SlLocationPin />
            </span>
            <div>
              <p>Delivered to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>
        <div className={classes.header__search}>
          <select className={classes.header__select}>
            <option>All</option>
          </select>
          <input type="text" className={classes.header__input} />
          <FaSearch size={25} className={classes.header__icon} />
        </div>

        <div className={classes.header__account}>
          <div className={classes.header__account_border}>
            <Link to="/" className={classes.header__account_image}>
              <img
                src="https://pngimg.com/uploads/flags/flags_PNG14592.png"
                alt="flag"
              />
            </Link>
            <select className={classes.header__account_select}>
              <option value="">EN</option>
            </select>
          </div>
          <Link to="/auth">
            <div className={classes.header__account_link}>
              <p>Sign In</p>
              <span>Account & Lists</span>
            </div>
          </Link>
          <Link to="/orders" className={classes.header__account_para}>
            <p>Returns</p>
            <span>& Orders</span>
          </Link>
          <Link to="/cart" className={classes.header__account_cart}>
            <IoCartOutline size={35} />
            <span className={classes.header__account_span}>{totalItem}</span>
          </Link>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
};

export default Header;

