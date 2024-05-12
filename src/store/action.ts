import {createAction} from '@reduxjs/toolkit';
import {Filter} from '../types/recipes';

export const setFilter = createAction<Filter>('recipeSlice/setFilter');
