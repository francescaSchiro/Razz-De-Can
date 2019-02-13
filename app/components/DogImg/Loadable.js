/**
 * Asynchronously loads the component for DogImg
 */
import React from 'react';
// import loadable from 'loadable-components';
import Loadable from 'react-loadable';
// import Loading from './my-loading-component';

function Loading() {
  return (
    <div
      style={{
        zIndex: 100,
        // backgroundColor: 'black',
        color: 'black',
        height: '500px',
        width: '500px',
      }}
    >
      <h1>Loading...</h1>
    </div>
  );
}
const LoadableComponent = Loadable({
  loader: () => import('./index'),
  loading: Loading,
});

export default LoadableComponent;

// export default loadable(() => import('./index'), {
//   fallback: <div style={{ color: 'black', fontSize: '5rem' }}>Loading...</div>,
// });
