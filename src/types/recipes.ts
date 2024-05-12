export type RecipesAPI = {
  recipes: Recipe[];
  total: number;
  limit: number;
  skip: number;
};

export type Recipes = Recipe[];

export type Recipe = {
  id: number;
  name: string;
  caloriesPerServing: number;
  cookTimeMinutes: number;
  cuisine: string;
  difficulty: string;
  ingredients: Ingredients;
  instructions: Instructions;
  userId: number;
  image: string;
  rating: number;
  tags: Tags;
  mealType: MealType;
  reviewCount: number;
  servings: number;
  prepTimeMinutes: number;
};

export type Filter = {
  name: string;
  value: string;
};

type Ingredients = Array<string>;

type Instructions = Array<string>;

type Tags = Array<string>;

type MealType = Array<string>;
