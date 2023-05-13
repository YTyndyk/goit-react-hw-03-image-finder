import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import css from './styles.module.css';
export class App extends Component {
  state = {
    searchText: '',
    hidden: false,
    perpage: 12,
  };

  handleSearch = searchText => {
    this.setState({ searchText });
  };
  loadMore = () => {
    this.setState(prevState => {
      return { perpage: prevState.perpage + 12 };
    });
  };
  renderGallery = () => {
    this.setState({ hidden: true });
  };
  render() {
    const { hidden, perpage } = this.state;
    return (
      <div className={css.App}>
        <Searchbar onSearch={this.handleSearch} />
        <ImageGallery
          searchText={this.state.searchText}
          renderGallery={this.renderGallery}
          page={perpage}
        />
        <Button onClick={this.loadMore} />
      </div>
    );
  }
}
