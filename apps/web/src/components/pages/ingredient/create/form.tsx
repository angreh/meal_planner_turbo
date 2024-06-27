import { useEffect } from "react";

import { CreateEditForm } from "@/components/ingredient/createEditForm";
import { useIngredientStore } from "@/stores/ingredient";

export const IngredientCreateForm = () => {
  const { resetIngredients } = useIngredientStore();

  useEffect(() => {
    resetIngredients();
  }, [resetIngredients]);

  return <CreateEditForm />;
};
