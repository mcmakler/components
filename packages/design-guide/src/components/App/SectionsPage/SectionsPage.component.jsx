import React from 'react';

import Page from '../Page/Page.component';
import PreviewBox from '../PreviewBox/PreviewBox.component';
import CodeSnippet from '../CodeSnippet/CodeSnippet.component';

import * as snippets from './SectionsPage.snippet';
import './SectionsPage.scss';

const SectionsPageComponent = () => (
  <Page title="Page Sections" subtitle="This is what Page Sections should look like.">
    <section className="container page-section" >
      <PreviewBox className="page-section__preview-box">
        <div className="page-section">
          <h2 className="heading heading_secondary">Hola Mundo¡</h2>
          <h3 className="heading heading_tertiary">Ich kann auf Spanisch reden, digga!</h3>
          <p>This is a simple section with no graphic. </p>
        </div>
      </PreviewBox>
      <PreviewBox className="page-section__preview-box">
        <div className="page-section">
          <div className="columns columns_center-vertical">
            <div className="column is-6-desktop">
              <div className="hide-on-tablet_landscape page-section__mobile-header">
                <img className="center-block" alt="Sup" src="https://www.mcmakler.de/images/pages/verkaufen/boardroom.jpg" />
              </div>
              <h2 className="heading heading_secondary">Kaufvertrag</h2>
              <h3
                className="heading heading_tertiary"
              >
                Professionelle Vorbereitung und Interessen verbindende Moderation
              </h3>
              <p>
                Herzlichen Glückwunsch zum erfolgreichen Verkauf Ihrer
                Immobilie - Der Käufer wird durch den Verzicht auf
                versteckte Kosten im Kaufpreis von inflationierten
                Grunderwerbssteuern und Notargebühren bewahrt.
              </p>
              <br />
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
            </div>
            <div className="column show-on-tablet_landscape is-6-desktop">
              <img className="center-block" alt="Sup" src="https://www.mcmakler.de/images/pages/verkaufen/boardroom.jpg" />
            </div>
          </div>
        </div>
      </PreviewBox>
      <PreviewBox className="page-section__preview-box">
        <div className="page-section">
          <div className="columns columns_center-vertical">
            <div className="column is-6-desktop show-on-tablet_landscape">
              <img className="center-block" alt="Sup" src="https://www.mcmakler.de/images/pages/verkaufen/customer-care-admin-ui.jpg" />
            </div>
            <div className="column is-6-desktop">
              <div className="hide-on-tablet_landscape page-section__mobile-header">
                <img className="center-block" alt="Sup" src="https://www.mcmakler.de/images/pages/verkaufen/customer-care-admin-ui.jpg" />
              </div>
              <h2 className="heading heading_secondary">Berichterstattung</h2>
              <h3
                className="heading heading_tertiary"
              >
                Regelmäßige Berichterstattung zum aktuellen Vermarktungsstand
              </h3>
              <p>
                Das Credo der täglichen Arbeit mit unseren Kunden
                bilden die regelmäßigen Reportings zu Vermarktungsstand
                und -aktivitäten, die direkte Information bei relevanten
                Ereignissen (Kaufpreisangebote, Vermarktungserkenntnisse,
                etc.) sowie die individuelle Abstimmung bei Ausweitung
                von Vermarktungsaktivitäten und erhöhter Publikation.
              </p>
            </div>
          </div>
        </div>
      </PreviewBox>
      <br />
      <div className="columns">
        <div className="column">
          <h3 className="heading heading_tertiary">HTML</h3>
          <CodeSnippet language="html">
            { snippets.normal.html }
          </CodeSnippet>
        </div>
        <div className="column">
          <h3 className="heading heading_tertiary">CSS</h3>
          <CodeSnippet language="css">
            { snippets.normal.css }
          </CodeSnippet>
        </div>
      </div>
    </section>
    <section className="container page-section" >
      <h2 className="heading heading_secondary">Persona Banner</h2>
      <PreviewBox>
        <div className="page-section_persona persona-banner">
          <div className="persona-banner__header">
            <h2 className="persona-banner__heading heading heading_secondary">
              Kaufvertrag
            </h2>
            <p className="persona-banner__header-content">
              Wir koordinieren die Unterschriften aller Mietparteien
              auf einem rechtsgültigen Vertrag.
            </p>
          </div>
          <p>Der Käufer wird durch den Verzicht auf versteckte
            Kosten im Kaufpreis von inflationierten Grunderwerbssteuern
            und Notargebühren bewahrt. Der Käufer wird durch den
            Verzicht auf versteckte Kosten im Kaufpreis von
            inflationierten Grunderwerbssteuern und Notargebühren
            bewahrt.</p>
        </div>
      </PreviewBox>
      <br />
      <div className="columns">
        <div className="column">
          <h3 className="heading heading_tertiary">HTML</h3>
          <CodeSnippet language="html">
            { snippets.personaBanner.html }
          </CodeSnippet>
        </div>
        <div className="column">
          <h3 className="heading heading_tertiary">CSS</h3>
          <CodeSnippet language="css">
            { snippets.personaBanner.css }
          </CodeSnippet>
        </div>
      </div>
    </section>
    <section className="container page-section" >
      <h2 className="heading heading_secondary">Section with Background</h2>
      <PreviewBox className="preview-box_stripped">
        <div
          className="page-section page-section_background"
        >
          <div className="columns page-section__content">
            <div className="column is-6 is-offset-6">
              <h2 className="heading heading_secondary">Hola Mundo¡</h2>
              <h3 className="heading heading_tertiary">Ich kann auf Spanisch reden, digga!</h3>
              <p>This is a simple section with no graphic. </p>
            </div>
          </div>
        </div>
      </PreviewBox>
      <br />
      <div className="columns">
        <div className="column">
          <h3 className="heading heading_tertiary">HTML</h3>
          <CodeSnippet language="html">
            { snippets.withBackground.html }
          </CodeSnippet>
        </div>
        <div className="column">
          <h3 className="heading heading_tertiary">CSS</h3>
          <CodeSnippet language="css">
            { snippets.withBackground.css }
          </CodeSnippet>
        </div>
      </div>
    </section>
  </Page>
);

export default SectionsPageComponent;
