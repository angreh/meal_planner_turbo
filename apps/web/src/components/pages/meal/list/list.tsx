import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useList } from "@/services/meal/list";
import { NavLink } from "react-router-dom";

export const MealListList = () => {
  const { data, isError } = useList();

  if (isError) return <div>Error</div>;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Meals</CardTitle>
      </CardHeader>

      <CardContent>
        {data && (
          <ul>
            {data.map((meal: any) => (
              <li key={meal.id}>
                <NavLink to={`/meal/${meal.id}`}>{meal.name}</NavLink>
              </li>
            ))}
          </ul>
        )}
        {(!data || !data.length) && <div>No meals</div>}
      </CardContent>
    </Card>
  );
};
