import { Component } from 'react';
import api from 'Services/getImages';
import css from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';
import Loader from 'components/Loader/Loader';

class ImageGallery extends Component {
  state = {
    data: [],
    page: 1,
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    if (prevProps.searchText !== this.props.searchText) {
      this.setState({ isLoading: true });

      api
        .getImages(this.props.searchText)
        .then(data =>
          this.setState({
            data: page === 1 ? data.hits : [...prevState.data, ...data.hits],
          })
        )
        .catch(error => this.setState({ error }))
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  render() {
    const { data, isLoading, error } = this.state;

    return (
      <>
        {isLoading && <Loader />}
        <ul className={css.ImageGallery}>
          <ImageGalleryItem data={data} />
        </ul>
      </>
    );
  }
}
export default ImageGallery;
