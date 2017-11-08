export default `nav ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

nav ul.inline {
  display: flex;
}

nav ul.inline li + li {
  margin-left: 20px; }

nav ul li {
  display: block; }
  
  nav ul li a {
    text-decoration: none;
    display: inline-block;
    position: relative;
    font-weight: 400; }
    
  nav ul li a:active,
  nav ul li a.active {
    font-weight: 500; }
    
  nav ul li a:link,
  nav ul li a:visited,
  nav ul li a:active {
    text-decoration: none;
    color: #333; }
    
  nav ul li a::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    transition: .3s transform ease;
    transform: scaleX(0);
    transform-origin: center;
    background-color: #222; }
    
  nav ul li a.active::after,
  nav ul li a:hover::after {
    transform: none; }
    
  .inverted nav ul li a::after {
    background-color: #fff; }

a {
  cursor: pointer; }
`;
