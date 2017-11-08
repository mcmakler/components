import React from 'react';

import CodeSnippet from '../../../CodeSnippet/CodeSnippet.component';
import PreviewBox from '../../../PreviewBox/PreviewBox.component';
import { css, html } from './TabsElement.snippet';

export default () => (
  <section className="page-section" >
    <header>
      <h2 className="heading heading_secondary">Tabs</h2>
    </header>
    <PreviewBox className="center" >
      <div className="tabs" style={{ width: 480 }}>
        <div className="tabs__tab-container">
          <div className="tabs__tab">
            <input defaultChecked className="tabs__radio" type="radio" name="tab" id="tab-1" />
            <label className="tabs__link" htmlFor="tab-1">
              <header className="tabs__tab-header">Tab 1</header>
            </label>
            <div className="tabs__tab-content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Adipisci consequuntur cupiditate dignissimos ea eaque eos
              explicabo facere impedit iusto modi, nam necessitatibus
              pariatur perspiciatis placeat praesentium provident
              quasi quos voluptatibus.
            </div>
          </div>
          <div className="tabs__tab">
            <input className="tabs__radio" type="radio" name="tab" id="tab-2" />
            <label className="tabs__link" htmlFor="tab-2">
              <header className="tabs__tab-header">Tab 2</header>
            </label>
            <div className="tabs__tab-content">
              I need different text than lorem ipsum so you can
              see the difference between tabs. I am doing this literally
              ALL FOR YOU. SAY THANK YOU OR SOMETHING YOU TROLL.
            </div>
          </div>
          <div className="tabs__tab">
            <input className="tabs__radio" type="radio" name="tab" id="tab-3" />
            <label className="tabs__link" htmlFor="tab-3">
              <header className="tabs__tab-header">Tab 3</header>
            </label>
            <div className="tabs__tab-content">
              So... so you go to Tab 3 without even saying thank you
              for Tab 2? Wow... how can you be this way? You know what...
              nevermind. I am done. Bye. Forever. &lt;/3
            </div>
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
