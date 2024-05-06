export type RecipesData = {
  total: number;
  skip: number;
  limit: number;
  recipes: Recipes[];
};

export type Recipes = {
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

type Ingredients = Array<string>;

type Instructions = Array<string>;

type Tags = Array<string>;

type MealType = Array<string>;
