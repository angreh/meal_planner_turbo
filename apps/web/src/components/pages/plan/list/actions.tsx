import { useNavigate } from "react-router-dom";

import { DefaultActions } from "@/components/ui/defaultActions";

export const PlanListActions = () => {
  const navigate = useNavigate();

  return (
    <DefaultActions
      saveFn={() => navigate("/plan/create")}
      saveTitle="Create Plan"
      backFn={() => navigate("/")}
    />
  );
};
