import { create } from "zustand";
import { Ingredient } from "shared-types";

type IngredientProperty = "id" | "name";

interface ingredientState {
  ingredient: Ingredient;
  ingredients: Ingredient[];

  setIngredient: (ingredient: any) => void;
  setIngredientProperty: (key: IngredientProperty, value: string) => void;
  setIngredients: (ingredient: Ingredient[]) => void;
  addIngredient: () => void;

  resetIngredients: () => void;
  resetIngredient: () => void;
}

export const useIngredientStore = create<ingredientState>((set) => ({
  // data
  ingredient: {
    id: undefined,
    name: "",
    isNew: false,
  },
  ingredients: [],

  // actions
  setIngredient: (ingredient: Ingredient) => set({ ingredient }),
  setIngredientProperty: (key: IngredientProperty, value: string) => {
    set((prev) => ({
      ...prev,
      ingredient: { ...prev.ingredient, [key]: value },
    }));
  },
  setIngredients: (ingredients: Ingredient[]) => set({ ingredients }),
  addIngredient: () => {
    set((prev) => {
      prev.ingredient.id = String(Math.random());

      return {
        ...prev,
        ingredients: [...prev.ingredients, prev.ingredient],
      };
    });
  },

  // utils
  resetIngredients: () => set({ ingredients: [] }),
  resetIngredient: () => set({ ingredient: { id: undefined, name: "" } }),
}));
