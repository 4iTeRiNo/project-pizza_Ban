import {RecipesAPI} from '../types/recipes';

export const isRecipesType = (value: unknown): value is RecipesAPI => {
  return true;
};
