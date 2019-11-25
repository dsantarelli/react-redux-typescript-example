import React from 'react';
import renderer, { ReactTestRenderer, ReactTestInstance } from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import GetCharactersMock from '../api/rest/GetCharactersMock';
import App from './App';
import AppState from '../redux/state/AppState';
import { Store } from 'redux';
import CharacterListContainer from './character/CharacterListContainer';
import CharacterDetailsDialog from './character/CharacterDetailsDialog';


describe('App', () => {

  const createMockStore = configureStore<AppState>([thunk]);

  const createEmptyState = (): AppState => {
    return {
      charactersListState: {
        characters: [],
        isFetching: false
      },
      characterDetailsState: {
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
      createTestRenderer(createMockStore(createEmptyState()));
    });

    it('and it should match the expected snapshot', () => {
      expect(createTestRenderer(
        createMockStore(createEmptyState()))
        .toJSON())
        .toMatchSnapshot();
    });

    describe('if a character is selected, the modal dialog should be', () => {

      const characters = GetCharactersMock;
      const state = createEmptyState();
      state.charactersListState.characters = characters;
      let component: ReactTestRenderer;
      let characterListContainer: ReactTestInstance;
      let selectedCharacterDialog: ReactTestInstance;

      beforeEach(() => {
        component = createTestRenderer(createMockStore(state));
        characterListContainer = component.root.findByType(CharacterListContainer);
        selectedCharacterDialog = component.root.findByType(CharacterDetailsDialog);
      })

      it('opened', () => {
        expect(selectedCharacterDialog.props.isOpen).toBe(false);
        characterListContainer.props.onCharacterSelected(characters[0]);
        expect(selectedCharacterDialog.props.isOpen).toBe(true);
      });

      it('and then it can be closed', () => {
        expect(selectedCharacterDialog.props.isOpen).toBe(false);
        characterListContainer.props.onCharacterSelected(characters[0]);
        expect(selectedCharacterDialog.props.isOpen).toBe(true);
        selectedCharacterDialog.props.onClose();
        expect(selectedCharacterDialog.props.isOpen).toBe(false);
      });
    });
  });
});