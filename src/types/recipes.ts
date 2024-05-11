export type RecipesData = {
  // total: number;
  recipes: Recipes[];
};

export type Recipes = {
  id: number;
  name: string;
  caloriesPerServing: number;
  cookTimeMinutes: number;
  cuisine: string;
  difficulty: Difficulty | string;
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

// export type Filter = {
//   name: string;
//   value: string | string[];
// };

type Ingredients = Array<string>;

type Instructions = Array<string>;

type Tags = Array<string>;

type MealType = Array<string>;
type Difficulty = Array<string>;
