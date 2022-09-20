import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories.js";
import items from "./data"; 

const allCategories = [ ...new Set(items.map((item) => item.category))];

const Product = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    // if (category === "all") {
    //   setMenuItems(category);
    //   return null;
    // }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default Product;
