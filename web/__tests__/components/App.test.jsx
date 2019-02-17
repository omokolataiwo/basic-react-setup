import React from 'react';
import { mount } from 'enzyme';
import App from '../../src/App';

const props = {
  postMessage: jest.fn(() => {})
};

const wrapper = mount(<App {...props} />);

describe('App Component', () => {
  it('should render component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
