import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {fetchRecipe} from './thunks';
import {isError} from '../utils/isError';
import {Recipes} from '../types/recipes';
export type recipeState = {
  list: Recipes;
  status: string;
  error: string | null;
};

const initialState: recipeState = {
  list: [],
  status: 'idle',
  error: null,
};

const getRecipeSlice = createSlice({
  name: 'recipeSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipe.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchRecipe.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = 'succeeded';
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.status = 'failed';
      });
  },
});

export default getRecipeSlice.reducer;
