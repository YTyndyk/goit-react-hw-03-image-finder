import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import css from './styles.module.css';
export class App extends Component {
  state = {
    searchText: '',
    hidden: false,
  };

  handleSearch = searchText => {
    this.setState({ searchText });
  };
  // loadMore = () => {
  //   this.setState(prevState => {
  //     return { perpage: prevState.perpage + 12 };
  //   });
  // };
  // renderGallery = () => {
  //   this.setState({ hidden: true });
  // };
  render() {
    const { perpage } = this.state;
    return (
      <div className={css.App}>
        <Searchbar onSearch={this.handleSearch} />
        <ImageGallery
          searchText={this.state.searchText}
          renderGallery={this.renderGallery}
          page={perpage}
        />
      </div>
    );
  }
}
