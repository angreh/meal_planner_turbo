import { useNavigate } from "react-router-dom";

import { DefaultActions } from "@/components/ui/defaultActions";

export const MealListActions = () => {
  const navigate = useNavigate();

  return (
    <DefaultActions
      saveFn={() => navigate("/meal/create")}
      saveTitle="Create Meal"
      backFn={() => navigate("/")}
    />
  );
};
