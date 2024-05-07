import {createAsyncThunk} from '@reduxjs/toolkit';
import {RecipesData} from '../types/recipes';
import {API_URL} from '../constants/api';
import {Error_Server} from '../constants/errorConstant';

export const fetchRecipe = createAsyncThunk<RecipesData, undefined, {rejectValue: string}>(
  'recipe/fetchRecipe',
  async function (_, {rejectWithValue}) {
    const response = await fetch(API_URL);
    if (!response.ok) {
      return rejectWithValue(Error_Server);
    }

    const data = await response.json();
    return data;
  },
);
