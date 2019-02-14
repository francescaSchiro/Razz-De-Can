/*
 * Game
 *
 *  at the '/search-by-breeds' route
 */

import React from 'react';

import ContentWrapper from 'components/ContentWrapper';
import Title from 'components/Title';
import DogImg from 'components/DogImg';
import Form from './Form';
import ButtonSubmit from './ButtonSubmit';
import ButtonRefresh from './ButtonRefresh';
// import Input from './Input';
// import OptionWrapper from './OptionWrapper';
// import Label from './Label';

// eslint-disable-next-line react/prefer-stateless-function
export class Game extends React.PureComponent {
  render() {
    return (
      <ContentWrapper>
        <Title>Guess the breed</Title>
        <ButtonRefresh>
          <i className="fas fa-sync-alt" />
        </ButtonRefresh>
        <DogImg
          game
          imgUrl="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        />
        {/* <Form onClick={e => this.checkWin(e)}>   */}
        <Form>
          <ButtonSubmit>Option 1</ButtonSubmit>
          <ButtonSubmit>Option 2</ButtonSubmit>
          <ButtonSubmit>Option 3</ButtonSubmit>
          <ButtonSubmit>Option 4</ButtonSubmit>
        </Form>
      </ContentWrapper>
    );
  }
}
export default Game;

// eslint-disable-next-line no-lone-blocks
{
  /* <OptionWrapper>
<Input id="opt1" type="radio" name="option" value="breed1" />
<Label htmlFor="opt1">Option 1</Label>
</OptionWrapper>

<OptionWrapper>
<Input id="opt2" type="radio" name="option" value="breed2" />
<Label htmlFor="opt1">Option 2</Label>
</OptionWrapper>

<OptionWrapper>
<Input id="opt3" type="radio" name="option" value="breed3" />
<Label htmlFor="opt1">Option 3</Label>
</OptionWrapper>

<ButtonSubmit type="submit">Submit</ButtonSubmit> */
}
