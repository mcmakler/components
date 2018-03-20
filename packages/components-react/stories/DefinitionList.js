import React from 'react';
import { storiesOf } from '@storybook/react';
import { DefinitionList } from '../src';

storiesOf('DefinitionList', module)
  .addWithInfo(
    'information table',
    () => (
      <DefinitionList
        items={[
          { term: 'Haustyp', data: 'House' },
          { term: 'Etagenanzahl', data: 2 },
          { term: 'Grundstückfläche', data: `122m${'2'.sup()}` },
        ]}
      />
    ),
  );
