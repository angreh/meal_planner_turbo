import { PageHolder } from "@/components/ui/pageHolder";
import { MealListList as List } from "@/components/pages/meal/list/list";
import { MealListActions as Actions } from "@/components/pages/meal/list/actions";

export const MealListPage = () => {
  return (
    <PageHolder>
      <List />
      <Actions />
    </PageHolder>
  );
};
