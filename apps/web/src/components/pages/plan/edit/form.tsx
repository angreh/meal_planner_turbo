import { useParams } from "react-router-dom";

import { CreateEditForm } from "@/components/plan/createEditForm";
import { useGet } from "@/services/plan/get";

export const PlanEditForm = () => {
  const { id } = useParams();
  const { isError } = useGet(id!);

  if (isError) return <div>Error</div>;

  return <CreateEditForm />;
};
