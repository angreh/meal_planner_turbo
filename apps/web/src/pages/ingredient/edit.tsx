import { IngredientEditActions as Actions } from "@/components/pages/ingredient/edit/actions";
import { IngredientEditForm as Form } from "@/components/pages/ingredient/edit/form";
import { PageHolder } from "@/components/ui/pageHolder";

export const IngredientEditPage = () => {
  return (
    <PageHolder>
      <Form />
      <Actions />
    </PageHolder>
  );
};
