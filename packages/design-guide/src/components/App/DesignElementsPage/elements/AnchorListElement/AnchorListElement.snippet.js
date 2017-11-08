export const css = `.anchor-list {
  list-style-type: none;
  margin: 0;
  padding: 0; }
  
  .anchor-list .anchor-list__item {
    font-weight: 500;
    position: relative;
    box-sizing: border-box;
    padding-left: 58px; }
    
    .anchor-list .anchor-list__item::before {
      content: '';
      position: absolute;
      left: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 18px;
      height: 18px;
      border: 2px solid #dadada;
      border-radius: 50%;
      font-weight: 500;
      font-size: 18px;
      line-height: 0;
      color: #feb901; }
      
  .anchor-list .anchor-list__item::after {
    content: '';
    position: absolute;
    top: 10px;
    left: 29px;
    display: block;
    width: 4px;
    height: 4px;
    border-top: 2px solid #feb901;
    border-right: 2px solid #feb901;
    transform: rotate(45deg); }
    
  .anchor-list .anchor-list__item + .anchor-list__item {
    margin-top: 17px; }`;

export const html = `<ul className="anchor-list">
    <li className="anchor-list__item">Hi, I like pies.</li>
    <li className="anchor-list__item">Life is short.</li>
    <li className="anchor-list__item">Live it well.</li>
  </ul>`;
