import { NavLink } from "react-router-dom";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useList } from "@/services/ingredient/list";
import { useIngredientStore } from "@/stores/ingredient";

export const IngredientListList = () => {
  const { isLoading, isError } = useList();
  const { ingredients } = useIngredientStore();

  if (isError) return <div>Error</div>;
  if (isLoading) return <div>Loading</div>;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ingredients</CardTitle>
      </CardHeader>

      <CardContent>
        {ingredients?.length && (
          <ul className="list-disc list-inside pl-4">
            {ingredients.map((meal: any) => (
              <li key={meal.id}>
                <NavLink to={`/ingredient/${meal.id}`}>{meal.name}</NavLink>
              </li>
            ))}
          </ul>
        )}
        {(!ingredients || !ingredients.length) && <div>No meals</div>}
      </CardContent>
    </Card>
  );
};
