import {RecipesAPI} from '../types/recipes';
//ts-ignore
export const isRecipesType = (value: unknown): value is RecipesAPI => {
  value;
  return true;
};
