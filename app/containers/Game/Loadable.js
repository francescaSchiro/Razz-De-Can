/**
 * Asynchronously loads the component for Breeds
 */
import loadable from 'loadable-components';

export default loadable(() => import('./index'));
