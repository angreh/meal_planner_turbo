import { MealEditActions as Actions } from "@/components/pages/meal/edit/actions";
import { MealEditForm as Form } from "@/components/pages/meal/edit/form";
import { PageHolder } from "@/components/ui/pageHolder";

export const MealEditPage = () => {
  return (
    <PageHolder>
      <Form />
      <Actions />
    </PageHolder>
  );
};
