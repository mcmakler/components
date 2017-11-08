export const css = `.figure {
  display: flex;
  flex-direction: column;
  margin: 0; }

  .figure .figure__caption {
    padding: 20px;
    background-color: #f6f6f6;
    text-align: left; }

  .figure .figure__description {
    margin: 0; }

  .figure + figure {
    margin-left: 20px; }

  .figure .figure__header {
    margin-top: 0; }

  .inverted .figure .figure__caption,
  .background--grey_bg .figure .figure__caption {
  background-color: #fff; }`;

export const html = `<figure className="figure">
  <img
    alt="Placeholder"
    src="http://lorempixel.com/260/230/business/"
  />
  <figcaption className="figure__caption">
    <h4 className="figure__header">
      Placeholder
    </h4>
    <p className="figure__description">
      This is my placeholder, son.
    </p>
  </figcaption>
</figure>`;
