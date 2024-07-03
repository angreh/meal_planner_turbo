import { IngredientCreatePage } from "@/pages/ingredient/create";
import { IngredientEditPage } from "@/pages/ingredient/edit";
import { IngredientListPage } from "@/pages/ingredient/list";

export const IngredientRoutes = [
  { path: "ingredients", element: <IngredientListPage /> },
  {
    path: "ingredient",
    children: [
      { path: "create", element: <IngredientCreatePage /> },
      { path: ":id", element: <IngredientEditPage /> },
    ],
  },
];
