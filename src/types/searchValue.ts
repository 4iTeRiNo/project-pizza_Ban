import {Recipes} from './recipes';

export type Difficulty = 'All' | 'Easy' | 'Medium' | 'Hard';
export type Cuisine = Pick<Recipes, 'cuisine'>;
export type mealType = Pick<Recipes, 'mealType'>;
