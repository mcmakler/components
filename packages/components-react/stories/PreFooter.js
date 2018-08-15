import React from 'react';
import { storiesOf } from '@storybook/react';
import { PreFooter } from '../src';

const preFooterList = [
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
];


storiesOf('PreFooter', module)
  .addWithInfo(
    'enabled',
    `
      This is the default pre footer for the mcmakler sites
    `,
    () => (
      <PreFooter preFooterList={preFooterList} />
    ),
  );
