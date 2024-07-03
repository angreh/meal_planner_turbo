import axios from "axios";
import { useEffect } from "react";
import { StatusCodes } from "http-status-codes";
import { Meal, ReplyResponseType } from "shared-types";
import { useQuery } from "@tanstack/react-query";

import { useMealStore } from "@/stores/meal";

export const listMeals = async (
  mealId: string
): Promise<Meal[]> => {
  try {
    const result = await axios.get<ReplyResponseType<Meal[]>>(
      `http://localhost:3000/plan/${mealId}/meals`
    );

    if (result.status === StatusCodes.OK) {
      return result.data.response;
    }
  } catch (error) {
    throw new Error((error as any).message);
  }

  return [];
};

export const useListMeals = (mealId: string) => {
  const { setMeals } = useMealStore();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["meals"],
    queryFn: async () => listMeals(mealId),
  });

  useEffect(() => {
    if (data) {
      setMeals(data);
    }
  }, [data]);

  return { isLoading, isError };
};
