import React from 'react';

import CodeSnippet from '../../../CodeSnippet/CodeSnippet.component';
import PreviewBox from '../../../PreviewBox/PreviewBox.component';
import { css, html } from './AnchorListElement.snippet';

export default () => (
  <section className="page-section" >
    <header>
      <h2 className="heading heading_secondary">Anchor List</h2>
    </header>
    <PreviewBox className="center" >
      <ul className="anchor-list">
        <li className="anchor-list__item">Hi, I like pies.</li>
        <li className="anchor-list__item">Life is short.</li>
        <li className="anchor-list__item">Live it well.</li>
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
