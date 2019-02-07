import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import H1 from '../H1';

const Header = () => (
  <H1>
    <FormattedMessage {...messages.header} />
  </H1>
);

export default Header;
