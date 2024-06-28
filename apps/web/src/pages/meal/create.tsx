import { MealCreateActions as Actions } from "@/components/pages/meal/create/actions";
import { MealCreateForm as Form } from "@/components/pages/meal/create/form";
import { PageHolder } from "@/components/ui/pageHolder";

export const MealCreatePage = () => {
  return (
    <PageHolder>
      <Form />
      <Actions />
    </PageHolder>
  );
};
