export interface Recipe {
  slug: string;
  title: string;
  description: string;
  imageHref: string;
  imageCredit?: string;
  ingredients: string[];
  directions: string[];
}

interface RecipesRepository {
  getRecipes(): Promise<Recipe[]>;
  getRecipeSlugs(): Promise<string[]>;
  getRecipe(slug: string): Promise<Recipe | null>;
}

const mockRecipes: Record<string, Recipe> = {
  "banana-bread": {
    slug: "banana-bread",
    title: "Banana Bread",
    imageHref: "/banana-bread.jpg",
    description: "From Angie's mom",
    ingredients: [
      "4 bananas",
      "1/2 cup butter",
      "1/2 cup sugar",
      "2 eggs",
      "2 cups flour",
      "1/2 tsp baking soda",
      "1 tsp baking powder",
      "pinch salt",
      "1/4 cup nuts (we like pecans)",
    ],
    directions: [
      "Beat the eggs, then cream with the butter and sugar",
      "Mix in bananas, then flour, baking soda/powder, salt, and nuts",
      "Add to greased and floured pan",
      "Bake until brown/cracked, toothpick comes out clean",
    ],
  },
};

export const RecipesRepository: RecipesRepository = {
  async getRecipes() {
    return Object.values(mockRecipes);
  },
  async getRecipeSlugs() {
    return Object.keys(mockRecipes);
  },
  async getRecipe(slug) {
    return mockRecipes[slug] ?? null;
  },
};
