import { Component } from 'react';
import api from 'Services/getImages';
import css from '../styles.module.css';
import ImageGalleryItem from '../ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import Button from '../Button/Button';

class ImageGallery extends Component {
  state = {
    data: [],
    page: 1,
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    const { searchText } = this.props;
    if (prevProps.searchText !== searchText || prevState.page !== page) {
      this.setState({ isLoading: true, page: 1 });
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
    const { data, isLoading, error } = this.state;
    const { searchText } = this.props;

    return (
      <>
        {isLoading && <Loader />}
        {!searchText && <div>Let`s find images together!</div>}
        {error && <h1>{error}</h1>}

        <ul className={css.ImageGallery}>
          <ImageGalleryItem data={data} />
          <Button onClick={this.handleLoadMore}>Load More</Button>
        </ul>
      </>
    );
  }
}

export default ImageGallery;
