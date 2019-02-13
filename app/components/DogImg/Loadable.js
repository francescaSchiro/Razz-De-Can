/**
 * Asynchronously loads the component for Breeds
 */
import React from 'react';
import loadable from 'loadable-components';

export default loadable(() => import('./index'), {
  fallback: <div style={{ color: 'black', fontSize: '5rem' }}>Loading...</div>,
});
