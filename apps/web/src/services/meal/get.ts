import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { ReplyResponseType } from "shared-types";
import { StatusCodes } from "http-status-codes";
import { Meal } from "shared-types";
import axios from "axios";

import { useMealStore } from "@/stores/meal";

export const get = async (id: string): Promise<Meal> => {
  try {
    const result = await axios.get<ReplyResponseType<Meal>>(
      "http://localhost:3000/meal/" + id
    );

    if (result.status === StatusCodes.OK) {
      return result.data.response;
    }
  } catch (error) {
    throw new Error((error as any).message);
  }

  return {} as Meal;
};

export const useGet = (id: string) => {
  const { setMealProperty } = useMealStore();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["getMeal", id],
    queryFn: async () => await get(id),
  });

  useEffect(() => {
    if (data) {
      setMealProperty("name", data.name);
      setMealProperty("id", data.id!);
    }
  }, [data]);

  return { isLoading, isError };
};
