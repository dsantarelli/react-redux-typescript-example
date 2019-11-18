import React from 'react';
import { connect } from 'react-redux';

import AppState from '../redux/state/AppState';
import Character from '../api/model/Character';
import {
  getCharacters,
  searchCharacters
} from '../redux/actions/CharactersListActionCreators';
import CharacterList from './character/CharacterList';
import CharacterSearch from './character/CharacterSearch';
import NavigationBar from './NavigationBar';
import ProgressBar from './ProgressBar';
import Alert, { AlertType } from './Alert';


interface Props {
  getCharacters(): void,
  searchCharacters(term: string): void,
  characters: Character[],
  isFetching: boolean,
  error?: string
}
export class App extends React.Component<Props> {

  public componentDidMount() {
    if (this.props.characters.length === 0) {
      this.props.getCharacters();
    }
  }

  public render() {

    const { characters, searchCharacters, isFetching, error } = this.props;

    let content = null;
    if (isFetching) content = <ProgressBar />;
    else {
      if (error) content = <Alert type={AlertType.DANGER} message={error} />;
      else content = <CharacterList characters={characters} />;
    }

    return (
      <div className="app-container">
        <NavigationBar>
          <CharacterSearch searchCharacters={searchCharacters} />
        </NavigationBar>      
        {content}
      </div>
    );
  }
}

////////////// REDUX ///////////////

const mapStateToProps = (state: AppState) => {
  return {
    characters: state.charactersListState.characters,
    isFetching: state.charactersListState.isFetching,
    error: state.charactersListState.error
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    getCharacters: () => dispatch(getCharacters()),
    searchCharacters: (term: string) => dispatch(searchCharacters(term)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
