import { createSlice, configureStore } from '@reduxjs/toolkit';

export const urlListSlice = createSlice({
  name: 'urlList',
  initialState: [{ url: 'http://upyachka.ru', date: new Date() }, { url: 'test2', date: new Date() }],
  reducers: {
    addUrl(state, action) {
      const { url } = action.payload;
      state.push({ url });
    },
    removeUrl(state, action) {
      const { index } = action.payload;
      state.splice(index, 1);
    },
  },
});

export const store = configureStore({
  reducer: {
    urlList: urlListSlice.reducer,
  },
});
