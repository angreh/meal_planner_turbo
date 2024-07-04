import { useNavigate, useParams } from "react-router-dom";
import { Ingredient } from "shared-types";

import { useListIngredients } from "@/services/meal/ingredients";
import { useIngredientStore } from "@/stores/ingredient";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const IngredientList = () => {
  const { id: mealId } = useParams();
  const { ingredients } = useIngredientStore();
  const { isLoading, isError } = useListIngredients(mealId!);
  const navigate = useNavigate();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ingredient List</CardTitle>
      </CardHeader>

      <CardContent>
        <ul className="list-disc list-inside pl-4">
          {ingredients?.length &&
            ingredients.map((ingredient: Ingredient) => (
              <li key={ingredient.id}>{ingredient.name}</li>
            ))}
        </ul>

        <Button
          className="mt-4 w-full"
          variant="outline"
          onClick={() => navigate(`/meal/${mealId}/ingredients`)}>
          Add Ingredient
        </Button>
      </CardContent>
    </Card>
  );
};
