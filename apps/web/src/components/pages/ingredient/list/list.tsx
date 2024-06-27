import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useList } from "@/services/ingredient/list";
import { NavLink } from "react-router-dom";

export const IngredientListList = () => {
  const { data, isLoading, isError } = useList();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ingredients</CardTitle>
      </CardHeader>

      <CardContent>
        {data && (
          <ul>
            {data.map((meal: any) => (
              <li key={meal.id}>
                <NavLink to={`/ingredient/${meal.id}`}>{meal.name}</NavLink>
              </li>
            ))}
          </ul>
        )}
        {(!data || !data.length) && <div>No meals</div>}
      </CardContent>
    </Card>
  );
};
