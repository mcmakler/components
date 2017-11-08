export const css = `.question {
  position: relative;
  box-sizing: border-box;
  padding-left: 62px;
  padding: 40px 40px 40px 85px; }

  .question::before {
    content: "";
    position: absolute;
    left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    border: 2px solid #dadada;
    border-radius: 50%;
    font-weight: 500;
    font-size: 16px;
    line-height: 0;
    color: #feb901; }

  .question::before {
    content: "?";
    top: 49px;
    left: 40px; }

  .question .question__title {
    display: block;
    margin-top: 8px;
    font-family: "Noto Serif";
    font-weight: 500;
    font-style: italic;
    font-size: 17px;
    line-height: 1.674; }`;

export const html = `
<div className="question">
  <header className="question__title">
    Why are Indians like cockroaches?
  </header>
  <p className="question__content">
    Because there are so many of them.
    Look under your table — there is probably an Indian there!
    Also, I need a third line so I am writing more.
  </p>
</div>
`;
