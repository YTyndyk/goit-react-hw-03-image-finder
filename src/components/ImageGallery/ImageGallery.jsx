import { Component } from 'react';
import api from 'Services/getImages';
import css from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import Button from '../Button/Button';

class ImageGallery extends Component {
  state = {
    data: [],
    page: 1,
    isLoading: false,
    error: null,
    hidden: false,
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
  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  render() {
    const { data, isLoading, hidden } = this.state;

    return (
      <>
        {isLoading && <Loader />}
        <ul className={css.ImageGallery}>
          <ImageGalleryItem data={data} />
          {hidden && <Button onClick={this.handleLoadMore} />}
        </ul>
      </>
    );
  }
}
export default ImageGallery;
