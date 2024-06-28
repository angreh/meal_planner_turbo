CREATE TABLE IF NOT EXISTS "meals" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ingredients_to_meals" (
	"ingredient_id" uuid NOT NULL,
	"meal_id" uuid NOT NULL,
	CONSTRAINT "ingredients_to_meals_ingredient_id_meal_id_pk" PRIMARY KEY("ingredient_id","meal_id")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ingredients_to_meals" ADD CONSTRAINT "ingredients_to_meals_ingredient_id_ingredients_id_fk" FOREIGN KEY ("ingredient_id") REFERENCES "public"."ingredients"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ingredients_to_meals" ADD CONSTRAINT "ingredients_to_meals_meal_id_meals_id_fk" FOREIGN KEY ("meal_id") REFERENCES "public"."meals"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
