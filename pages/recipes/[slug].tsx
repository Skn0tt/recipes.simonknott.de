import { Default } from "../../layouts/Default";
import {
  GetStaticPropsContext,
  GetStaticPaths,
  InferGetStaticPropsType,
} from "next";
import { RecipesRepository } from "../../RecipesRepository";
import { RecipeViewer } from "../../components/RecipeViewer";

type PageParams = { slug: string };

export async function getStaticProps(
  context: GetStaticPropsContext<PageParams>
) {
  const { slug = "" } = context.params || {};
  const recipe = await RecipesRepository.getRecipe(slug);
  return {
    props: {
      recipe: recipe!,
    },
  };
}

export const getStaticPaths: GetStaticPaths<PageParams> = async () => {
  const slugs = await RecipesRepository.getRecipeSlugs();
  return {
    fallback: false,
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
  };
};

export default function Recipe(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { recipe } = props;
  return (
    <Default>
      <RecipeViewer recipe={recipe} />
    </Default>
  );
}
