import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { ReplyResponseType } from "shared-types";
import { StatusCodes } from "http-status-codes";
import { Ingredient } from "shared-types";
import axios from "axios";

import { useIngredientStore } from "@/stores/ingredient";

export const get = async (id: string): Promise<Ingredient> => {
  try {
    const result = await axios.get<ReplyResponseType<Ingredient>>(
      "http://localhost:3000/ingredient/" + id
    );

    if (result.status === StatusCodes.OK) {
      return result.data.response;
    }
  } catch (error) {
    throw new Error((error as any).message);
  }

  return {} as Ingredient;
};

export const useGet = (id: string) => {
  const { setIngredientProperty } = useIngredientStore();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["ingredient", id],
    queryFn: async () => await get(id),
  });

  useEffect(() => {
    if (data) {
      setIngredientProperty("name", data.name);
      setIngredientProperty("id", data.id!);
    }
  }, [data]);

  return { isLoading, isError };
};
