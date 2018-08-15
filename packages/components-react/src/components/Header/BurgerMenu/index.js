import React, { Component } from 'react';

class BurgerMenu extends Component {
  componentDidMount() {
    this.launchBurgerMenu();
  }

  launchBurgerMenu() {
    this.burgerElement = document.querySelector('.js-burger'); // eslint-disable-line
    this.itemWithChildren = this.burgerElement && this.burgerElement.querySelector('.header__menu-item_has-children');

    try {
      this.burgerElement.addEventListener('click', () => {
        this.burgerElement.classList.toggle('burger_active');
        document.querySelector('.header__menu').classList.toggle('header__menu_active'); // eslint-disable-line
        document.body.classList.toggle('menu_active'); // eslint-disable-line
      });

      if (this.itemWithChildren) {
        this.itemWithChildren.addEventListener('click', (e) => {
          if (e) {
            e.stopPropagation();
          }

          this.itemWithChildren.classList.toggle('header__menu-item_has-children_expanded');
        });
      }
      return true;
    } catch (error) {
      /* eslint no-console: 0 */
      console.error(`[BURGER MENU]: There is no element '${this.burgerElement}' in the DOM.`);
      return false;
    }
  }

  render() {
    return (
      <div className="burger js-burger">
        <button type="button" className="burger__button" />
        <div className="burger__underlay" />
      </div>
    );
  }
}

export default BurgerMenu;
