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


describe('App', () => {

  const createStore = configureStore<AppState>([thunk]);

  const createEmptyState = (): AppState => {
    return {
      characterState: {
        characters: [],
        isFetching: false
      }
    }
  }

  const createTestRenderer = (store: any): ReactTestRenderer => {
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

      const state = createEmptyState() as any;
      state.characterState.isFetching = true;

      const component = createTestRenderer(createStore(state));
      expect(component.root.findByType(ProgressBar)).not.toBe(null);
      expect(() => component.root.findByType(CharacterList)).toThrow();
    });

    it('with an empty character list', () => {

      const component = createTestRenderer(createStore(createEmptyState()));
      const list = component.root.findByType(CharacterList);

      expect(list).not.toBe(null);
      expect(list.props.characters.length).toBe(0);
      expect(() => component.root.findByType(ProgressBar)).toThrow();
    });

    it('with some characters', () => {

      const state = createEmptyState() as any;
      state.characterState.characters = GetCharactersMock;
      const component = createTestRenderer(createStore(state));
      
      const list = component.root.findByType(CharacterList);
      expect(list).not.toBe(null);
      expect(list.props.characters).toEqual(GetCharactersMock);
      expect(() => component.root.findByType(ProgressBar)).toThrow();
    });

  });
});