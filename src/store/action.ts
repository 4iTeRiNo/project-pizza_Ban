import {createAction} from '@reduxjs/toolkit';
import {Cuisine, Difficulty, mealType} from '../types/searchValue';

export const filterValueDifficulty = createAction<{
  difficulty: string;
}>('recipeSlice/filterValueDifficulty');

export const filterValueCuisine = createAction<{
  cuisine: string;
}>('recipeSlice/filterValueCuisine');
