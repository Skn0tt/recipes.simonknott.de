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
