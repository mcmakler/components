import React from 'react';

import CodeSnippet from '../../../CodeSnippet/CodeSnippet.component';
import PreviewBox from '../../../PreviewBox/PreviewBox.component';
import { css, html } from './InfoboxElement.snippet';

export default () => (
  <section className="page-section" >
    <header>
      <h2 className="heading heading_secondary">Infobox</h2>
    </header>
    <PreviewBox className="center" >
      <div className="columns infobox__container" style={{ width: '100%' }}>
        <div className="infobox">
          <header className="infobox__header">70%</header>
          <p className="infobox__content">mehr Ertag</p>
        </div>
        <div className="infobox">
          <header className="infobox__header">5x</header>
          <p className="infobox__content">more skillz than 2016</p>
        </div>
        <div className="infobox">
          <header className="infobox__header">?</header>
          <p className="infobox__content">u wot m8</p>
        </div>
      </div>
    </PreviewBox>
    <div className="columns design-elements-page__code-block" >
      <div className="column is-one-third" >
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
