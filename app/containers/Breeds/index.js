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

import FullTitle from 'components/FullTitle';
import H2 from 'components/H2';
import DogImg from 'components/DogImg';
// import Button from 'components/Button';
import Select from 'components/Select';
import Option from 'components/Option';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import BreedButtonWrapper from 'components/BreedButtonWrapper';
import ContentWrapper from 'components/ContentWrapper';
import { breedsListUrl, breedImgsUrl } from 'utils/request';
import ThumbsContainer from './ThumbsContainer';
import Thumb from './Thumb';
import {
  makeSelectBreeds,
  makeSelectBreedsImgUrl,
  makeSelectSelectedBreed,
  makeSelectBreedImgs,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import {
  loadBreeds,
  // loadBreedsImgUrl,
  loadBreedImgs,
  loadSelectedImg,
} from './actions';
import messages from './messages';

// eslint-disable-next-line react/prefer-stateless-function
export class Breeds extends React.PureComponent {
  /**
   * when initial state breeds is not [], call handleLoadBreeds to load breeds
   */
  componentDidMount() {
    if (this.props.breedslength !== []) {
      this.props.handleLoadBreeds(breedsListUrl);
      // this.props.handleLoadBreedImgs(breedImgsUrl(this.props.selectedBreed));
    }
  }

  render() {
    const {
      breeds,
      breedsImgUrl,
      selectedBreed,
      breedImgs,
      onSelectChange,
      onThumbClick,
    } = this.props;
    return (
      <ContentWrapper>
        <BreedButtonWrapper>
          <H2>
            <FormattedMessage {...messages.selectBreed} />
          </H2>
          <Select name="breeds" value={selectedBreed} onChange={onSelectChange}>
            <Option disabled selected hidden value="">
              Click to search...
            </Option>
            {breeds.map(el => (
              <Option key={el} value={el}>
                {el}
              </Option>
            ))}
          </Select>
        </BreedButtonWrapper>

        <DogImg imgUrl={breedsImgUrl} />
        {selectedBreed && (
          <FullTitle>
            More pics of{' '}
            <span style={{ fontStyle: 'italic' }}>{selectedBreed}</span>
          </FullTitle>
        )}

        <ThumbsContainer>
          {breedImgs.map((el, i) => (
            <Thumb
              key={el}
              id={i}
              current={breedsImgUrl.split('/')[5] === el.split('/')[5]}
              imgUrl={el}
              onClick={() => onThumbClick(el)}
            />
          ))}
        </ThumbsContainer>
      </ContentWrapper>
    );
  }
}

Breeds.propTypes = {
  breedsImgUrl: PropTypes.string,
  selectedBreed: PropTypes.string,
  breeds: PropTypes.array,
  breedImgs: PropTypes.array,
  onSelectClick: PropTypes.func,
  // onRandomInBreedClick: PropTypes.func,
  handleLoadBreeds: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onSelectChange: e => {
      e.stopPropagation();
      const breed = e.target.value;
      const url = breedImgsUrl(breed);
      dispatch(loadBreedImgs(url));
    },
    // onRandomInBreedClick: url => dispatch(loadBreedsImgUrl(url)),
    handleLoadBreeds: url => dispatch(loadBreeds(url)),
    handleLoadBreedImgs: url => dispatch(loadBreedImgs(url)),
    onThumbClick: breedsImgUrl => dispatch(loadSelectedImg(breedsImgUrl)),
  };
}

const mapStateToProps = createStructuredSelector({
  breedsImgUrl: makeSelectBreedsImgUrl(),
  selectedBreed: makeSelectSelectedBreed(),
  breeds: makeSelectBreeds(),
  breedImgs: makeSelectBreedImgs(),
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

/* <BreedButtonWrapper>
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
  </BreedButtonWrapper> */
