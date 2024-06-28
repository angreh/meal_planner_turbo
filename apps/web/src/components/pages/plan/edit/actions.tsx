import { useNavigate } from "react-router-dom";

import { DefaultActions } from "@/components/ui/defaultActions";
import { useEdit } from "@/services/plan/edit";

export const PlanEditActions = () => {
  const navigate = useNavigate();
  const { mutateAsync } = useEdit();

  const editHandler = async () => {
    await mutateAsync();
    navigate("/plans");
  };

  return (
    <DefaultActions
      saveFn={editHandler}
      backFn={() => navigate("/plans")}
      saveTitle="Save"
    />
  );
};
