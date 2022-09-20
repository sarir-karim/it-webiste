import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, desc,title } = item;
        return (
          <>
          <header>
                <h4>{title}</h4>
          </header>
          <article key={id} className="menu-item">
            <div className="item-info">
              <p className="item-text">{desc}</p>
            </div>
          </article>
          </>
        );
      })}
    </div>
  );
};

export default Menu;
