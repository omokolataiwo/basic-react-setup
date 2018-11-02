import React from 'react';
import { mount } from 'enzyme';
import { App } from '../../src/App';

const props = {
  postMessage: () => {}
};

const wrapper = mount(<App {...props} />);

describe('App Component', () => {
  it('should render component', () => {
    expect(wrapper.find('h3').text()).toEqual('Simple React App*');
  });
});
