import React from 'react';

import Page from '../Page/Page.component';
import CodeSnippet from '../CodeSnippet/CodeSnippet.component';

import './GridPage.scss';

import htmlTemplate from './snippets/grid.snippet';

const GridPageComponent = () => (
  <Page title="Grid/Margin/Padding" subtitle="Definition of the Grid, Margin and Padding">
    <section className="container page-section" >

      <header>
        <h2 className="heading heading_secondary">Grid Explained</h2>
      </header>

      <div className="grid-page__sample-grid container columns" >
        {[...Array(12).keys()].map(key => (
          <div key={key} className="grid-page__sample-column column" />
        ))}
      </div>

      <div className="grid-page__code-block container columns" >
        <div className="column page-section">
          <header><h3 className="heading heading_tertiary">HTML</h3></header>
          <CodeSnippet language="html" >
            {htmlTemplate}
          </CodeSnippet>
        </div>
      </div>

    </section>
  </Page>
);

export default GridPageComponent;
