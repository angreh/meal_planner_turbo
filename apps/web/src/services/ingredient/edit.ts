import { ReplyResponseType } from "shared-types";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { Ingredient } from "shared-types";
import axios from "axios";

import { useIngredientStore } from "@/stores/ingredient";
import { StatusCodes } from "http-status-codes";

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
    mutationKey: ["create", ingredient.name],
    mutationFn: async () => await edit(ingredient),
  });
};
