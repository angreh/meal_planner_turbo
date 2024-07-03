import { useParams } from "react-router-dom";

import { useListIngredients } from "@/services/meal/ingredients";
import { useIngredientStore } from "@/stores/ingredient";

export const IngredientList = () => {
  const { id: mealId } = useParams();
  const { ingredients } = useIngredientStore();
  const { isLoading, isError } = useListIngredients(mealId!);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div>
      <ul className="list-disc list-inside pl-4">
        {ingredients?.length &&
          ingredients.map((ingredient: any) => (
            <li key={ingredient.id}>{ingredient.name}</li>
          ))}
      </ul>
    </div>
  );
};
