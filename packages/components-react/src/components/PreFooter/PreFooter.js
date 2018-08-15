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
  preFooterList: PropTypes.instanceOf(Object),
};

PreFooter.defaultProps = {
  preFooterList: [
    {
      id: 0,
      flex: 1,
      title: 'McMakler',
      links: [
        { name: 'Verkaufen', url: '' },
        { name: 'Vermieten', url: '' },
        { name: 'Immobilienbewertung', url: '' },
        { name: 'Unsere Immobilien', url: '' },
        { name: 'Energieausweis', url: '' },
        { name: 'Partnerprogramm', url: '' },
      ],
    },
    {
      id: 1,
      flex: 2,
      title: 'Beliebt im Ratgeber',
      links: [
        { name: 'Energieausweis: Alle wichtigen Informationen', url: '' },
        { name: 'Grunderwerbsteuer: So können Sie sich richtig viel Geld sparen', url: '' },
        { name: 'Schenkungssteuer und Freibeträge bei Immobilien: 4 Tipps', url: '' },
        { name: 'Worauf ist beim Kaufvertrag für eine Immobilie zu achten?', url: '' },
        { name: 'Grundbuchauszug anfordern: Das müssen Sie wissen', url: '' },
        { name: 'Immobilienwertrechner: Kostenlos Immobilienwert berechnen', url: '' },
      ],
    },
  ],
};

export default PreFooter;
