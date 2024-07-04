import axios from "axios";
import { useEffect } from "react";
import { ReplyResponseType, Meal } from "shared-types";
import { StatusCodes } from "http-status-codes";
import { useQuery } from "@tanstack/react-query";

import { useMealStore } from "@/stores/meal";

export const list = async (): Promise<Meal[]> => {
  try {
    const result = await axios.get<ReplyResponseType<Meal[]>>(
      "http://localhost:3000/meal"
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
  const { setMeals } = useMealStore();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["meals"],
    queryFn: list,
  });

  useEffect(() => {
    if (data) {
      setMeals(data);
    }
  }, [data]);

  return { isLoading, isError };
};
