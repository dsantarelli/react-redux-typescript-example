import React from 'react';
import { connect } from 'react-redux';
import AppState from '../redux/state/AppState';
import { getCharacters, searchCharacters } from '../redux/actions/CharactersListActionCreators';
import CharacterSearch from './character/CharacterSearch';
import NavigationBar from './NavigationBar';
import CharactersListState from '../redux/state/CharactersListState';
import CharacterDetailsState from '../redux/state/CharacterDetailsState';
import { getCharacterDetails } from '../redux/actions/CharacterDetailsActionCreators';
import Character from '../api/model/Character';
import CharacterListContainer from './character/CharacterListContainer';
import CharacterDetailsDialog from './character/CharacterDetailsDialog';


interface Props {
  getCharacters(): void,
  searchCharacters(term: string): void,
  getCharacterDetails(character: Character): void,
  charactersList: CharactersListState,
  characterDetails: CharacterDetailsState
}
interface State {
  isSelectedCharacterModalOpen: boolean
}
export class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = { isSelectedCharacterModalOpen: false };
  }

  componentDidMount = () => {
    if (this.props.charactersList.characters.length === 0) {
      this.props.getCharacters();
    }
  }

  onCharacterSelected = (character: Character) => {
    this.openSelectedCharacterDialog();
    this.props.getCharacterDetails(character);
  }

  openSelectedCharacterDialog = () => {
    this.setState({ isSelectedCharacterModalOpen: true });
  }

  closeSelectedCharacterDialog = () => {
    this.setState({ isSelectedCharacterModalOpen: false });
  }

  public render() {
    const { searchCharacters, charactersList, characterDetails } = this.props;
    return (
      <div className="app-container">

        <NavigationBar>
          <CharacterSearch onSearchCharacters={searchCharacters} />
        </NavigationBar>

        <CharacterListContainer
          charactersList={charactersList}
          onCharacterSelected={this.onCharacterSelected} />

        <CharacterDetailsDialog
          isOpen={this.state.isSelectedCharacterModalOpen}
          characterDetails={characterDetails}
          onClose={() => this.closeSelectedCharacterDialog()} />

      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    charactersList: state.charactersListState,
    characterDetails: state.characterDetailsState
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    getCharacters: () => dispatch(getCharacters()),
    searchCharacters: (term: string) => dispatch(searchCharacters(term)),
    getCharacterDetails: (character: Character) => dispatch(getCharacterDetails(character)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
