import React from 'react';

interface Props {
  onSearchCharacters(term: string): void
}
interface State {
  value: string
}
export default class CharacterSearch extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = { value: '' };
  }

  componentDidMount() {
    this.setState({ value: '' });
  }

  onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: event.target.value });
  }

  onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    this.props.onSearchCharacters(this.state.value);
  }

  render() {
    return (
      <form
        className="form-inline"
        onSubmit={this.onSubmitHandler}>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={this.state.value}
          onChange={this.onChangeHandler} />
        <button
          className="btn btn-secondary my-2 my-sm-0"
          type="submit"
        >Search</button>
      </form>
    );
  }
};
