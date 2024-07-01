import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useList } from "@/services/ingredient/list";
import { create } from "@/services/ingredient/create";
import { useIngredientStore } from "@/stores/ingredient";
import { Button } from "@/components/ui/button";

export const MealIngredientsPage = () => {
  const { data } = useList();
  const { id } = useParams();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const { setIngredientProperty } = useIngredientStore();

  const addHandler = async (ingredientId: string) => {
    console.log("add");
    const result = await axios.put(
      `http://localhost:3000/meal/${id}/ingredient`,
      {
        id: ingredientId,
      }
    );
    console.log(result);

    backHandler();
  };

  const createHandler = async () => {
    setIngredientProperty("name", search);
    const resultCreate = await create({
      name: search,
    });
    if (resultCreate) {
      addHandler(resultCreate as string);
    }
  };

  const backHandler = () => {
    navigate(`/meal/${id}`);
  };

  return (
    <>
      <Command>
        <CommandInput
          placeholder="Type a ingredient name"
          value={search}
          onValueChange={setSearch}
        />
        <CommandList>
          <CommandEmpty>
            Create a new ingredient "{search}" -{" "}
            <span onClick={createHandler}>Create</span>
          </CommandEmpty>

          <CommandGroup heading="Meals">
            {data?.map((ingredient) => (
              <CommandItem key={ingredient.id} value={ingredient.name}>
                {ingredient.name}
                <span className="ml-2 text-gray-700">#{ingredient.id}</span>
                <span onClick={() => addHandler(ingredient.id!)}>add</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
      <Button onClick={backHandler} variant="outline">
        Back
      </Button>
    </>
  );
};
