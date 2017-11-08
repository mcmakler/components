import React from 'react';

import CodeSnippet from '../../../CodeSnippet/CodeSnippet.component';
import PreviewBox from '../../../PreviewBox/PreviewBox.component';
import { css, html } from './CheckmarkTableElement.snippet';

export default () => (
  <section className="page-section" >
    <header>
      <h2 className="heading heading_secondary">Checkmark Table</h2>
    </header>
    <PreviewBox className="center" >
      <ul className="checkmark-list checkmark-list_table">
        <li className="checkmark-list__item checkmark-list__item_table">Hi, I like pies.</li>
        <li className="checkmark-list__item checkmark-list__item_table">Life is short.</li>
        <li className="checkmark-list__item checkmark-list__item_table">Live it well.</li>
      </ul>
    </PreviewBox>
    <div className="columns design-elements-page__code-block" >
      <div className="column is-half" >
        <header>
          <h3 className="heading heading_tertiary">CSS</h3>
        </header>
        <CodeSnippet language="css" >
          { css }
        </CodeSnippet>
      </div>
      <div className="column" >
        <header>
          <h3 className="heading heading_tertiary">HTML</h3>
        </header>
        <CodeSnippet language="html" >
          { html }
        </CodeSnippet>
      </div>
    </div>
  </section>
);
