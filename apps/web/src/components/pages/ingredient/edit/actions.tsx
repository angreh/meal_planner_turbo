import { useNavigate } from "react-router-dom";

import { DefaultActions } from "@/components/ui/defaultActions";
import { useEdit } from "@/services/ingredient/edit";

export const IngredientEditActions = () => {
  const navigate = useNavigate();
  const { mutateAsync } = useEdit();

  const editHandler = async () => {
    await mutateAsync();
    navigate("/ingredients");
  };

  return (
    <DefaultActions
      saveFn={editHandler}
      backFn={() => navigate("/ingredients")}
      saveTitle="Save"
    />
  );
};
