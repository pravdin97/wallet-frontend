import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

import CategoryItem from "../CategoryItem";

const CategoryList = ({ items, level }) => {
  return (
    <List component="div" disablePadding>
      {items.map((item) => (
        <CategoryItem key={String(item.id)} category={item} level={level} />
      ))}
    </List>
  );
};

export default CategoryList;
