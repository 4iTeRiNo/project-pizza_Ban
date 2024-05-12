import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {fetchRecipe, fetchRecipeId} from './thunks';
import {isError} from '../utils/isError';
import {Filter, Recipes} from '../types/recipes';
import {resetFilter, setFilter} from './action';
import {isRecipesType} from '../utils/typeGuards';

export type recipeState = {
  list: Recipes;
  status: string;
  error: string | null;
  filters: Filter[];
};

const initialState: recipeState = {
  list: [],
  status: 'idle',
  error: null,
  filters: [
    {
      name: 'cuisine',
      value: 'All',
    },
    {
      name: 'mealType',
      value: 'All',
    },
    {
      name: 'difficulty',
      value: 'All',
    },
  ],
};

const recipeSlice = createSlice({
  name: 'recipeSlice',
  initialState,
  reducers: {},
  selectors: {
    selectorAllRecipe: (state) => state.list,
    selectorAllFilters: (state) => state.filters,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipe.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchRecipe.fulfilled, (state, action) => {
        if (isRecipesType(action.payload)) {
          const {recipes} = action.payload;
          state.list = recipes;
          state.status = 'succeeded';
        }
      })
      .addCase(fetchRecipeId.fulfilled, (state, action) => {
        state.list = [action.payload];
        state.status = 'succeeded';
      })
      .addCase(setFilter, (state, action) => {
        const {name, value} = action.payload;
        state.filters.map((values) => {
          switch (values.name) {
            case name:
              return (values.name = name), (values.value = value);
            default:
              return null;
          }
        });
      })
      .addCase(resetFilter, (state) => {
        state.filters = initialState.filters;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.status = 'failed';
      });
  },
});

export const {selectorAllRecipe, selectorAllFilters} = recipeSlice.getSelectors();

export default recipeSlice.reducer;
