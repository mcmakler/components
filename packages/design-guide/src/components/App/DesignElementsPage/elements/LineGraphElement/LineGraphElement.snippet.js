export const css = `.line-graph {
  width: 320px;
  max-width: 100%; }
  
.line-graph .line-graph__item + .line-graph__item {
  margin-top: 20px; }
  
.line-graph .line-graph__info {
  display: flex;
  align-items: flex-end; }
  
.line-graph .line-graph__label {
  margin-right: auto;
  line-height: 1;
  font-weight: 500;
  font-size: 12px;
  color: #aaa; }
  
.line-graph .line-graph__value {
  margin: 0 0 0 auto;
  line-height: 1;
  font-family: "Noto Serif";
  font-size: 22px; }
  
.line-graph .line-graph__bar-base {
  position: relative;
  width: 100%;
  height: 6px;
  margin-top: 5px;
  background-color: #f6f6f6; }
  
.line-graph .line-graph__bar-value {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #feb901;
  transform-origin: left;
  animation: fill-width .6s ease forwards; }

/* Animation */
@keyframes fill-width {
  from {
    transform: scaleX(0); }
  to {
    transform: scaleX(1); } }`;

export const html = `<div className="line-graph">
  <div className="line-graph__item">
    <div className="line-graph__info">
      <span className="line-graph__label">
        Berlin
      </span>
      <p className="line-graph__value">
        50%
      </p>
    </div>
    <div className="line-graph__bar-base">
      <div className="line-graph__bar-value" style="width: 50%;"></div>
    </div>
  </div>
</div>`;
