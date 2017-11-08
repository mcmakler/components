import React from 'react';

import CodeSnippet from '../../../CodeSnippet/CodeSnippet.component';
import PreviewBox from '../../../PreviewBox/PreviewBox.component';
import { css, html } from './AccordionTableElement.snippet';

export default () => (
  <section className="page-section" >
    <header>
      <h2 className="heading heading_secondary">Accordion Table</h2>
    </header>
    <PreviewBox className="center" >
      <div className="accordion accordion_table" style={{ width: 400 }} >
        <input type="radio" id="accordion-4" className="accordion__radio" name="accordion" />
        <label htmlFor="accordion-4" className="accordion__item" >
          <header className="accordion__item-header accordion__item-header_table" >
            I am an accordion item
          </header>
          <div className="accordion__item-content accordion__item-content_table" >
            Hi I like accordions. They are like a polish instrument
            that you HAVE TO know how to play or else you cannot be
            polish. You have to be Russian. I hope you enjoyed reading
            this. If you did, please go away and smile at someone.
          </div>
        </label>
        <input type="radio" id="accordion-5" className="accordion__radio" name="accordion" />
        <label htmlFor="accordion-5" className="accordion__item" >
          <header className="accordion__item-header accordion__item-header_table" >
            I am an accordion item
          </header>
          <div className="accordion__item-content accordion__item-content_table" >
            Hi I like accordions. They are like a polish instrument
            that you HAVE TO know how to play or else you cannot be
            polish. You have to be Russian. I hope you enjoyed reading
            this. If you did, please go away and smile at someone.
          </div>
        </label>
        <input type="radio" id="accordion-6" className="accordion__radio" name="accordion" />
        <label htmlFor="accordion-6" className="accordion__item" >
          <header className="accordion__item-header accordion__item-header_table" >
            I am an accordion item
          </header>
          <div className="accordion__item-content accordion__item-content_table" >
            Hi I like accordions. They are like a polish instrument
            that you HAVE TO know how to play or else you cannot be
            polish. You have to be Russian. I hope you enjoyed reading
            this. If you did, please go away and smile at someone.
          </div>
        </label>
      </div>
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
