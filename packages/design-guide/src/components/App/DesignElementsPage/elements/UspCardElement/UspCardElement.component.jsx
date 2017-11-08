import React from 'react';

import CodeSnippet from '../../../CodeSnippet/CodeSnippet.component';
import PreviewBox from '../../../PreviewBox/PreviewBox.component';

import './UspCardElement.scss';

import { html, css } from './UspCardElement.snippet';

export default () => (
  <section className="page-section" >
    <header>
      <h2 className="heading heading_secondary">USP Cards</h2>
    </header>
    <PreviewBox className="center" >
      <div className="columns columns_wrap">
        <div className="column is-6 is-4-tablet is-4-desktop">
          <div className="usp-card">
            <h4 className="heading heading_quarternary">Vermarktungskompetenz</h4>
            <hr className="usp-card__separator" />
            <p>
              Durchgehende Betreuung<br />
              Ständige Erreichbarkeit<br />
              Individueller Fokus auf Ihr Objekt
            </p>
          </div>
        </div>
        <div className="column is-6 is-4-tablet is-4-desktop">
          <div className="usp-card">
            <h4 className="heading heading_quarternary">Vermarktungskompetenz</h4>
            <hr className="usp-card__separator" />
            <p>
              Durchgehende Betreuung<br />
              Ständige Erreichbarkeit<br />
              Individueller Fokus auf Ihr Objekt
            </p>
          </div>
        </div>
        <div className="column is-6 is-4-tablet is-4-desktop">
          <div className="usp-card">
            <h4 className="heading heading_quarternary">Vermarktungskompetenz</h4>
            <hr className="usp-card__separator" />
            <p>
              Durchgehende Betreuung<br />
              Ständige Erreichbarkeit<br />
              Individueller Fokus auf Ihr Objekt
            </p>
          </div>
        </div>
        <div className="column is-6 is-4-tablet is-4-desktop">
          <div className="usp-card">
            <h4 className="heading heading_quarternary">Vermarktungskompetenz</h4>
            <hr className="usp-card__separator" />
            <p>
              Durchgehende Betreuung<br />
              Ständige Erreichbarkeit<br />
              Individueller Fokus auf Ihr Objekt
            </p>
          </div>
        </div>
        <div className="column is-6 is-4-tablet is-4-desktop">
          <div className="usp-card">
            <h4 className="heading heading_quarternary">Vermarktungskompetenz</h4>
            <hr className="usp-card__separator" />
            <p>
              Durchgehende Betreuung<br />
              Ständige Erreichbarkeit<br />
              Individueller Fokus auf Ihr Objekt
            </p>
          </div>
        </div>
        <div className="column is-6 is-4-tablet is-4-desktop">
          <div className="usp-card">
            <h4 className="heading heading_quarternary">Vermarktungskompetenz</h4>
            <hr className="usp-card__separator" />
            <p>
              Durchgehende Betreuung<br />
              Ständige Erreichbarkeit<br />
              Individueller Fokus auf Ihr Objekt
            </p>
          </div>
        </div>
        <div className="column is-6 is-4-tablet is-4-desktop">
          <div className="usp-card">
            <h4 className="heading heading_quarternary">Vermarktungskompetenz</h4>
            <hr className="usp-card__separator" />
            <p>
              Durchgehende Betreuung<br />
              Ständige Erreichbarkeit<br />
              Individueller Fokus auf Ihr Objekt
            </p>
          </div>
        </div>
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
