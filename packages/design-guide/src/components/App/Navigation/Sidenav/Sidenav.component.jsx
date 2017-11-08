import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Sidenav.scss';
import '../../../../assets/logo.svg';

export default class Sidenav extends Component {
  renderMenuItems() {
    return this.props.menuItems && this.props.menuItems.map(item => (
      <li key={item.id} >
        <NavLink
          className="link"
          activeClassName="link_active"
          to={item.path}
          onClick={() => this.props.menuItemClick()}
        >
          {item.label}
        </NavLink>
      </li>
    ));
  }

  render() {
    return (
      <nav className={`sidenav ${this.props.active ? 'active' : ''}`} >
        <header className="sidenav__header" >
          <img alt="Logo" src="assets/logo.svg" />
        </header>
        <ul>
          {this.renderMenuItems()}
        </ul>
      </nav>
    );
  }
}

Sidenav.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  active: PropTypes.bool.isRequired,
  menuItemClick: PropTypes.func.isRequired,
};
