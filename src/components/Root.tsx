import React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';

import App from './App';
import AppState from '../redux/state/AppState';

interface Props {
  store: Store<AppState>;
}

const Root: React.FunctionComponent<Props> = props => {
  return (
    <Provider store={props.store}>
      <App />
    </Provider>
  );
};

export default Root;
