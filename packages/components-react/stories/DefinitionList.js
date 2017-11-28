import React from 'react';
import { storiesOf } from '@storybook/react';
import { DefinitionList, DefinitionTerm, DefinitionData } from '../src';

storiesOf('DefinitionList', module)
  .addWithInfo(
    'information table',
    () => (
      <DefinitionList>
        <DefinitionTerm>
          Haustyp
        </DefinitionTerm>
        <DefinitionData>
          Einfamilienhaus(freihstehend)
        </DefinitionData>
        <DefinitionTerm>
          Etagenanzahl
        </DefinitionTerm>
        <DefinitionData>
          2
        </DefinitionData>
        <DefinitionTerm>
          Grundstückfläche
        </DefinitionTerm>
        <DefinitionData>
          122m<sup>2</sup>
        </DefinitionData>
      </DefinitionList>
    ),
  );
