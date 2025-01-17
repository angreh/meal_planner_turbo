import axios from "axios";
import { useEffect } from "react";
import { StatusCodes } from "http-status-codes";
import { Ingredient, ReplyResponseType } from "shared-types";
import { useQuery } from "@tanstack/react-query";

import { useIngredientStore } from "@/stores/ingredient";

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

export const useListIngredients = (mealId: string) => {
  const { setIngredients } = useIngredientStore();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["meals"],
    queryFn: async () => listIngredients(mealId),
  });

  useEffect(() => {
    if (data) {
      setIngredients(data);
    }
  }, [data]);

  return { isLoading, isError };
};
