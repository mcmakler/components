import React from 'react';

import CodeSnippet from '../../../CodeSnippet/CodeSnippet.component';
import PreviewBox from '../../../PreviewBox/PreviewBox.component';
import { css, html } from './LineGraphElement.snippet';

export default () => (
  <section className="page-section" >
    <header>
      <h2 className="heading heading_secondary">Line Graph</h2>
    </header>
    <PreviewBox className="center" >
      <div className="line-graph">
        <div className="line-graph__item">
          <div className="line-graph__info">
            <span className="line-graph__label">Berlin</span>
            <p className="line-graph__value">50%</p>
          </div>
          <div className="line-graph__bar-base">
            <div className="line-graph__bar-value" style={{ width: '50%' }} />
          </div>
        </div>
        <div className="line-graph__item">
          <div className="line-graph__info">
            <span className="line-graph__label">Dresden</span>
            <p className="line-graph__value">23%</p>
          </div>
          <div className="line-graph__bar-base">
            <div className="line-graph__bar-value" style={{ width: '23%' }} />
          </div>
        </div>
        <div className="line-graph__item">
          <div className="line-graph__info">
            <span className="line-graph__label">Leipzig</span>
            <p className="line-graph__value">27%</p>
          </div>
          <div className="line-graph__bar-base">
            <div className="line-graph__bar-value" style={{ width: '27%' }} />
          </div>
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
