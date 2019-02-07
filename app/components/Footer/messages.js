/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.components.Footer';

export default defineMessages({
  licenseMessage: {
    id: `${scope}.license.message`,
    defaultMessage: 'Razz de Can © All Rights Reserved',
  },
  authorMessage: {
    id: `${scope}.author.message`,
    defaultMessage: 'Credits: Francesca Schiro',
  },
});
