import {createAsyncThunk} from '@reduxjs/toolkit';
import {Recipe, Recipes} from '../types/recipes';
import {API_URL, API_URL_FETCH_ID} from '../constants/api';
import {Error_Server} from '../constants/errorConstant';

export const fetchRecipe = createAsyncThunk<Recipes, undefined, {rejectValue: string}>(
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

export const fetchRecipeId = createAsyncThunk<Recipe, string, {rejectValue: string}>(
  'recipe/fetchRecipeId',
  async function (id, {rejectWithValue}) {
    const response = await fetch(`${API_URL_FETCH_ID}/${id}`);
    if (!response.ok) {
      return rejectWithValue(Error_Server);
    }

    const data = await response.json();
    return data;
  },
);
