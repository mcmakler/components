export const css = `.checkmark-list--table .checkmark-list__item {
  padding: 10px 48px 10px 20px;
  background-color: #f6f6f6; }

.checkmark-list--table .checkmark-list__item + .checkmark-list__item {
  margin-top: 0;
  border-top: 1px solid white; }

.checkmark-list--table .checkmark-list__item::before {
  top: 11px; }

.checkmark-list--table .checkmark-list__item::before {
  left: auto;
  right: 20px; }`;

export const html = `<ul className="checkmark-list checkmark-list--table">
    <li className="checkmark-list__item">
      Hi, I like pies.
    </li>
    <li className="checkmark-list__item">
      Life is short.
    </li>
    <li className="checkmark-list__item">
      Live it well.
    </li>
  </ul>`;
