import "dotenv/config";

import express from "express";
import cors from "cors";
import bp from "body-parser";

import responseHandler from "./app/middlewares/responseHandler";
import ingredientRouter from "./app/routes/ingredient";
import mealRouter from "./app/routes/meal";
import planRouter from "./app/routes/plan";

const app = express();

app
  .use(cors())
  .use(bp.json())
  .use(responseHandler)
  .use("/ingredient", ingredientRouter)
  .use("/meal", mealRouter)
  .use("/plan", planRouter);

const port = +(process.env.API_PORT ?? 3000);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
