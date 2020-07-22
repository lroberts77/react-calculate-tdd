import React from 'react';
import { shallow } from 'enzyme';
import Disaply from './Display';

describe('Display', () => {

  let wrapper;

  beforeEach(() => wrapper = shallow(<Display />));

  instanceof('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
})