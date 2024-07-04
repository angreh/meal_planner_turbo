import { useNavigate, useParams } from "react-router-dom";

import { useListMeals } from "@/services/plan/mealList";
import { useMealStore } from "@/stores/meal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const MealList = () => {
  const { id: planId } = useParams();
  const navigate = useNavigate();
  const { meals } = useMealStore();
  const { isLoading, isError } = useListMeals(planId!);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Meal List</CardTitle>
      </CardHeader>

      <CardContent>
        <ul className="list-disc list-inside pl-4">
          {meals?.length &&
            meals.map((meal: any) => <li key={meal.id}>{meal.name}</li>)}
        </ul>

        <Button
          className="mt-4 w-full"
          variant="outline"
          onClick={() => navigate(`/plan/${planId}/meals`)}>
          Add Meal
        </Button>
      </CardContent>
    </Card>
  );
};
