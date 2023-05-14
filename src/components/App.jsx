import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import css from './styles.module.css';
import Modal from './Modal/Modal';
export class App extends Component {
  state = {
    searchText: '',
    image: '',
    showModal: false,
    perpage: 12,
  };

  handleSearch = searchText => {
    this.setState({ searchText });
  };
  getNameImage = searchText => {
    this.setState(prevState => {
      if (prevState.searchText !== searchText) {
        return { searchText, perpage: 12 };
      }
    });
  };
  getModalImage = e => {
    return this.setState({ image: e.target.id, showModal: true });
  };

  closeModal = () => {
    return this.setState({ showModal: false });
  };
  render() {
    const { perpage, searchText, showModal, image } = this.state;
    return (
      <div className={css.App}>
        {showModal && <Modal image={image} closeModal={this.closeModal} />}
        <Searchbar onSearch={this.handleSearch} />
        <ImageGallery
          searchText={searchText}
          perpage={perpage}
          getModalImage={this.getModalImage}
        />
      </div>
    );
  }
}
