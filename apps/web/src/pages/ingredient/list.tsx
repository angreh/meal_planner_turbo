import { PageHolder } from "@/components/ui/pageHolder";
import { IngredientListList as List } from "@/components/pages/ingredient/list/list";
import { IngredientListActions as Actions } from "@/components/pages/ingredient/list/actions";

export const IngredientListPage = () => {
  return (
    <PageHolder>
      <List />
      <Actions />
    </PageHolder>
  );
};
