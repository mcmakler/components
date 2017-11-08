import React from 'react';

import Page from '../Page/Page.component';
import PreviewBox from '../PreviewBox/PreviewBox.component';
import CodeSnippet from '../CodeSnippet/CodeSnippet.component';

import { html, css } from './snippets/figures.snippet';

import './FiguresPage.scss';

export default () => (
  <Page
    title="Figures"
    className="figures-page"
    subtitle="This is what figures should look like"
  >
    <div className="container page-section" >
      <div className="columns">
        <div className="column">
          <CodeSnippet language="html">
            { html }
          </CodeSnippet>
          <br />
          <CodeSnippet language="css">
            { css }
          </CodeSnippet>
        </div>
        <div className="column">
          <PreviewBox className="center">
            <figure className="figure">
              <img
                alt="Placeholder"
                src="http://lorempixel.com/260/230/business/"
              />
              <figcaption className="figure__caption">
                <h4 className="figure__header">Placeholder</h4>
                <p className="figure__description">This is my placeholder, son.</p>
              </figcaption>
            </figure>
          </PreviewBox>
          <PreviewBox className="background_bg center">
            <figure className="figure">
              <img
                alt="Placeholder"
                src="http://lorempixel.com/260/230/business/"
              />
              <figcaption className="figure__caption">
                <h4 className="figure__header">Placeholder</h4>
                <p className="figure__description">This is my placeholder, son.</p>
              </figcaption>
            </figure>
          </PreviewBox>
        </div>
      </div>
      <hr />

      <section className="page-section">
        <header>
          <h2 className="heading heading_secondary">Figure Cards</h2>
          <p>
            Used in:&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://projects.invisionapp.com/d/main#/console/5351634/232128360/preview"
            >
              McMakler Blog
            </a>
          </p>
        </header>
        <div className="columns">
          <div className="column">
            <CodeSnippet language="html">
              { html }
            </CodeSnippet>
            <br />
            <CodeSnippet language="css">
              { css }
            </CodeSnippet>
          </div>
          <div className="column">
            <PreviewBox className="background_bg center">
              <figure className="figure figure_card">
                <img
                  className="figure__image"
                  alt="Placeholder"
                  src="http://lorempixel.com/260/230/business/"
                />
                <figcaption className="figure__caption figure__caption_card">
                  <h4 className="figure__header">
                    Vorfälligkeitsentschädigung – lohnt sich der vorzeitige Ausstieg?
                  </h4>
                  <span className="fineprint">05.04.2017</span>
                  <a className="figure__link">Read More</a>
                </figcaption>
              </figure>
            </PreviewBox>
          </div>
        </div>
      </section>
    </div>
  </Page>);
