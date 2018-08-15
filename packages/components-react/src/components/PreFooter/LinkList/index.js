import React from 'react';
import PropTypes from 'prop-types';

const PreFooter = ({ list }) => (
  <div
    className={`column prefooter__menu-${list.flex} prefooter__menu--responsive is-desktop is-paddingless`}
  >
    <input
      className="prefooter__menu-radio"
      id={`prefooter__menu-${list.id}`}
      name="accordion"
      type="checkbox"
    />
    <label htmlFor={`prefooter__menu-${list.id}`} className="prefooter__menu-label">
      <header className="prefooter__header">
        {list.title}
      </header>
      <ul className="prefooter__menu-list">
        {list.links.map(link => (
          <a key={link.name} className="prefooter__menu-item" href={link.url}>
            {link.name}
          </a>
        ))}
      </ul>
    </label>
  </div>
);

PreFooter.propTypes = {
  list: PropTypes.instanceOf(Object).isRequired,
};

export default PreFooter;
