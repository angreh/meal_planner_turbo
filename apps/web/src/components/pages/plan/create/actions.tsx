import { useNavigate } from "react-router-dom";

import { useCreate } from "@/services/plan/create";
import { DefaultActions } from "@/components/ui/defaultActions";

export const PlanCreateActions = () => {
  const navigate = useNavigate();
  const { mutateAsync } = useCreate();

  const createHandler = async () => {
    await mutateAsync();
    navigate("/plans");
  };

  return (
    <DefaultActions
      saveFn={createHandler}
      backFn={() => navigate("/plans")}
      saveTitle="Create"
    />
  );
};
