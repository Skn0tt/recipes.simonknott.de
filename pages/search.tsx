import { Default } from "../layouts/Default";
import { RecipesRepository } from "../RecipesRepository";
import { InferGetStaticPropsType } from "next";
import { useState, useMemo } from "react";
import Link from "next/link";
import clsx from "clsx";

export async function getStaticProps() {
  const recipes = await RecipesRepository.getRecipes();
  return {
    props: {
      items: recipes.map((recipe) => {
        return {
          slug: recipe.slug,
          title: recipe.title,
          imageHref: recipe.imageHref,
          text: [
            recipe.description,
            ...recipe.directions,
            ...recipe.ingredients,
            recipe.title,
            recipe.description,
          ].join(""),
        };
      }),
    },
  };
}

export default function Search(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { items } = props;

  const [searchInput, setSearchInput] = useState<string>();
  const used = typeof searchInput === "string";

  const searchResults = useMemo(
    () =>
      items.filter((item) => {
        return item.text
          .toLowerCase()
          .includes(searchInput?.toLowerCase() ?? "");
      }),
    [items, searchInput]
  );

  return (
    <Default>
      <div
        className={clsx("search", "container", "max-width-2", used && "used")}
        style={{ height: used ? "126px" : undefined }}
      >
        <div id="search-container">
          <h3 className="center mb3 blue">Chowdown Search</h3>
          <input
            value={searchInput}
            onChange={(evt) => setSearchInput(evt.target.value)}
            type="text"
            id="search-input"
            placeholder="search titles or ingredients..."
          />
        </div>
      </div>

      <div className="clearfix">
        <div className="recipes xs-px1 xs-mt2 center" id="results-container">
          {searchResults.map((result) => (
            <div className="sm-col sm-col-6 md-col-6 lg-col-4 xs-px1 xs-mb2 left-align">
              <Link href="/recipes/[slug]" as={`/recipes/${result.slug}`}>
                <a className="block relative bg-blue">
                  <div
                    className="image ratio bg-cover"
                    style={{ backgroundImage: `url(${result.imageHref})` }}
                  ></div>
                  <h1 className="title p2 m0 absolute bold white bottom-0 left-0">
                    {result.title}
                  </h1>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Default>
  );
}
