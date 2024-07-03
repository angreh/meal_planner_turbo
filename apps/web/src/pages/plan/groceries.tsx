import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { PageHolder } from "@/components/ui/pageHolder";
import { Ingredient } from "shared-types";

export const PlanGroceriesPage = () => {
  const { id } = useParams();
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

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
        <CardTitle>Groceries</CardTitle>

        <CardContent>
          <ul>
            {ingredients.length && ingredients.map((ingredient) => (
              <li key={ingredient.id}>- {ingredient.name}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </PageHolder>
  );
};
