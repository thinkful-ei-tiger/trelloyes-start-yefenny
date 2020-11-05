import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

describe('List component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List cards={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('render the UI as expected', () => {
    const tree = renderer.create(<List cards={[]} header='List' />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
