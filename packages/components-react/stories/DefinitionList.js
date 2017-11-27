import React from 'react';
import { storiesOf } from '@storybook/react';
import { DefinitionList, DefinitionTerm, DefinitionData } from '../src';

storiesOf('DefinitionList', module)
  .addWithInfo(
    'information table',
    () => (
      <DefinitionList
        className="informationtable"
      >
        <DefinitionTerm className="informationtable__term">
          Haustyp
        </DefinitionTerm>
        <DefinitionData className="informationtable__data">
          Einfamilienhaus(freihstehend)
        </DefinitionData>
        <DefinitionTerm className="informationtable__term">
          Etagenanzahl
        </DefinitionTerm>
        <DefinitionData className="informationtable__data">
          2
        </DefinitionData>
        <DefinitionTerm className="informationtable__term">
          Grundstückfläche
        </DefinitionTerm>
        <DefinitionData className="informationtable__data">
          122m<sup>2</sup>
        </DefinitionData>
      </DefinitionList>
    ),
  );
