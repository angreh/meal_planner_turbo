import { createBrowserRouter } from "react-router-dom";

import { RootLayout } from "@/layouts/root";
import { HomePage } from "@/pages/home";
import { IngredientListPage } from "@/pages/ingredient/list";
import { IngredientCreatePage } from "@/pages/ingredient/create";
import { IngredientEditPage } from "@/pages/ingredient/edit";
import { MealListPage } from "@/pages/meal/list";
import { MealCreatePage } from "@/pages/meal/create";
import { MealEditPage } from "@/pages/meal/edit";
import { MealIngredientsPage } from "@/pages/meal/ingredients";
import { PlanListPage } from "@/pages/plan/list";
import { PlanCreatePage } from "@/pages/plan/create";
import { PlanEditPage } from "@/pages/plan/edit";
import { PlanMealsPage } from "@/pages/plan/meals";
import { PlanGroceriesPage } from "./pages/plan/groceries";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },

      { path: "ingredients", element: <IngredientListPage /> },
      {
        path: "ingredient",
        children: [
          { path: "create", element: <IngredientCreatePage /> },
          { path: ":id", element: <IngredientEditPage /> },
        ],
      },

      { path: "meals", element: <MealListPage /> },
      {
        path: "meal",
        children: [
          { path: "create", element: <MealCreatePage /> },
          { path: ":id", element: <MealEditPage /> },
          { path: ":id/ingredients", element: <MealIngredientsPage /> },
        ],
      },

      { path: "plans", element: <PlanListPage /> },
      {
        path: "plan",
        children: [
          { path: "create", element: <PlanCreatePage /> },
          { path: ":id", element: <PlanEditPage /> },
          { path: ":id/meals", element: <PlanMealsPage /> },
          { path: ":id/groceries", element: <PlanGroceriesPage /> },
        ],
      },
    ],
  },
]);
