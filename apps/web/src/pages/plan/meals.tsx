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
import { useList } from "@/services/meal/list";
import { create } from "@/services/meal/create";
import { useMealStore } from "@/stores/meal";
import { Button } from "@/components/ui/button";

export const PlanMealsPage = () => {
  const { data } = useList();
  const { id } = useParams();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const { setMealProperty } = useMealStore();

  const addHandler = async (mealId: string) => {
    console.log("add");
    const result = await axios.put(
      `http://localhost:3000/plan/${id}/meal`,
      {
        id: mealId,
      }
    );
    console.log(result);

    backHandler();
  };

  const createHandler = async () => {
    setMealProperty("name", search);
    const resultCreate = await create({
      name: search,
    });
    if (resultCreate) {
      addHandler(resultCreate as any);
    }
  };

  const backHandler = () => {
    navigate(`/meal/${id}`);
  };

  return (
    <>
      <Command>
        <CommandInput
          placeholder="Type a meal name"
          value={search}
          onValueChange={setSearch}
        />
        <CommandList>
          <CommandEmpty>
            Create a new meal "{search}" -{" "}
            <span onClick={createHandler}>Create</span>
          </CommandEmpty>

          <CommandGroup heading="Meals">
            {data?.map((meal) => (
              <CommandItem key={meal.id} value={meal.name}>
                {meal.name}
                <span className="ml-2 text-gray-700">#{meal.id}</span>
                <span onClick={() => addHandler(meal.id!)}>add</span>
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
