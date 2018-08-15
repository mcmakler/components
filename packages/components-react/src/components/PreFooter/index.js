import React from 'react';
import PropTypes from 'prop-types';
import LinkList from './LinkList';

import './PreFooter.scss';

const PreFooter = ({ preFooterList }) => (
  <footer className="prefooter prefooter--light prefooter--links-section">
    <div className="container is-paddingless">
      <div className="columns is-marginless is-paddingless">
        {preFooterList.map(list => (
          <LinkList key={list.id} list={list} />
        ))}
      </div>
    </div>
  </footer>
);

PreFooter.propTypes = {
  preFooterList: PropTypes.instanceOf(Object).isRequired,
};

export default PreFooter;
