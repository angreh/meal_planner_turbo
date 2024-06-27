import { useNavigate } from "react-router-dom";

import { useCreate } from "@/services/ingredient/create";
import { DefaultActions } from "@/components/ui/defaultActions";

export const IngredientCreateActions = () => {
  const navigate = useNavigate();
  const { mutateAsync } = useCreate();

  const createHandler = async () => {
    await mutateAsync();
    navigate("/ingredients");
  };

  return (
    <DefaultActions
      saveFn={createHandler}
      backFn={() => navigate("/ingredients")}
      saveTitle="Create"
    />
  );
};
