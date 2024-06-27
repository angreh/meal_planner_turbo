import { IngredientCreateActions as Actions } from "@/components/pages/ingredient/create/actions";
import { IngredientCreateForm as Form } from "@/components/pages/ingredient/create/form";
import { PageHolder } from "@/components/ui/pageHolder";

export const IngredientCreatePage = () => {
  return (
    <PageHolder>
      <Form />
      <Actions />
    </PageHolder>
  );
};
