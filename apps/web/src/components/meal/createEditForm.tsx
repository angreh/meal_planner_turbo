import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IngredientList } from "./ingredientList";
import { useMealStore } from "@/stores/meal";

export const CreateEditForm = () => {
  const { meal, setMealProperty } = useMealStore();

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
          </div>
        </CardContent>
      </Card>

      <IngredientList />
    </>
  );
};
