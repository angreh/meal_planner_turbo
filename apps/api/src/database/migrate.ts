import "dotenv/config";

import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";

const migrationClient = postgres(process.env.DATABASE_URL as string, {
  max: 1,
});

const main = async () => {
  await migrate(drizzle(migrationClient), {
    migrationsFolder: "./src/database/migrations",
  });

  migrationClient.end();
};

main();
