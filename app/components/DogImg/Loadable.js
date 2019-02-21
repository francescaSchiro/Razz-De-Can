/**
 * Asynchronously loads the component for DogImg
 */
// import React from 'react';
// import styled from 'styled-components';
// import Loadable from 'react-loadable';
import loadable from 'loadable-components';
import Loader from 'components/Loader';

export default loadable(() => import('./index'), {
  fallback: Loader,
});

// const LoadableComponent = Loadable({
//   loader: () => import('./index'),
//   loading: Loader,
// });

// export default LoadableComponent;
