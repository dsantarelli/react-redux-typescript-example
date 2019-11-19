import { applyMiddleware, combineReducers, createStore, Store, AnyAction } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import AppState from './state/AppState';
import CharactersListReducer from './reducers/CharactersListReducer';

const rootReducer = combineReducers<AppState>({
  charactersListReducer: CharactersListReducer
  // TODO: add sub-reducers here...
});

export default function configureStore(): Store<AppState, AnyAction> {
  return createStore(rootReducer, undefined, composeWithDevTools(applyMiddleware(thunk)));
}
