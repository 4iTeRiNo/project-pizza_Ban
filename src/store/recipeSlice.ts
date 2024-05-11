import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {fetchRecipe} from './thunks';
import {isError} from '../utils/isError';
import {RecipesData} from '../types/recipes';
// import {Cuisine, Difficulty, mealType} from '../types/searchValue';
import {filterValueCuisine, filterValueDifficulty} from './action';

export type recipeState = {
  list: RecipesData[];
  status: string;
  error: string | null;
  // filters: Filter;
  difficulty: string;
  cuisine: string;
  // mealType: string;
};

const initialState: recipeState = {
  list: [],
  status: 'idle',
  error: null,
  // filters: ;
  difficulty: 'All',
  cuisine: 'All',
  // mealType: 'All',
};

const recipeSlice = createSlice({
  name: 'recipeSlice',
  initialState,
  reducers: {},
  selectors: {
    selectorRecipe: (state) => state.list,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipe.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchRecipe.fulfilled, (state, action) => {
        state.list = [action.payload];
        state.status = 'succeeded';
      })
      .addCase(filterValueDifficulty, (state, action) => {
        state.difficulty = action.payload.difficulty;
        // state.cuisine = action.payload.cuisine;
        // state.mealType = action.payload.mealType;
      })
      .addCase(filterValueCuisine, (state, action) => {
        // state.difficulty = action.payload.difficulty;
        state.cuisine = action.payload.cuisine;

        ('');
        // state.mealType = action.payload.mealType;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.status = 'failed';
      });
  },
});

export const {selectorRecipe} = recipeSlice.getSelectors();

export default recipeSlice.reducer;
