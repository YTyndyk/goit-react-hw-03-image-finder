import { Component } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import css from '../styles.module.css';

export default class Searchbar extends Component {
  state = { name: '' };

  handleChange = event => {
    this.setState({ name: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSearch(this.state.name);
    if (this.state.name.trim() === '') {
      alert('Please enter a valid name!');
      return;
    }
    this.setState({ name: '' });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button
            type="submit"
            className={css['SearchForm-button']}
            onClick={this.handleSubmit}
          >
            <span className={css['SearchForm-button-label']}>
              <AiOutlineSearch fill="black" size="20px" />
            </span>
          </button>

          <input
            className={css['SearchForm-input']}
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
