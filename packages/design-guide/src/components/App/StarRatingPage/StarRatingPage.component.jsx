import React from 'react';

import Page from '../Page/Page.component';
import PreviewBox from '../PreviewBox/PreviewBox.component';
import CodeSnippet from '../CodeSnippet/CodeSnippet.component';

import { html, css } from './snippets/starrating.snippet';

import './StarRatingPage.scss';

export const styles = {
  percentages: {
    one: {
      width: `${(1 / 5) * 100}%`,
    },
    two: {
      width: `${(2 / 5) * 100}%`,
    },
    three: {
      width: `${(3 / 5) * 100}%`,
    },
    four: {
      width: `${(4 / 5) * 100}%`,
    },
    five: {
      width: `${(5 / 5) * 100}%`,
    },
  },
};

export default () => (
  <Page
    title="Star Rating"
    className="star-rating"
    subtitle="Reusuable star rating component"
  >
    <section className="container page-section">
      <section className="columns">
        <article className="column">
          <CodeSnippet language="html">
            { html }
          </CodeSnippet>
          <br />
          <CodeSnippet language="css">
            { css }
          </CodeSnippet>
        </article>
        <article className="column">
          <PreviewBox>
            <div className="stars-rating columns columns_center-vertical">
              <div className="stars">
                <div className="stars__filled" style={styles.percentages.one}>
                  &#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</div>
                <div className="stars__empty">&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</div>
              </div>
              <div className="rating">
                1/5
              </div>
            </div>
            <br />
            <div className="stars-rating columns columns_center-vertical">
              <div className="stars">
                <div className="stars__filled" style={styles.percentages.two}>
                  &#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</div>
                <div className="stars__empty">&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</div>
              </div>
              <div className="rating">
                2/5
              </div>
            </div>
            <br />
            <div className="stars-rating columns columns_center-vertical">
              <div className="stars">
                <div className="stars__filled" style={styles.percentages.three}>
                  &#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</div>
                <div className="stars__empty">&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</div>
              </div>
              <div className="rating">
                3/5
              </div>
            </div>
            <br />
            <div className="stars-rating columns columns_center-vertical">
              <div className="stars">
                <div className="stars__filled" style={styles.percentages.four}>
                  &#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</div>
                <div className="stars__empty">&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</div>
              </div>
              <div className="rating">
                4/5
              </div>
            </div>
            <br />
            <div className="stars-rating columns columns_center-vertical">
              <div className="stars">
                <div className="stars__filled" style={styles.percentages.five}>
                  &#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</div>
                <div className="stars__empty">&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</div>
              </div>
              <div className="rating">
                5/5
              </div>
            </div>
            <br />
          </PreviewBox>
        </article>
      </section>
    </section>
  </Page>
);
