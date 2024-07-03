import { createBrowserRouter } from "react-router-dom";

import { RootLayout } from "@/layouts/root";
import { HomeRoutes } from "./home";
import { IngredientRoutes } from "./ingredients";
import { MealRoutes } from "./meal";
import { PlanRoutes } from "./plan";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      ...HomeRoutes,
      ...IngredientRoutes,
      ...MealRoutes,
      ...PlanRoutes,
    ],
  },
]);
