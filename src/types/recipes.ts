export type Recipes = Dish[];

type Dish = {
  id: number;
  name: string;
  ingredients: Ingredients;
  instructions: Instructions;
  userId: number;
  image: string;
  rating: number;
  tags: Tags;
  mealType: MealType;
  reviewCount: number;
};

type Ingredients = Array<string>;

type Instructions = Array<string>;

type Tags = Array<string>;

type MealType = Array<string>;
