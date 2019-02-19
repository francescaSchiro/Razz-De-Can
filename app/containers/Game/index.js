/*
 * Game
 * at the '/game' route 
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import ContentWrapper from 'components/ContentWrapper';
import Title from 'components/Title';
import DogImg from 'components/DogImg';
import H1 from 'components/H1';
import H2 from 'components/H2';
import { breedsListUrl, randomImgUrl } from 'utils/request';
import ButtonContainer from './ButtonContainer';
import ButtonSubmit from './ButtonSubmit';
import ButtonRefresh from './ButtonRefresh';
import {
  makeSelectClickToStartaNewGame,
  makeSelectCurrentImgUrl,
  makeSelectCurrentBreed,
  makeSelectBreeds,
  makeSelectButtonsBreeds,
  makeSelectDisabled,
  makeSelectScore,
  makeSelectMatch,
  makeSelectClicked,
} from './selectors';
import {
  handleGetGameData,
  loadBreeds,
  handleButtonSubmitClick,
} from './actions';
import reducer from './reducer';
import saga from './saga';

// eslint-disable-next-line react/prefer-stateless-function
export class Game extends React.PureComponent {
  componentDidMount() {
    // if (this.props.breeds && this.props.breeds.length === 0) {
    this.props.onLoadBreeds();
    // }
  }

  render() {
    const {
      clickToStartaNewGame,
      currentImgUrl,
      currentBreed,
      breeds,
      disabled,
      clicked,
      score,
      match,
      buttonsBreeds,
      onRefreshClick,
      onButtonSubmitClick,
    } = this.props;
    return (
      <ContentWrapper>
        <Title>Guess the breed</Title>
        {clickToStartaNewGame ? <H2>Click below to start a new game</H2> : null}

        <ButtonRefresh type="button" onClick={() => onRefreshClick(breeds)}>
          <i className="fas fa-sync-alt" />
        </ButtonRefresh>
        <DogImg game imgUrl={currentImgUrl} />

        {clickToStartaNewGame ? null : (
          <>
            <ButtonContainer>
              {buttonsBreeds.map(el => (
                <ButtonSubmit
                  clicked={clicked}
                  currentBreed={currentBreed}
                  key={el}
                  disabled={disabled}
                  id={el}
                  value={el}
                  onClick={() => onButtonSubmitClick(currentBreed, el)}
                >
                  {el}
                </ButtonSubmit>
              ))}
            </ButtonContainer>

            <H1>
              {score} won / {match} tries
            </H1>
          </>
        )}
      </ContentWrapper>
    );
  }
}

Game.propTypes = {
  clickToStartaNewGame: PropTypes.bool,
  currentImgUrl: PropTypes.string,
  currentBreed: PropTypes.string,
  breeds: PropTypes.array,
  buttonsBreeds: PropTypes.array,
  clicked: PropTypes.string,
  disabled: PropTypes.bool,
  score: PropTypes.number,
  match: PropTypes.number,
  onLoadBreeds: PropTypes.func,
  onRefreshClick: PropTypes.func,
  onButtonSubmitClick: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onLoadBreeds: () => dispatch(loadBreeds(breedsListUrl)),
    onRefreshClick: breeds =>
      dispatch(handleGetGameData(randomImgUrl, breedsListUrl, breeds)),
    onButtonSubmitClick: (currentBreed, el) =>
      dispatch(handleButtonSubmitClick(currentBreed, el)),
  };
}

const mapStateToProps = createStructuredSelector({
  clickToStartaNewGame: makeSelectClickToStartaNewGame(),
  currentImgUrl: makeSelectCurrentImgUrl(),
  currentBreed: makeSelectCurrentBreed(),
  breeds: makeSelectBreeds(),
  buttonsBreeds: makeSelectButtonsBreeds(),
  disabled: makeSelectDisabled(),
  clicked: makeSelectClicked(),
  score: makeSelectScore(),
  match: makeSelectMatch(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'game', reducer });
const withSaga = injectSaga({ key: 'game', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Game);

// (currentBreed, el) =>
//       currentBreed === el
//         ? dispatch(handleWin(currentBreed, el))
//         : dispatch(handleLoss(currentBreed, el)),
