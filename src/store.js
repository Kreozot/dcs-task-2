import { createSlice, configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export const urlListSlice = createSlice({
  name: 'urlList',
  initialState: [],
  reducers: {
    addUrl(state, action) {
      const { url, date } = action.payload;
      state.push({ url, date, id: uuidv4() });
    },
    removeUrl(state, action) {
      const { id } = action.payload;
      state.splice(state.findIndex((item) => item.id === id), 1);
    },
  },
});

export const store = configureStore({
  reducer: persistReducer(persistConfig, combineReducers({
    urlList: urlListSlice.reducer,
  })),
  middleware: [],
});

export const persistor = persistStore(store);
