import { combineReducers } from 'redux';
import createEncryptor from 'redux-persist-transform-encrypt';

import UserReducer from './UserReducer.js';
import ComponentReducer from './ComponentReducer.js';


const rootReducer = combineReducers({
  user: UserReducer,
  activity: ComponentReducer,
});
export default {
  reducer: rootReducer,
};

// const encryptor = createEncryptor({
//   secretKey: 'x))*g3xatyrLgri>bhP;',
//   onError: () => {
//   },
// });
// export default persistReducer(
//     {
//       key: 'root',
//       transforms: [encryptor],
//       storage: new CookieStorage(Cookies, {}),
//       stateReconciler: autoMergeLevel2,
//     },
//     app,
//   );
