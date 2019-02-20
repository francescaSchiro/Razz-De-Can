/**
 * Asynchronously loads the component for DogImg
 */
// import React from 'react';
// import styled from 'styled-components';
// import loadable from 'loadable-components';
import Loadable from 'react-loadable';
import Loader from 'components/Loader';

const LoadableComponent = Loadable({
  loader: () => import('./index'),
  loading: Loader,
});

export default LoadableComponent;

// export default loadable(() => import('./index'), {
//   fallback: <div style={{ color: 'black', fontSize: '5rem' }}>Loading...</div>,
// });
