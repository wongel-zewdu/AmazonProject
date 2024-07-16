import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import classes from "./LowerHeader.module.css";
const LowerHeader = () => {
  return (
    <div className={classes.lowerHeader}>
      <ul className={classes.lowerHeader__menuList}>
        <li className={classes.lowerHeader__menuItem}>
          <AiOutlineMenu />
          <p>All</p>
        </li>
        <li className={classes.lowerHeader__menuItem}>Today's Deals</li>
        <li className={classes.lowerHeader__menuItem}>Customer Service</li>
        <li className={classes.lowerHeader__menuItem}>Registry</li>
        <li className={classes.lowerHeader__menuItem}>Gift Card</li>
        <li className={classes.lowerHeader__menuItem}>Sell</li>
      </ul>
    </div>
  );
};

export default LowerHeader;
