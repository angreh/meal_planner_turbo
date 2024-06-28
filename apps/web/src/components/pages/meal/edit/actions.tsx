import { useNavigate } from "react-router-dom";

import { DefaultActions } from "@/components/ui/defaultActions";
import { useEdit } from "@/services/meal/edit";

export const MealEditActions = () => {
  const navigate = useNavigate();
  const { mutateAsync } = useEdit();

  const editHandler = async () => {
    await mutateAsync();
    navigate("/meals");
  };

  return (
    <DefaultActions
      saveFn={editHandler}
      backFn={() => navigate("/meals")}
      saveTitle="Save"
    />
  );
};
