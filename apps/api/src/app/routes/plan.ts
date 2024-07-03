import { Router } from "express";

import {
  list,
  create,
  get,
  edit,
  addMeal,
  listMeals,
} from "../controllers/plan";

const router = Router();

router.get("/", list);
router.post("/", create);
router.get("/:id", get);
router.put("/", edit);

// meals
router.get("/:id/meals", listMeals);
router.put("/:id/meal", addMeal);

export default router;
