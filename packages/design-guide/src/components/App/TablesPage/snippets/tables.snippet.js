export const css = `table {
  border-collapse: collapse; }
  
  table tr {
    min-height: 50px; }
    
  table td {
    box-sizing: border-box;
    padding: 16px 20px;
    border: 2px solid white;
    line-height: 1; }
    
  table thead tr td {
    font-size: 13px;
    font-weight: 700;
    color: #aaa;
    background-color: #e8e8e8; }
    
  table tbody tr td {
    background-color: #f6f6f6; }

.inverted table td,
.background--grey_bg table td {
  border-color: #f6f6f6; }

.inverted table thead td,
.background--grey_bg table thead td {
  border-bottom: none; }

.inverted table tbody tr:first-child td,
.background--grey_bg table tbody tr:first-child td {
  border-top: none; }

.inverted table tbody td,
.background--grey_bg table tbody td {
  background-color: white; }`;

export const html = `<table>
  <thead>
    <tr>
      <td>Jahr</td>
      <td>Preis</td>
      <td>Fläche</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2016</td>
      <td>50.000 €</td>
      <td>92m</td>
    </tr>
    <tr>
      <td>2016</td>
      <td>50.000 €</td>
      <td>92m</td>
    </tr>
    <tr>
      <td>2016</td>
      <td>50.000 €</td>
      <td>92m</td>
    </tr>
  </tbody>
</table>`;

export const pug = `
table
  thead
    tr
      td Jahr
      td Preis
      td Fläche
  tbody
    tr
      td 2016
      td 50.000 $
      td 92m
`;
