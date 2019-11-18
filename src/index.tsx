import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./redux/Store";
import Root from './components/Root';
import 'bootstrap/dist/css/bootstrap.css';

const store = configureStore();
ReactDOM.render(<Root store={store} />, document.getElementById('root'));
