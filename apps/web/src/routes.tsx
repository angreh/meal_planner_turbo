import { createBrowserRouter } from "react-router-dom";

import { RootLayout } from "@/layouts/root";
import { HomePage } from "@/pages/home";
import { IngredientListPage } from "@/pages/ingredient/list";
import { IngredientCreatePage } from "@/pages/ingredient/create";
import { IngredientEditPage } from "@/pages/ingredient/edit";

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

      // { path: "plans", element: <PlanListPage /> },
      // {
      //   path: "plan",
      //   children: [
      //     { path: "create", element: <PlanCreatePage /> },
      //     { path: ":id", element: <PlanEditPage /> },
      //     { path: ":id/groceries", element: <Groceries /> },
      //   ],
      // },

      // { path: "meals", element: <MealListPage /> },
      // {
      //   path: "meal",
      //   children: [
      //     { path: "create", element: <MealCreatePage /> },
      //     { path: ":id", element: <MealEditPage /> },
      //   ],
      // },
    ],
  },
]);
