/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import Button from 'components/Button';
import H2 from 'components/H2';
import DogImg from 'components/DogImg/Loadable';
import BreedButtonWrapper from 'components/BreedButtonWrapper';
import ContentWrapper from 'components/ContentWrapper';
import { loadImgUrl } from './actions';
import reducer from './reducer';
import saga from './saga';
import { makeSelectImgUrl, makeSelectBreedName } from './selectors';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  render() {
    const { imgUrl, breedName, onRandomClick } = this.props;
    return (
      <Fragment>
        <ContentWrapper>
          <BreedButtonWrapper>
            <H2>
              {breedName === '' ? (
                <FormattedMessage {...messages.breedPlaceholder} />
              ) : (
                breedName
              )}
            </H2>
            <Button primary type="button" onClick={onRandomClick}>
              {<FormattedMessage {...messages.buttonText} />}
            </Button>
          </BreedButtonWrapper>
          <DogImg imgUrl={imgUrl} />
        </ContentWrapper>
      </Fragment>
    );
  }
}

HomePage.propTypes = {
  imgUrl: PropTypes.string,
  breedName: PropTypes.string,
  onRandomClick: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onRandomClick: () =>
      dispatch(loadImgUrl(`https://dog.ceo/api/breeds/image/random`)),
  };
}

const mapStateToProps = createStructuredSelector({
  imgUrl: makeSelectImgUrl(),
  breedName: makeSelectBreedName(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
