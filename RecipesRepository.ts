import * as contentful from "contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN!,
});

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

function parseRecipe(fields: any): Recipe {
  return {
    slug: fields.slug,
    description: documentToHtmlString(fields.description),
    imageHref: fields.image.fields.file.url,
    imageCredit: "",
    title: fields.title,
    ingredients: fields.ingredients,
    directions: fields.directions,
  };
}

export const RecipesRepository: RecipesRepository = {
  async getRecipes() {
    const response = await client.getEntries({
      content_type: "recipe",
    });

    const recipes = response.items.map((i) => parseRecipe(i.fields));

    return recipes;
  },
  async getRecipeSlugs() {
    const response = await client.getEntries<{ slug: string }>({
      content_type: "recipe",
      select: "fields.slug",
    });

    return response.items.map((i) => i.fields.slug);
  },
  async getRecipe(slug) {
    const response = await client.getEntries({
      content_type: "recipe",
      limit: 1,
      "fields.slug[in]": slug,
    });

    const [item] = response.items;

    return parseRecipe(item.fields);
  },
};
