
import React from "react";
import { categoryInfo } from "./catagoryFullInfo";
import CategoryCard from "./CategoryCard";
import classes from "../category/Category.module.css";
const Category = () => {
  return (
    <section className={classes.Category__container}>
      {categoryInfo.map((infos) => (
        <CategoryCard key={infos.name} data={infos} />
      ))}
    </section>
  );
};

export default Category;
