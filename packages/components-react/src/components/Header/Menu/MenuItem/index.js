import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const MenuItem = ({
  title,
  url,
  customClass,
  target,
  items,
  isActive,
}) => {
  let itemClasses = classNames({
    'header__menu-item': true,
    'header__menu-item_active': isActive,
    'header__menu-item_has-children': items && Object.keys(items).length,
  });

  if (customClass) {
    itemClasses += ` ${customClass}`;
  }

  const renderMenuItemChildren = (menuItems) => {
    const children = Object.values(menuItems).map((item) => {
      let childCustomClass = classNames({
        'header__menu-child': true,
        'header__menu-child_active': item.isActive,
      });

      if (item.customClass) {
        childCustomClass += ` ${item.customClass}`;
      }

      return (
        <MenuItem
          key={item.id}
          id={item.id}
          customClass={childCustomClass}
          target={item.target || ''}
          title={item.title}
          url={item.url}
          items={item.items || {}}
          isActive={item.isActive || false}
        />);
    });

    return (
      <ul className="header__menu-children">
        {children}
      </ul>
    );
  };

  return (
    <li className={itemClasses}>
      <a target={target || ''} className="header__menu-link" href={url}>
        {title}
      </a>
      {
        (items && Object.keys(items).length > 0) && renderMenuItemChildren(items)
      }
    </li>
  );
};

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  customClass: PropTypes.string,
  target: PropTypes.string,
  items: PropTypes.instanceOf(Object),
  isActive: PropTypes.bool,
};

MenuItem.defaultProps = {
  customClass: '',
  target: '',
  items: {},
  isActive: false,
};

export default MenuItem;
