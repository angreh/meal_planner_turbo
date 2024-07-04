import { NavLink } from "react-router-dom";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useList } from "@/services/meal/list";
import { useMealStore } from "@/stores/meal";

export const MealListList = () => {
  const { isLoading, isError } = useList();
  const { meals: data } = useMealStore();

  if (isError) return <div>Error</div>;
  if (isLoading) return <div>Loading</div>;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Meals</CardTitle>
      </CardHeader>

      <CardContent>
        {data && (
          <ul className="list-disc list-inside pl-4">
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
