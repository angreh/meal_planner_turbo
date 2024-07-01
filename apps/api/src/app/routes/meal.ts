import { Router } from "express";

import {
  list,
  create,
  get,
  edit,
  listIngredients,
  addIngredient,
} from "../controllers/meal";

const router = Router();

router.get("/", list);
router.post("/", create);
router.get("/:id", get);
router.put("/", edit);

// ingredients
router.get("/:id/ingredients", listIngredients);
router.put("/:id/ingredient", addIngredient);

export default router;
