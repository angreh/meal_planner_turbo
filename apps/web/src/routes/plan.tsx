import { PlanCreatePage } from "@/pages/plan/create";
import { PlanEditPage } from "@/pages/plan/edit";
import { PlanGroceriesPage } from "@/pages/plan/groceries";
import { PlanListPage } from "@/pages/plan/list";
import { PlanMealsPage } from "@/pages/plan/meals";

export const PlanRoutes = [
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
];
