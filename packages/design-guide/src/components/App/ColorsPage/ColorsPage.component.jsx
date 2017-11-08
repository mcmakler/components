import React from 'react';
import Page from '../Page/Page.component';
import ColorSnippet from '../ColorSnippet/ColorSnippet.component';
import './ColorsPage.scss';

export default () => (
  <Page
    title="Color Scheme"
    className="colors-page"
    subtitle="Definition of Colors"
  >
    <div className="container">
      <section className="page-section columns">
        <div className="column">
          <ColorSnippet color="#222222">
            <h5 className="heading heading_quinary">Used for</h5>
            Headlines (H1, H2, H3, H4)
          </ColorSnippet>
          <ColorSnippet color="#333333">
            <h5 className="heading heading_quinary">Used for</h5>
            Bodytext, Navigation Links
          </ColorSnippet>
          <ColorSnippet color="#999999">
            <h5 className="heading heading_quinary">Used for</h5>
            Secondary Button Text, Footer Text & Inverted Text
          </ColorSnippet>
          <ColorSnippet color="#aaaaaa">
            <h5 className="heading heading_quinary">Used for</h5>
            Quote, H5, Secondary Button Border
          </ColorSnippet>
          <ColorSnippet color="#dadada" textColor="black">
            <h5 className="heading heading_quinary">Used for</h5>
            Lines
          </ColorSnippet>
          <ColorSnippet color="#e8e8e8" textColor="black">
            <h5 className="heading heading_quinary">Used for</h5>
            Table Heading Background
          </ColorSnippet>
          <ColorSnippet color="#f6f6f6" textColor="black" border>
            <h5 className="heading heading_quinary">Used for</h5>
            Secondary Background Color
          </ColorSnippet>
          <ColorSnippet color="#ffffff" textColor="black" border>
            <h5 className="heading heading_quinary">Used for</h5>
            Primary Background Color
          </ColorSnippet>
        </div>
        <div className="column">
          <ColorSnippet color="#feb901">
            <h5 className="heading heading_quinary">Used for</h5>
            Buttons, Highlighted Text
          </ColorSnippet>
          <ColorSnippet color="#74af53">
            <h5 className="heading heading_quinary">Used for</h5>
            Positivity, Success
          </ColorSnippet>
          <ColorSnippet color="#e04f28">
            <h5 className="heading heading_quinary">Used for</h5>
            Errors, Warnings
          </ColorSnippet>
        </div>
      </section>
    </div>
  </Page>);
