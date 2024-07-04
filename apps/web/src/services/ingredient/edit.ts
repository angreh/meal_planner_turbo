import axios from "axios";
import { ReplyResponseType, Ingredient } from "shared-types";
import { StatusCodes } from "http-status-codes";
import { UseMutationResult, useMutation } from "@tanstack/react-query";

import { useIngredientStore } from "@/stores/ingredient";

export const edit = async (ingredient: Ingredient): Promise<boolean> => {
  try {
    const result = await axios.put<ReplyResponseType<Ingredient>>(
      "http://localhost:3000/ingredient",
      ingredient
    );

    if (result.status === StatusCodes.OK) {
      return true;
    }
  } catch (error) {
    throw new Error((error as any).message);
  }

  throw new Error("Error creating program");
};

export const useEdit = (): UseMutationResult<boolean, Error, void, unknown> => {
  const { ingredient } = useIngredientStore();

  return useMutation<boolean>({
    mutationKey: ["editIngredient", ingredient.name],
    mutationFn: async () => await edit(ingredient),
  });
};
