import { PlanCreateActions as Actions } from "@/components/pages/plan/create/actions";
import { PlanCreateForm as Form } from "@/components/pages/plan/create/form";
import { PageHolder } from "@/components/ui/pageHolder";

export const PlanCreatePage = () => {
  return (
    <PageHolder>
      <Form />
      <Actions />
    </PageHolder>
  );
};
