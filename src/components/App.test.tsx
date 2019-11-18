import React from 'react';
import renderer, { ReactTestRenderer } from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import GetCharactersMock from '../api/rest/GetCharactersMock';
import CharacterList from './character/CharacterList';
import ProgressBar from './ProgressBar';
import App from './App';
import AppState from '../redux/state/AppState';
import { Store } from 'redux';
import Alert from './Alert';


describe('App', () => {

  const createStore = configureStore<AppState>([thunk]);

  const createEmptyState = (): AppState => {
    return {
      charactersListState: {
        characters: [],
        isFetching: false
      }
    }
  }

  const createTestRenderer = (store: Store<AppState>): ReactTestRenderer => {
    return renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    );
  }

  describe('should be rendered', () => {

    it('inside a redux Provider', () => {
      createTestRenderer(createStore(createEmptyState()));
    });

    it('with a loading progressBar...', () => {

      const state = createEmptyState();
      state.charactersListState.isFetching = true;
      const component = createTestRenderer(createStore(state));

      expect(component.root.findByType(ProgressBar)).not.toBe(null);
      expect(() => component.root.findByType(Alert)).toThrow();
      expect(() => component.root.findByType(CharacterList)).toThrow();
    });

    it('with an empty character list', () => {

      const component = createTestRenderer(createStore(createEmptyState()));
      const list = component.root.findByType(CharacterList);

      expect(list).not.toBe(null);
      expect(list.props.characters.length).toBe(0);
      expect(() => component.root.findByType(Alert)).toThrow();
      expect(() => component.root.findByType(ProgressBar)).toThrow();
    });

    it('with some characters', () => {

      const state = createEmptyState();
      state.charactersListState.characters = GetCharactersMock;
      const component = createTestRenderer(createStore(state));      
      const list = component.root.findByType(CharacterList);

      expect(list).not.toBe(null);
      expect(list.props.characters).toEqual(GetCharactersMock);
      expect(() => component.root.findByType(Alert)).toThrow();
      expect(() => component.root.findByType(ProgressBar)).toThrow();
    });

    it('with an error', () => {

      const state = createEmptyState();
      state.charactersListState.error = 'error';
      const component = createTestRenderer(createStore(state));
      
      const alert = component.root.findByType(Alert);
      expect(alert).not.toBe(null);
      expect(alert.props.message).toEqual('error');
      expect(() => component.root.findByType(CharacterList)).toThrow();
      expect(() => component.root.findByType(ProgressBar)).toThrow();
    });

  });
});