import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MenuItem from './MenuItem';

class Menu extends Component {
  componentDidMount() {
    this.launchDropdownMenu();
  }

  launchDropdownMenu() {
    this.element = document.querySelectorAll('.header__menu-item_has-children');
    this.dropdownElement = Array.prototype.slice.call(this.element);
    this.children = document.querySelectorAll('.header__menu-item_has-children .header__menu-children a.header__menu-link');

    try {
      if (this.dropdownElement) {
        this.dropdownElement.forEach((element) => {
          element.addEventListener('click', (event) => {
            if (event) {
              event.stopPropagation();
              event.preventDefault();
            }
            this.dropdownElement.forEach((el) => {
              if (el !== element) el.classList.remove('header__menu-item_has-children_expanded');
            });
            element.classList.toggle('header__menu-item_has-children_expanded');
          });
        });

        Array.prototype.slice.call(this.children).forEach((element) => {
          element.addEventListener('click', (event) => {
            if (event) {
              event.stopPropagation();
            }
          });
        });
      }
      return true;
    } catch (e) {
      const { error } = console;
      error(`[DROPDOWN MENU]: There is no element '${this.dropdownElement}' in the DOM.`);
      return false;
    }
  }

  render() {
    const { menuItems } = this.props;
    return (
      <nav className="header__nav">
        <ul className="header__menu">
          {
            Object.values(menuItems).map(item => (
              <MenuItem
                key={item.id}
                items={item.items || {}}
                url={item.url}
                title={item.title}
                customClass={item.customClass || ''}
                target={item.target || ''}
                isActive={item.isActive || false}
              />
            ))
          }
        </ul>
      </nav>
    );
  }
}

Menu.propTypes = {
  menuItems: PropTypes.instanceOf(Object).isRequired,
};

export default Menu;
