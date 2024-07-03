import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHolder } from "@/components/ui/pageHolder";
import { Ingredient } from "shared-types";
import { Button } from "@/components/ui/button";

export const PlanGroceriesPage = () => {
  const { id } = useParams();
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    const getData = async () => {
      const res = await axios.get(`http://localhost:3000/plan/${id}/groceries`);
      setIngredients(res.data.response);
    };
    getData();
  }, [id]);

  return (
    <PageHolder>
      <Card>
        <CardHeader>
          <CardTitle>Groceries</CardTitle>
        </CardHeader>

        <CardContent>
          <ul className="list-disc list-inside pl-4">
            {ingredients.length &&
              ingredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.name}</li>
              ))}
          </ul>
        </CardContent>
      </Card>
      <Button
        variant="outline"
        className="w-full"
        onClick={() => navigate(`/plan/${id}`)}>
        Back
      </Button>
    </PageHolder>
  );
};
