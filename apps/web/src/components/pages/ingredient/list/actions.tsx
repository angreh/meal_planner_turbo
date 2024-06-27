import { useNavigate } from "react-router-dom";

import { DefaultActions } from "@/components/ui/defaultActions";

export const IngredientListActions = () => {
  const navigate = useNavigate();

  return (
    <DefaultActions
      saveFn={() => navigate("/ingredient/create")}
      saveTitle="Create Ingredient"
      backFn={() => navigate("/")}
    />
  );
};
