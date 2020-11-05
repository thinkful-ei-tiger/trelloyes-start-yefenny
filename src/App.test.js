import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import STORE from './store';

describe('App component', () => {
  it('renders wihtout crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App store={STORE} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
