import React from 'react';
import { shallow } from 'enzyme';

import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {

  const wrapper = shallow(<ProgressBar />);

  describe('renders', () => {
    it('loading text', () => {
      expect(wrapper.contains('Loading...')).toBe(true);
    });
  });
});
