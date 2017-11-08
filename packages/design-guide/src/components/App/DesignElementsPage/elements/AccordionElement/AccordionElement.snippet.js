export const css = `.accordion .accordion__radio {
  display: none; }

.accordion .accordion__item {
  display: block; }

.accordion .accordion__item-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 40px;
  text-align: left;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  padding-left: 44px; }
  
  .accordion .accordion__item-header::before {
    content: '';
    position: absolute;
    left: 0;
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

.accordion .accordion__item-header::before {
  content: '+';
  top: 6px;
  transition: border-color .1s ease;
  will-change: border-color; }

.accordion .accordion__item-header:hover::before {
  border-color: #feb901; }

.accordion .accordion__radio:checked + .accordion__item > .accordion__item-header::before {
  content: '–'; }

.accordion .accordion__item-content {
  box-sizing: border-box;
  height: 0;
  overflow: hidden;
  transition: .6s opacity ease, .3s transform ease;
  will-change: opacity, transform;
  transform: translateY(20px);
  opacity: 0; }

.accordion .accordion__radio:checked + .accordion__item > .accordion__item-content {
  height: auto;
  margin: 10px 0;
  opacity: 1;
  transform: none; }`;

export const html = `<div className="accordion">

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
