import { PageHolder } from "@/components/ui/pageHolder";
import { PlanListList as List } from "@/components/pages/plan/list/list";
import { PlanListActions as Actions } from "@/components/pages/plan/list/actions";

export const PlanListPage = () => {
  return (
    <PageHolder>
      <List />
      <Actions />
    </PageHolder>
  );
};
