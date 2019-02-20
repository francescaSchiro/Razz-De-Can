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
// import Title from 'components/Title';
import DogImg from 'components/DogImg';
import H1 from 'components/H1';
import H2 from 'components/H2';
import Button from 'components/Button';
import BreedButtonWrapper from 'components/BreedButtonWrapper';
import { breedsListUrl, randomImgUrl } from 'utils/request';
import ButtonContainer from './ButtonContainer';
import ButtonSubmit from './ButtonSubmit';
import StatsContainer from './StatsContainer';
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
  handleResetGame,
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
      handleResetGameClick,
    } = this.props;
    return (
      <ContentWrapper>
        {/* <Title>Guess the breed</Title> */}
        {clickToStartaNewGame === true || undefined ? (
          <BreedButtonWrapper>
            <H2> Click to start a new game</H2>
            <Button
              primary
              refresh
              type="button"
              onClick={() => onRefreshClick(breeds)}
            >
              <i className="fas fa-sync-alt" />
            </Button>
          </BreedButtonWrapper>
        ) : null}

        <DogImg game imgUrl={currentImgUrl} />

        {clickToStartaNewGame || undefined ? null : (
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

            <StatsContainer>
              <Button
                stats
                type="button"
                onClick={() => handleResetGameClick(breeds)}
              >
                {/* <i
                  className="fas fa-sync-alt"
                  style={{ marginRight: '15px' }}
                /> */}
                New game
              </Button>
              <H1>
                {score} / {match}
              </H1>
              <Button
                primary
                stats
                type="button"
                onClick={() => onRefreshClick(breeds)}
              >
                <i className="fa fa-angle-right" />
              </Button>
            </StatsContainer>
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
  handleResetGameClick: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onLoadBreeds: () => dispatch(loadBreeds(breedsListUrl)),
    onRefreshClick: breeds =>
      dispatch(handleGetGameData(randomImgUrl, breedsListUrl, breeds)),
    onButtonSubmitClick: (currentBreed, el) =>
      dispatch(handleButtonSubmitClick(currentBreed, el)),
    handleResetGameClick: breeds =>
      dispatch(handleResetGame(randomImgUrl, breedsListUrl, breeds)),
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
