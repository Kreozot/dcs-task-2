import { createSlice, configureStore } from '@reduxjs/toolkit';

export const urlListSlice = createSlice({
  name: 'urlList',
  initialState: [{ url: 'http://upyachka.ru' }, { url: 'test2' }],
  reducers: {
    add(state, action) {
      const { url } = action.payload;
      state.push({ url });
    },
    remove(state, action) {
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
