import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'meetapp-web',
      storage,
      whitelist: ['auth', 'user', 'meetup'],
    },
    reducers
  );

  return persistedReducer;
};
