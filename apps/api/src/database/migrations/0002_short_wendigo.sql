CREATE TABLE IF NOT EXISTS "plans" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"date_start" timestamp NOT NULL,
	"date_end" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "meals_to_plans" (
	"meal_id" uuid NOT NULL,
	"plan_id" uuid NOT NULL,
	CONSTRAINT "meals_to_plans_meal_id_plan_id_pk" PRIMARY KEY("meal_id","plan_id")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "meals_to_plans" ADD CONSTRAINT "meals_to_plans_meal_id_meals_id_fk" FOREIGN KEY ("meal_id") REFERENCES "public"."meals"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "meals_to_plans" ADD CONSTRAINT "meals_to_plans_plan_id_plans_id_fk" FOREIGN KEY ("plan_id") REFERENCES "public"."plans"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
