import { useListIngredients } from "@/services/meal/ingredients";
import { useMealStore } from "@/stores/meal";

export const IngredientList = () => {
  const { data } = useListIngredients();
  const { meal } = useMealStore();

  const isLoaded = (): boolean => {
    return !!meal.id;
  }

  return (
    <div>
      <div>Ingredient List</div>
      <ul>
        {(isLoaded() && data?.length) &&
          data.map((ingredient) => (
            <li key={ingredient.id}>- {ingredient.name}</li>
          ))}
      </ul>
    </div>
  );
};
