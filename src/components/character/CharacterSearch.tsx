import React from 'react';

interface Props {
  searchCharacters: any,
}

export default class CharacterSearch extends React.Component<Props, { value: string }> {

  constructor(props: Props) {
    super(props);
    this.state = { value: '' };
  }

  componentDidMount() {
    this.setState({ value: '' });
  }

  onChangeHandler = (event: React.ChangeEvent) => {
    const input = (event.target as HTMLInputElement).value;
    this.setState({ value: input });
  }

  onSubmitHandler = (event: React.FormEvent) => {
    const { searchCharacters } = this.props;
    event.preventDefault();
    searchCharacters(this.state.value);
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
          className="btn btn-primary my-2 my-sm-0"
          type="submit"
        >Search</button>
      </form>
    );
  }
};
