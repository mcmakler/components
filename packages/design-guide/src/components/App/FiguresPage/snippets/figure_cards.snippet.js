export const css = `.figure_card {
  border: 1px solid #dadada; }

  .figure_card .figure__image {
    width: 100%; }

  .figure_card .figure__caption {
    margin-top: -8px;
    padding: 40px;
    background-color: white; }

  .figure_card .figure__header {
    margin-top: 0;
    margin-bottom: 20px; }

  .figure_card .figure__description {
    margin-bottom: 0; }

  .figure_card .figure__link {
    margin-left: auto;
    float: right;
    font-weight: 400;
    color: #aaa; }`;

export const html = `<figure className="figure_card">
  <img
    className="figure__image"
    alt="Placeholder"
    src="http://lorempixel.com/260/230/business/"
  />
  <figcaption className="figure__caption">
    <h4 className="figure__header">
      Vorfälligkeitsentschädigung blah
    </h4>
    <span className="fineprint">05.04.2017</span>
    <a className="figure__link">Read More</a>
  </figcaption>
</figure>`;
