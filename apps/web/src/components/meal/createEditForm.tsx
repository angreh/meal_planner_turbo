import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IngredientList } from "./ingredientList";
import { useMealStore } from "@/stores/meal";
import { Button } from "../ui/button";

export const CreateEditForm = () => {
  const { meal, setMealProperty, resetMeal } = useMealStore();
  const navigate = useNavigate();

  useEffect(() => {
    resetMeal();
  }, [resetMeal]);

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Meal</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                name="name"
                value={meal.name}
                onChange={(e) => setMealProperty("name", e.target.value)}
              />
            </div>
            <IngredientList />
          </div>
          <Button
            variant="outline"
            onClick={() => navigate(`/meal/${meal.id}/ingredients`)}>
            Add Ingredient
          </Button>
        </CardContent>
      </Card>
    </>
  );
};
