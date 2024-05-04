import {createAsyncThunk} from '@reduxjs/toolkit';
import {Recipes} from '../types/recipes';

export const fetchRecipe = createAsyncThunk<Recipes[], undefined, {rejectValue: string}>(
  'recipe/fetchRecipe',
  async function (_, {rejectWithValue}) {
    const response = await fetch('https://dummyjson.com/recipes');
    if (!response.ok) {
      return rejectWithValue('Server Error');
    }

    const data = await response.json();
    return data;
  },
);
