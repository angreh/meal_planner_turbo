import { useNavigate } from "react-router-dom";

import { useCreate } from "@/services/meal/create";
import { DefaultActions } from "@/components/ui/defaultActions";

export const MealCreateActions = () => {
  const navigate = useNavigate();
  const { mutateAsync } = useCreate();

  const createHandler = async () => {
    await mutateAsync();
    navigate("/meals");
  };

  return (
    <DefaultActions
      saveFn={createHandler}
      backFn={() => navigate("/meals")}
      saveTitle="Create"
    />
  );
};
