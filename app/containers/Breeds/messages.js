/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Breeds';

export default defineMessages({
  selectBreed: {
    id: `${scope}.selectBreed`,
    defaultMessage: 'Seleziona una razza',
  },
  randomInBreedButtonText: {
    id: `${scope}.randomInBreedButtonText`,
    defaultMessage: 'Altre immagini',
  },
});
