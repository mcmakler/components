export const button = `.button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  min-height: 40px;
  padding: 0 40px;
  font-weight: 500;
  font-size: inherit;
  outline: none;
  appearance: none;
  overflow: hidden;
  cursor: pointer; }
  
  .button::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    transition: .3s transform ease;
    background-color: rgba(255, 255, 255, 0.15);
    pointer-events: none;
    will-change: transform; }
    
  .button:hover::after {
    transform: none; }
            
  .button:active {
    transform: scale(0.96); }
`;

export const buttonColors = `
  .button.button_primary {
    background-color: #feb901;
    color: white; }
    
  .button.button_positive {
    background-color: #74af53;
    color: white; }
    
  .button.button_warn {
    background-color: #e04f28;
    color: white; }`;

export const buttonLarge = `
  .button.button_large {
    padding-right: 60px;
    min-height: 60px;
    font-size: 18px; }

  .button.button_large::before {
    content: '';
    position: absolute;
    top: calc(50% - 2px);
    right: 40px;
    width: 10px;
    height: 10px;
    border-top: 2px solid currentColor;
    border-right: 2px solid currentColor;
    transform: rotate(45deg) translateY(-50%); }`;

export const buttonFluid = `.button_fluid {
  width: 100%;
}`;

export const buttonSecondary = `.button_secondary {
  border: 1px solid #aaa;
  background-color: white;
  color: #999;
}`;

export const pug = `
button.button.button_large.button_primary Very big primary button
`;
