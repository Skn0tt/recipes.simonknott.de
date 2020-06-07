import { Recipe } from "../RecipesRepository";

function useExecutionSite() {
  return typeof window === "undefined" ? "ssr" : "client";
}

interface RecipeViewerProps {
  recipe: Recipe;
}

export function RecipeViewer(props: RecipeViewerProps) {
  const { recipe } = props;
  const executionSite = useExecutionSite();

  return (
    <div className="container" itemScope itemType="http://schema.org/Recipe">
      {recipe.imageHref && (
        <div className="xs-p2">
          <img itemProp="image" src={recipe.imageHref} />
          {recipe.imageCredit && (
            <a href={recipe.imageCredit} className="right">
              <svg
                className="js-geomicon geomicon"
                width="14"
                height="14"
                data-icon="camera"
                viewBox="0 0 32 32"
                style={{ fill: "currentcolor" }}
              >
                <title>camera icon</title>
                <path d="M0 6 L8 6 L10 2 L22 2 L24 6 L32 6 L32 28 L0 28 z M9 17 A7 7 0 0 0 23 17 A7 7 0 0 0 9 17"></path>
              </svg>
            </a>
          )}
        </div>
      )}

      <article className="post-content px2">
        <header className="post-header">
          <h1 className="post-title center m1 sm-mt3" itemProp="name">
            {recipe.title}
          </h1>
        </header>

        <div className="px2 mt3 clearfix">
          <div
            className="sm-col-8 mx-auto center"
            itemProp="description"
            dangerouslySetInnerHTML={{ __html: recipe.description }}
          />
        </div>

        <div className="clearfix mt3">
          <div className="sm-col sm-col-6 lg-col-6">
            <h4 className="blue mt0 mb2 xs-center">Ingredients</h4>
            <ul itemProp="ingredients">
              {recipe.ingredients.map((ingredient) => (
                <li key={ingredient} itemProp="recipeIngredient">
                  {executionSite === "client" && <input type="checkbox" />}{" "}
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          <div className="sm-col sm-col-6 lg-col-6">
            <h4 className="blue mt0 mb2 xs-center">Directions</h4>
            <ul itemProp="recipeInstructions">
              {recipe.directions.map((direction) => (
                <li key={direction}>
                  {executionSite === "client" && <input type="checkbox" />}
                  {direction}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
}
