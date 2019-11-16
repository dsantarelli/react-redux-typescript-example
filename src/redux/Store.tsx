import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Business domain imports
import AppState from './state/AppState';
import CharacterReducer from './reducers/CharacterReducer';

// Create the root reducer that combines sub-reducers
const rootReducer = combineReducers<AppState>({
  characterState: CharacterReducer
});

// Create a configure store function of type `AppState`
export default function configureStore(): Store<AppState, any> {
  const store = createStore(
    rootReducer,
    undefined,
    composeWithDevTools(applyMiddleware(thunk))
  );

  return store;
}
