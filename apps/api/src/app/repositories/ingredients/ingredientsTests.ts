// import { IngredientRepository } from "./Ingredients";

// export const postgressRepository: IngredientRepository = {
//   getIngredients: async () => {
//     return [
//       { id: '1', name: 'Apple' },
//       { id: '2', name: 'Banana' },
//       { id: '3', name: 'Orange' },
//     ];
//   },
// };

// import { db } from "./drizzle/db";
// import { UserTable } from "./drizzle/schema";
// import { asc, eq, sql, and } from "drizzle-orm";
// import express, { Request, Response } from "express";
// import { Sample } from "shared-types";

// const app = express();
// const port = 3000;

// app.get("/", (req: Request, res: Response) => {
//   res.json({ text: "Hello from the API!" } as Sample);
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

// async function main() {
//   console.log("Hello from the API!");
  // await db.insert(UserTable).values({ name: "Angreh" });
  // const user = await db.query.UserTable.findFirst();
  // console.log(user);

  // # INSERTING
  // await db.delete(UserTable);
  // const user = await db
  //   .insert(UserTable)
  //   .values([
  //     {
  //       name: "Angreh",
  //       age: 12,
  //       email: "angreh@example.com",
  //       role: "ADMIN",
  //     },
  //     {
  //       name: "Jonh Doe",
  //       age: 24,
  //       email: "jonh@example.com",
  //       role: "BASIC",
  //     },
  //   ])
  //   .returning({
  //     id: UserTable.id,
  //   })
  // console.log(user);

  // # SELECTING
  // const users = await db.query.UserTable.findMany({
  //   columns: { email: true, age: true },
  //   extras: {
  //     lowerCaseName: sql<string>`lower(${UserTable.name})`.as("lowerCaseName"),
  //   },
  //   with: {
  //     preferences: true,
  //     posts: true,
  //   },
  //   orderBy: (table, funcs) => funcs.asc(table.name),
  //   where: (table, funcs) => funcs.eq(table.age, 12),
  // });
  // console.log(users);

  // const users = await db
  //   .select({
  //     id: UserTable.id,
  //     email: UserTable.email,
  //     age: UserTable.age,
  //     role: UserTable.role,
  //   })
  //   .from(UserTable)
  //   .where(and(eq(UserTable.age, 12), eq(UserTable.role, "ADMIN")))
  //   .limit(1);
  // console.log(users);