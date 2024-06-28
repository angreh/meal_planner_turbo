import { useEffect } from "react";

import { CreateEditForm } from "@/components/meal/createEditForm";
import { useMealStore } from "@/stores/meal";

export const MealCreateForm = () => {
  const { resetMeals } = useMealStore();

  useEffect(() => {
    resetMeals();
  }, [resetMeals]);

  return <CreateEditForm />;
};
