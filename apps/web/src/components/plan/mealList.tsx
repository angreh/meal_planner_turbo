import { useParams } from "react-router-dom";

import { useListMeals } from "@/services/plan/meals";
import { useMealStore } from "@/stores/meal";

export const MealList = () => {
  const { id: mealId } = useParams();
  const { meals } = useMealStore();
  const { isLoading, isError } = useListMeals(mealId!);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div>
      <ul className="list-disc list-inside pl-4">
        {meals?.length &&
          meals.map((meal: any) => (
            <li key={meal.id}>{meal.name}</li>
          ))}
      </ul>
    </div>
  );
};
