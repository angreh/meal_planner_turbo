import { MealCreatePage } from "@/pages/meal/create";
import { MealEditPage } from "@/pages/meal/edit";
import { MealIngredientsPage } from "@/pages/meal/ingredients";
import { MealListPage } from "@/pages/meal/list";

export const MealRoutes = [
  { path: "meals", element: <MealListPage /> },
  {
    path: "meal",
    children: [
      { path: "create", element: <MealCreatePage /> },
      { path: ":id", element: <MealEditPage /> },
      { path: ":id/ingredients", element: <MealIngredientsPage /> },
    ],
  },
];
