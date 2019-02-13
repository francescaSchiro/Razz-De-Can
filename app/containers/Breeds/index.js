/*
 * Breeds
 *
 *  at the '/search-by-breeds' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import H2 from 'components/H2';
import DogImg from 'components/DogImg';
import Button from 'components/Button';
import { loadImgUrl } from 'containers/HomePage/actions';
import {
  makeSelectBreeds,
  makeSelectBreedsImgUrl,
  makeSelectSelectedBreed,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadBreeds, loadBreedsImgUrl } from './actions';
import ContentWrapper from './ContentWrapper';
import messages from './messages';

// Requests URLs
const breedsListUrl = 'https://dog.ceo/api/breeds/list/all';
const randomInBreedUrl = breedName =>
  `https://dog.ceo/api/breed/${breedName}/images/random`;

// eslint-disable-next-line react/prefer-stateless-function
export class Breeds extends React.PureComponent {
  /**
   * when initial state breeds is not [], call handleLoadBreeds to load breeds
   */
  componentDidMount() {
    if (this.props.breeds !== []) {
      this.props.handleLoadBreeds(breedsListUrl);
    }
  }

  render() {
    const {
      breeds,
      breedsImgUrl,
      selectedBreed,
      onSelectChange,
      onRandomInBreedClick,
    } = this.props;
    return (
      <ContentWrapper>
        <H2>
          <FormattedMessage {...messages.selectBreed} />
        </H2>
        <h1>{selectedBreed}</h1>
        <div id="button-select-container">
          <select name="breeds" value={selectedBreed} onChange={onSelectChange}>
            {breeds.map(el => (
              <option key={el} value={el}>
                {el}
              </option>
            ))}
          </select>

          <Button
            type="button"
            onClick={() =>
              onRandomInBreedClick(randomInBreedUrl(selectedBreed))
            }
          >
            Random In Breed
          </Button>
        </div>

        <DogImg imgUrl={breedsImgUrl} />
      </ContentWrapper>
    );
  }
}

Breeds.propTypes = {
  breedsImgUrl: PropTypes.string,
  selectedBreed: PropTypes.string,
  breeds: PropTypes.array,
  onSelectClick: PropTypes.func,
  onRandomInBreedClick: PropTypes.func,
  handleLoadBreeds: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onSelectChange: e => {
      e.stopPropagation();
      const breed = e.target.value;
      dispatch(loadBreedsImgUrl(randomInBreedUrl(breed)));
    },
    onRandomInBreedClick: url => dispatch(loadBreedsImgUrl(url)),
    handleLoadBreeds: url => dispatch(loadBreeds(url)),
  };
}

const mapStateToProps = createStructuredSelector({
  breedsImgUrl: makeSelectBreedsImgUrl(),
  selectedBreed: makeSelectSelectedBreed(),
  breeds: makeSelectBreeds(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'breeds', reducer }); // need for breeds
const withSaga = injectSaga({ key: 'breeds', saga }); // need for breeds request

export default compose(
  withReducer,
  withSaga,

  withConnect,
)(Breeds);
