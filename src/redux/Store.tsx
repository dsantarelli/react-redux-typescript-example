import { applyMiddleware, combineReducers, createStore, Store, AnyAction } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import AppState from './state/AppState';
import CharactersListReducer from './reducers/CharactersListReducer';
import CharacterDetailsReducer from './reducers/CharacterDetailsReducer';

const rootReducer = combineReducers<AppState>({
  charactersListState: CharactersListReducer,
  characterDetailsState: CharacterDetailsReducer
  // TODO: add sub-reducers here...
});

export default function configureStore(): Store<AppState, AnyAction> {
  return createStore(rootReducer, undefined, composeWithDevTools(applyMiddleware(thunk)));
}
