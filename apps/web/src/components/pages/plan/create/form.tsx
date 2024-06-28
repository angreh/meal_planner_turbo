import { useEffect } from "react";

import { CreateEditForm } from "@/components/plan/createEditForm";
import { usePlanStore } from "@/stores/plan";

export const PlanCreateForm = () => {
  const { resetPlans } = usePlanStore();

  useEffect(() => {
    resetPlans();
  }, [resetPlans]);

  return <CreateEditForm />;
};
