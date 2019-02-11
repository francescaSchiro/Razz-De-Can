/*
 * Header Messages
 *
 * This contains all the text for the Header component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.components.Header';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Razz de Can',
  },
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Random',
  },
  byBreed: {
    id: `${scope}.byBreed`,
    defaultMessage: 'Per razza',
  },
  game: {
    id: `${scope}.game`,
    defaultMessage: 'Indovina la razza',
  },
});
