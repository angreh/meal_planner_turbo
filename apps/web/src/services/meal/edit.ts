import { ReplyResponseType } from "shared-types";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { Meal } from "shared-types";
import axios from "axios";

import { useMealStore } from "@/stores/meal";
import { StatusCodes } from "http-status-codes";

export const edit = async (meal: Meal): Promise<boolean> => {
  try {
    const result = await axios.put<ReplyResponseType<Meal>>(
      "http://localhost:3000/meal",
      meal
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
  const { meal } = useMealStore();

  return useMutation<boolean>({
    mutationKey: ["editMeal", meal.name],
    mutationFn: async () => await edit(meal),
  });
};