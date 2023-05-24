import { configureStore } from '@reduxjs/toolkit';
import categorySlice from './slices/categorySlice';
import searchSlice from './slices/searchSlice';
import randomSlice from './slices/randomSlice';

export const store = configureStore({
    reducer: {
        categories: categorySlice,
        search: searchSlice,
        random: randomSlice
    }
});