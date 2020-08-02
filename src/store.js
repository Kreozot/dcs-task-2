import { createSlice, configureStore } from '@reduxjs/toolkit';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import { serializeDate } from './format';

export const urlListSlice = createSlice({
  name: 'urlList',
  initialState: [{ url: 'http://upyachka.ru', date: serializeDate(new Date()), id: '1' }, { url: 'test2', date: serializeDate(new Date()), id: '2' }],
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
  reducer: {
    urlList: urlListSlice.reducer,
  },
});
