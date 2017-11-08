import React from 'react';

import Page from '../Page/Page.component';
import PreviewBox from '../PreviewBox/PreviewBox.component';
import CodeSnippet from '../CodeSnippet/CodeSnippet.component';
import { html, css } from './snippets/timeline.snippet';

import './TimelinePage.scss';

const TimelinePage = () => (
  <Page title="Timeline" subtitle="One line connects all of us. #philosophy" >
    <section className="container page-section" >
      <PreviewBox>
        <div className="timeline" >
          <div className="timeline__items" >
            <div className="timeline__item" >
              <img
                className="timeline__image"
                alt="Placeholder"
                src="http://lorempixel.com/260/230/business/"
              />
              <h4 className="timeline__heading">Gründung</h4>
              <h5 className="timeline__subheading">Sup dawg</h5>
              <hr className="timeline__line timeline__line_start" />
              <p className="timeline__content">
                I love music so much it’s one of my favorite things on the planet duuuuuude
              </p>
            </div>
            <div className="timeline__item" >
              <img
                className="timeline__image"
                alt="Placeholder"
                src="http://lorempixel.com/260/230/business/"
              />
              <h4 className="timeline__heading">Gründung</h4>
              <h5 className="timeline__subheading">Sup dawg</h5>
              <hr className="timeline__line" />
              <p className="timeline__content">
                I love music so much it’s one of my favorite things on the planet duuuuuude
              </p>
            </div>
            <div className="timeline__item" >
              <img
                className="timeline__image"
                alt="Placeholder"
                src="http://lorempixel.com/260/230/business/"
              />
              <h4 className="timeline__heading">Gründung</h4>
              <h5 className="timeline__subheading">Sup dawg</h5>
              <hr className="timeline__line" />
              <p className="timeline__content">
                I love music so much it’s one of my favorite things on the planet duuuuuude
              </p>
            </div>
            <div className="timeline__item" >
              <img
                className="timeline__image"
                alt="Placeholder"
                src="http://lorempixel.com/260/230/business/"
              />
              <h4 className="timeline__heading">Gründung</h4>
              <h5 className="timeline__subheading">Sup dawg</h5>
              <hr className="timeline__line" />
              <p className="timeline__content">
                I love music so much it’s one of my favorite things on the planet duuuuuude
              </p>
            </div>
            <div className="timeline__item" >
              <img
                className="timeline__image"
                alt="Placeholder"
                src="http://lorempixel.com/260/230/business/"
              />
              <h4 className="timeline__heading">Gründung</h4>
              <h5 className="timeline__subheading">Sup dawg</h5>
              <hr className="timeline__line timeline__line_end" />
              <p className="timeline__content">
                I love music so much it’s one of my favorite things on the planet duuuuuude
              </p>
            </div>
          </div>
        </div>
      </PreviewBox>
    </section>
    <section className="container page-section columns">
      <div className="column">
        <CodeSnippet language="html">
          { html }
        </CodeSnippet>
      </div>
      <div className="column">
        <CodeSnippet language="css">
          { css }
        </CodeSnippet>
      </div>
    </section>
  </Page>
);

export default TimelinePage;
