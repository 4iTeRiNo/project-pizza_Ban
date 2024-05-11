import {createAction} from '@reduxjs/toolkit';

export const filterValueDifficulty = createAction<{
  difficulty: string;
}>('recipeSlice/filterValueDifficulty');

export const filterValueCuisine = createAction<{
  cuisine: string;
}>('recipeSlice/filterValueCuisine');
