import { Component } from 'react';
import css from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = { name: '' };

  handleChange = event => {
    this.setState({ name: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSearch(this.state.name);
    this.setState({ name: '' });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.name}
          />
        </form>
      </header>
    );
  }
}
