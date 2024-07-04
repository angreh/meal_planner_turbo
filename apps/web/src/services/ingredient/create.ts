import axios from "axios";
import { ReplyResponseType, Ingredient } from "shared-types";
import { UseMutationResult, useMutation } from "@tanstack/react-query";

import { useIngredientStore } from "@/stores/ingredient";

export const create = async (ingredient: Ingredient): Promise<string> => {
  try {
    const result = await axios.post<ReplyResponseType<Ingredient>>(
      "http://localhost:3000/ingredient",
      ingredient
    );

    if (result.status === 201) {
      return result.data.response.id!;
    }
  } catch (error) {
    throw new Error((error as any).message);
  }

  throw new Error("Error creating program");
};

export const useCreate = (): UseMutationResult<
  string,
  Error,
  void,
  unknown
> => {
  const { ingredient } = useIngredientStore();

  return useMutation<string>({
    mutationKey: ["createIngredient", ingredient.name],
    mutationFn: async () => {
      return await create({
        name: ingredient.name,
      });
    },
  });
};
