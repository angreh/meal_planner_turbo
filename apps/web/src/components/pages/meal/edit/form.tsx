import { useParams } from "react-router-dom";

import { CreateEditForm } from "@/components/meal/createEditForm";
import { useGet } from "@/services/meal/get";

export const MealEditForm = () => {
  const { id } = useParams();
  const { isError } = useGet(id!);

  if (isError) return <div>Error</div>;

  return <CreateEditForm />;
};
