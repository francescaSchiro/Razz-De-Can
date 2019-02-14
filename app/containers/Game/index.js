/*
 * Game
 *
 *  at the '/search-by-breeds' route
 */

import React from 'react';

import ContentWrapper from 'components/ContentWrapper';
import H2 from 'components/H2';

// eslint-disable-next-line react/prefer-stateless-function
export class Game extends React.PureComponent {
  render() {
    return (
      <ContentWrapper>
        <H2>Game</H2>
      </ContentWrapper>
    );
  }
}
export default Game;
