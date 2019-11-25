import React from 'react';
import { shallow } from 'enzyme';

import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {

  describe('renders', () => {

    it('loading text', () => {
      const wrapper = shallow(<ProgressBar />);
      expect(wrapper.contains('Loading...')).toBe(true);
    });

    it('custom text', () => {
      const wrapper = shallow(<ProgressBar message="Hello!" />);
      expect(wrapper.contains('Hello!')).toBe(true);
    });

    it('100%', () => {
      const wrapper = shallow(<ProgressBar />);
      const progressBar = wrapper.find('.progress-bar');
      expect(progressBar.prop('aria-valuenow')).toBe(100);
      expect((progressBar.prop('style') as any).width).toBe('100%');
    });

    it('50%', () => {
      const wrapper = shallow(<ProgressBar progress={50} />);
      const progressBar = wrapper.find('.progress-bar');
      expect(progressBar.prop('aria-valuenow')).toBe(50);
      expect((progressBar.prop('style') as any).width).toBe('50%');
    });

  });
});
