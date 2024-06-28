import { useParams } from "react-router-dom";

import { CreateEditForm } from "@/components/ingredient/createEditForm";
import { useGet } from "@/services/ingredient/get";

export const IngredientEditForm = () => {
  const { id } = useParams();
  const { isError } = useGet(id!);

  if (isError) return <div>Error</div>;

  return <CreateEditForm />;
};
