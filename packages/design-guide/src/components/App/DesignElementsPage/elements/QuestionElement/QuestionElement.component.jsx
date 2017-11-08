import React from 'react';

import CodeSnippet from '../../../CodeSnippet/CodeSnippet.component';
import PreviewBox from '../../../PreviewBox/PreviewBox.component';
import { css, html } from './QuestionElement.snippet';

export default () => (
  <section className="page-section" >
    <header>
      <h2 className="heading heading_secondary">Questions</h2>
    </header>
    <PreviewBox className="center" >
      <div className="question" style={{ maxWidth: 480 }} >
        <header className="question__title" >Why are Indians like cockroaches?</header>
        <p className="question__content" >Because there are so many of them.
          Look under your table &mdash; there is probably an Indian there!
          Also, I need a third line so I am writing more.
        </p>
      </div>
      <div className="question question_boxed background--grey_bg" style={{ maxWidth: 480 }} >
        <header
          className="question__title question__title_boxed"
        >Why are Germans like machines?</header>
        <p className="question__content question__content_boxed">Workaholics. They feel a compulsive
        need to build things since World War 2, so they become very
        &ldquo;efficient&rdquo;. With beer.</p>
      </div>
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
