import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Card from './Card';
import App from './App';

describe('Card Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders the UI with props as expected', () => {
    const wrapper = shallow(
      <Card
        title='Card 1'
        content='My content'
        id='a'
        deleteCard={App.deleteCard}
      />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
