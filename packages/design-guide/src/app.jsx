import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.component';

const render = (Component) => {
  ReactDOM.render(<Component />, document.querySelector('#app'));
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App/App.component', () => {
    render(App);
  });
}
