import React from "react";
import LowerHeader from "../LowerHeader/LowerHeader"
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
// import LowerHeader from "../LowerHeader/LowerHeader";

import classes from "./Header.module.css";
const Header = () => {
  return (
    <section className={classes.header}>
      <section className={classes.header__continer}>
        <div className={classes.header__logo_continer}>
          <a href="">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon log"
            />
          </a>
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
            <a href="" classes={classes.header__account_image}>
              <img src="https://pngimg.com/uploads/flags/flags_PNG14592.png"></img>
            </a>
            <select className={classes.header__account_select}>
              <option value="">EN</option>
            </select>
          </div>
          <a href="">
            <div className={classes.header__account_link}>
              <p>Sign In</p>
              <span>Account & Lists</span>
            </div>
          </a>
          <a href="" className={classes.header__account_para}>
            <p>Returns</p>
            <span>& Orders</span>
          </a>
          <a href="" className={classes.header__account_cart}>
          <IoCartOutline size={35} />
          <span className={classes.header__account_span}>0</span>
          </a>
        </div>
        
      </section>
      <LowerHeader/>
      
    </section>
    
  );
};

export default Header;
