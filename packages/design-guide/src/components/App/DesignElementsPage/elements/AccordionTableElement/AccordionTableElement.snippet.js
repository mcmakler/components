export const css = `.accordion.accordion--table .accordion__item-header {
  position: relative;
  box-sizing: border-box;
  padding-right: 64px;
  padding-left: 20px;
  transition: .15s background-color ease;
  will-change: background-color;
  background-color: #f6f6f6; }
  
  .accordion.accordion--table .accordion__item-header::before {
    content: '';
    position: absolute;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    border: 2px solid #dadada;
    border-radius: 50%;
    font-weight: 500;
    font-size: 18px;
    line-height: 0;
    color: #feb901; }

.accordion.accordion--table .accordion__item-header:hover {
  background-color: #e8e8e8; }

.accordion.accordion--table .accordion__item ~ .accordion__item > .accordion__item-header {
  border-top: 1px solid white; }

.accordion.accordion--table .accordion__item-header::before {
  content: '+';
  left: auto; }

.accordion.accordion--table .accordion__item-content {
  box-sizing: border-box;
  background-color: #f6f6f6; }

.accordion.accordion--table .accordion__radio:checked + .accordion__item > .accordion__item-content {
  margin: 0;
  padding: 40px; }

.accordion.accordion--table .accordion__radio:checked + .accordion__item > .accordion__item-header {
  background-color: #e8e8e8; }`;

export const html = `<div className="accordion accordion--table">

  <input className="accordion__radio"
         id="accordion-1"
         name="accordion"
         type="radio" />
  
  <label className="accordion__item" for="accordion-1">
  
    <header className="accordion__item-header">
      I am an accordion item
    </header>
    
    <div className="accordion__item-content">
      Hi I like accordions. They are like a polish
      instrument that you HAVE TO know how to play
      or else you cannot be polish. You have to be
      Russian.
    </div>
    
  </label>
  
</div>`;
