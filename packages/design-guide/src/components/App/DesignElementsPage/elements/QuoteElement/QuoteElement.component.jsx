import React from 'react';

import CodeSnippet from '../../../CodeSnippet/CodeSnippet.component';
import PreviewBox from '../../../PreviewBox/PreviewBox.component';
import { css, html } from './QuoteElement.snippet';

export default () => (
  <section className="page-section" >
    <header>
      <h2 className="heading heading_secondary">Quotes</h2>
    </header>
    <PreviewBox className="center" >
      <blockquote className="quote">
        <p className="quote__content" >Jews and Mexicans are the same. They are not me,
          they are not orange. Therefore, they are the same.</p>
        <cite className="quote__citation" >Donald Trump</cite>
      </blockquote>
      <blockquote className="quote quote_boxed background--grey_bg">
        <p className="quote__content" >The ladies call me Captain Sexy
          because I write so much beautiful Javascript that they
          instantly fall in love with me.</p>
        <cite className="quote__citation" >Sai Baba Satchitanand</cite>
      </blockquote>
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
