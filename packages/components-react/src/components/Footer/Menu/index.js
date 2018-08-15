import React from 'react';

const Menu = ({ menuList }) => (
  menuList.map(item => (
    <li key={item.url}>
      <a
        className="footer__menu-item"
        href={item.url}
      >
        {item.name}
      </a>
    </li>
  ))
);

export default Menu;
