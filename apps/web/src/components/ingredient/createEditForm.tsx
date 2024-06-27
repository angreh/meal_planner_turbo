import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useIngredientStore } from "@/stores/ingredient";

export const CreateEditForm = () => {
  const { ingredient, setIngredientProperty } = useIngredientStore();

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Meal</CardTitle>
        </CardHeader>

        <CardContent>
          <div>
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                name="name"
                value={ingredient.name}
                onChange={(e) => setIngredientProperty("name", e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
