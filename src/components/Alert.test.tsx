import React from 'react';
import { shallow } from 'enzyme';

import Alert, { AlertType } from './Alert';

describe('Alert', () => {

  const wrapper = shallow(<Alert message='Hello' type={AlertType.INFO} />);

  describe('renders', () => {
    it('message', () => { expect(wrapper.contains('Hello')).toBe(true); });
    it('alert-type', () => {
      expect(wrapper.hasClass('alert')).toBe(true);
      expect(wrapper.hasClass('alert-info')).toBe(true);
    });
  });
});
