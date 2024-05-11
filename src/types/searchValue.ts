import {Recipe} from './recipes';

export type Difficulty = 'All' | 'Easy' | 'Medium' | 'Hard';
export type Cuisine = Pick<Recipe, 'cuisine'>;
export type mealType = Pick<Recipe, 'mealType'>;
