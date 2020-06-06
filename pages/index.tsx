import { Default } from "../layouts/Default";
import { RecipesRepository } from "../RecipesRepository";
import { InferGetStaticPropsType } from "next";
import Link from "next/link";

export async function getStaticProps() {
  const recipes = await RecipesRepository.getRecipes();
  return {
    props: {
      recipes,
    },
  };
}

export default function Home(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { recipes } = props;
  return (
    <Default>
      <div className="home">
        <div className="recipes xs-px1 xs-mt2">
          <div className="clearfix">
            {recipes.map((recipe) => (
              <div
                key={recipe.slug}
                className="sm-col sm-col-6 md-col-6 lg-col-4 xs-px1 xs-mb2"
              >
                <Link href="/recipes/[slug]" as={`/recipes/${recipe.slug}`}>
                  <a className="block relative bg-blue">
                    <div
                      className="image ratio bg-cover"
                      style={{ backgroundImage: `url(${recipe.imageHref})` }}
                    ></div>
                    <h1 className="title p2 m0 absolute bold white bottom-0 left-0">
                      {recipe.title}
                    </h1>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Default>
  );
}
