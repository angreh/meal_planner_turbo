import { PlanEditActions as Actions } from "@/components/pages/plan/edit/actions";
import { PlanEditForm as Form } from "@/components/pages/plan/edit/form";
import { PageHolder } from "@/components/ui/pageHolder";

export const PlanEditPage = () => {
  return (
    <PageHolder>
      <Form />
      <Actions />
    </PageHolder>
  );
};
