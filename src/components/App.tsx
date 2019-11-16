import React from 'react';
import { connect } from 'react-redux';

import AppState from '../redux/state/AppState';
import Character from '../api/model/Character';
import {
  getCharacters,
  searchCharacters
} from '../redux/actions/CharacterActionCreators';
import CharacterList from './character/CharacterList';
import CharacterSearch from './character/CharacterSearch';
import NavigationBar from './NavigationBar';
import ProgressBar from './ProgressBar';


interface Props {
  getCharacters: any,
  searchCharacters: any,
  characters: Character[],
  isFetching: boolean
}
export class App extends React.Component<Props> {

  public componentDidMount() {
    if (this.props.characters.length === 0) {
      this.props.getCharacters();
    }
  }

  public render() {

    const {
      characters,
      searchCharacters,
      isFetching
    } = this.props;

    return (
      <div className="app-container">   

        <NavigationBar>
          <CharacterSearch searchCharacters={searchCharacters} />
        </NavigationBar>

        { isFetching ? (
          <ProgressBar></ProgressBar>
        ) : (
          <CharacterList characters={characters} />
        )}
        
      </div>
    );
  }
}

////////////// REDUX ///////////////

const mapStateToProps = (state: AppState) => {
  return {
    characters: state.characterState.characters,
    isFetching: state.characterState.isFetching
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    getCharacters: () => dispatch(getCharacters()),
    searchCharacters: (term: string) => dispatch(searchCharacters(term)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
