import "dotenv/config";

import express from "express";
import cors from "cors";
import bp from "body-parser";

import responseHandler from "./app/middlewares/responseHandler";
import ingredientRouter from "./app/routes/ingredient";

const app = express();

app
  .use(cors())
  .use(bp.json())
  .use(responseHandler)
  .use("/ingredient", ingredientRouter);

const port = +(process.env.API_PORT ?? 3000);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
