export const personaBanner = {};
export const withBackground = {};
export const normal = {};

normal.html = `<div class="page-section">
  <h2 class="heading heading_secondary">
    Hola Mundo¡
  </h2>
  <h3 class="heading heading_tertiary">
    Ich kann auf Spanisch reden, digga!
  </h3>
  <p>
    This is a simple section with no graphic.
  </p>
</div>
`;

normal.css = `.page-section {
  position: relative;
  overflow: hidden;
  text-align: center;
  padding: 50px 0; }

  @media (min-width: 768px) {
    .page-section {
      padding: 70px 0;
      text-align: left; } }

  .page-section__header,
  .page-section > header {
    padding-bottom: 40px;
    text-align: center; }

  .page-section__mobile-header {
    margin-bottom: 40px; }

  .page-section__content {
    position: relative;
    z-index: 2; /* Important for _background */
    text-align: left; }

  .page-section__content_has-header {
    margin-top: 40px; }

  .page-section_padless-bottom {
    padding-bottom: 0; }

  .page-section:not(:first-of-type) {
    border-top: 1px solid #dadada; }

  .page-section__container {
    margin: 0 auto;
    max-width: var(--page-section__container-width); }`;

personaBanner.html = `<div class="page-section_persona persona-banner">
<div class="persona-banner__header">
  <h2 class="persona-banner__heading heading heading_secondary">
    Kaufvertrag
  </h2>
  <p class="persona-banner__header-content">
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
</div>`;

personaBanner.css = `.persona-banner {
position: relative;
padding: 80px 20px;
box-sizing: border-box;
background: #f6f6f6;
background-size: cover; }

@media (min-width: 768px) {
  .persona-banner {
    padding: 80px; +
  }
}

.persona-banner::before {
  content: '';
  position: absolute;
  top: -25px;
  left: 0;
  right: 0;
  display: block;
  margin: 0 auto;
  width: 50px;
  height: 50px;
  background: white;
  transform: rotate(45deg); 
}

.persona-banner__header {
  position: relative;
  margin: 20px auto 40px;
  padding: 20px;
  border: 1px solid #dadada;
  border-top: 0;
  box-sizing: border-box;
  text-align: center; 
}

@media (min-width: 768px) {
  .persona-banner__header {
    max-width: 50%;
    padding: 40px; 
  } 
}

.persona-banner__header::before,
.persona-banner__header::after {
  content: '';
  position: absolute;
  top: 0;
  display: block;
  height: 1px;
  width: 10px;
  background-color: #dadada; }

@media (min-width: 768px) {
  .persona-banner__header::before,
  .persona-banner__header::after {
    width: 60px; 
  } 
}

.persona-banner__header::before {
  left: 0;
}

.persona-banner__header::after {
  right: 0;
}

.persona-banner__heading {
  position: absolute;
  top: -20px;
  left: 0;
  right: 0;
  z-index: 100;
  margin: 0 auto;
  white-space: pre;
}

.persona-banner__heading + .persona-banner__header-content {
  margin: 0;
  font-family: 'Noto Serif', serif;
  font-style: italic;
  color: #aaa;
}`;

withBackground.html = `<div class="page-section page-section_background">
  <div class="columns">
    <div class="column is-6 is-offset-6">
      <h2 class="heading heading_secondary">
        Hola Mundo¡
      </h2>
      <h3 class="heading heading_tertiary">
        Ich kann auf Spanisch reden, digga!
      </h3>
      <p>
        This is a simple section with no graphic.
      </p>
    </div>
  </div>
</div>`;

withBackground.css = `.page-section_background {
  background-size: cover;
}

.page-section_background::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: block;
  width: 100%;
  height: 100%;
  background: rgba(246, 246, 246, 0.9);
}

@media (min-width: 768px) {
  .page-section_background::after {
    content: none;
  }
}

/*
  Specify the background
  in a more specific file.
*/
.my-specific-section {
  background-image: url("hello.png");
}
`;
