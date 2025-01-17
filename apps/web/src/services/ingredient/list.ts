import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { ReplyResponseType } from "shared-types";
import { StatusCodes } from "http-status-codes";
import { Ingredient } from "shared-types";

import { useIngredientStore } from "@/stores/ingredient";
import { useEffect } from "react";

export const list = async (): Promise<Ingredient[]> => {
  try {
    const result = await axios.get<ReplyResponseType<Ingredient[]>>(
      "http://localhost:3000/ingredient"
    );

    if (result.status === StatusCodes.OK) {
      return result.data.response;
    }
  } catch (error) {
    throw new Error((error as any).message);
  }

  return [];
};

export const useList = () => {
  const { setIngredients } = useIngredientStore();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["ingredients"],
    queryFn: list,
  });

  useEffect(() => {
    if (data) {
      setIngredients(data);
    }
  }, [data]);

  return { isLoading, isError };
};
