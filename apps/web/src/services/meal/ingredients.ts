import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { Ingredient, ReplyResponseType } from "shared-types";
import { StatusCodes } from "http-status-codes";
import axios from "axios";
import { useMealStore } from "@/stores/meal";

export const listIngredients = async (
  mealId: string
): Promise<Ingredient[]> => {
  try {
    const result = await axios.get<ReplyResponseType<Ingredient[]>>(
      `http://localhost:3000/meal/${mealId}/ingredients`
    );

    if (result.status === StatusCodes.OK) {
      return result.data.response;
    }
  } catch (error) {
    throw new Error((error as any).message);
  }

  return [];
};

export const useListIngredients = (): UseQueryResult<Ingredient[], Error> => {
  const { meal } = useMealStore();
  return useQuery({
    queryKey: ["meals"],
    queryFn: async () => listIngredients(meal.id!),
  });
};
