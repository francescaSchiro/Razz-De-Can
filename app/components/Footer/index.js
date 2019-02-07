import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import Wrapper from './Wrapper';

function Footer() {
  return (
    <Wrapper>
      <section>
        <FormattedMessage {...messages.licenseMessage} />
      </section>
      <section>
        <FormattedMessage {...messages.authorMessage} />
      </section>
    </Wrapper>
  );
}

export default Footer;
