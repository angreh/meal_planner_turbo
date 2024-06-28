import { Router } from "express";

import { list, create, get, edit } from "../controllers/ingredient";

const router = Router();

router.get("/", list);
router.post("/", create);
router.get("/:id", get);
router.put("/", edit);

export default router;
