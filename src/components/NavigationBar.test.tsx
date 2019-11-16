import React from 'react';
import { shallow } from 'enzyme';

import NavigationBar from './NavigationBar';

describe('NavigationBar', () => {

  const wrapper = shallow(
    <NavigationBar>
      <p>Yeah!</p>
    </NavigationBar>
  );


  describe('renders', () => {

    it('should load default text', () => {
      expect(wrapper.contains('Star Wars Characters')).toBe(true);
    });
  });

});
