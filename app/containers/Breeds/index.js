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

import H2 from 'components/H2';
import DogImg from 'components/DogImg';
import Button from 'components/Button';
import Select from 'components/Select';
import Option from 'components/Option';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import BreedButtonWrapper from 'components/BreedButtonWrapper';
import ContentWrapper from 'components/ContentWrapper';
import { breedsListUrl, randomInBreedUrl } from 'utils/request';
import {
  makeSelectBreeds,
  makeSelectBreedsImgUrl,
  makeSelectSelectedBreed,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadBreeds, loadBreedsImgUrl } from './actions';
import messages from './messages';

// Requests URLs
// const breedsListUrl = 'https://dog.ceo/api/breeds/list/all';
// const randomInBreedUrl = breedName =>
//   `https://dog.ceo/api/breed/${breedName}/images/random`;

// eslint-disable-next-line react/prefer-stateless-function
export class Breeds extends React.PureComponent {
  /**
   * when initial state breeds is not [], call handleLoadBreeds to load breeds
   */
  componentDidMount() {
    if (this.props.breedslength !== []) {
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
        <BreedButtonWrapper>
          <H2>
            <FormattedMessage {...messages.selectBreed} />
          </H2>

          <Select name="breeds" value={selectedBreed} onChange={onSelectChange}>
            {breeds.map(el => (
              <Option key={el} value={el}>
                {el}
              </Option>
            ))}
          </Select>
        </BreedButtonWrapper>

        <BreedButtonWrapper>
          <H2>{selectedBreed}</H2>
          <Button
            primary
            type="button"
            onClick={() =>
              onRandomInBreedClick(randomInBreedUrl(selectedBreed))
            }
          >
            <FormattedMessage {...messages.randomInBreedButtonText} />
          </Button>
        </BreedButtonWrapper>

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
