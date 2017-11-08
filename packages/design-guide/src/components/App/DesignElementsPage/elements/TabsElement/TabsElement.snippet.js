export const css = `.tabs {
  min-height: 175px; /* sucks. */
  padding: 20px;
  box-sizing: border-box; }
  
  .tabs .tabs__tab-container {
    position: relative;
    display: flex; }
    
  .tabs .tabs__tab + .tabs__tab {
    margin-left: 20px; }
    
  .tabs .tabs__radio {
    display: none; }
    
  .tabs .tabs__link {
    position: relative;
    display: block;
    font-weight: 400;
    cursor: pointer; }
    
  .tabs .tabs__tab-header::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 2px;
    transform: scale(0);
    transform-origin: left;
    transition: transform .3s ease;
    will-change: transform;
    background-color: currentColor; }
    
  .tabs .tabs__link:hover > .tabs__tab-header::after {
    opacity: .2;
    transform: scaleX(0.5); }
    
  .tabs .tabs__radio:checked + .tabs__link {
    font-weight: 500; }
    
  .tabs .tabs__radio:checked + .tabs__link > .tabs__tab-header::after {
    transform: none;
    opacity: 1; }
    
  .tabs .tabs__radio:checked + .tabs__link + .tabs__tab-content {
    display: block; }
    
  .tabs .tabs__tab-content {
    position: absolute;
    top: 40px;
    left: 0;
    display: none;
    font-weight: 300; }`;

export const html = `
<div className="tabs">
  <div className="tabs__tab-container">
  
    <!-- Repeat this for each tab -->
    <div className="tabs__tab">
      <input 
        className="tabs__radio"
        type="radio"
        name="tab"
        id="tab-1"
        checked
      >
      <label className="tabs__link" for="tab-1">
        <header className="tabs__tab-header">Tab 1</header>
      </label>
      <div className="tabs__tab-content">
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit.
        Adipisci consequuntur
        cupiditate dignissimos
      </div>
    </div>
    <!-- End Repeat -->
    
  </div>
</div>
`;
