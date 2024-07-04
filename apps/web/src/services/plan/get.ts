import axios from "axios";
import { useEffect } from "react";
import { ReplyResponseType, Plan } from "shared-types";
import { StatusCodes } from "http-status-codes";
import { useQuery } from "@tanstack/react-query";

import { usePlanStore } from "@/stores/plan";

export const get = async (id: string): Promise<Plan> => {
  try {
    const result = await axios.get<ReplyResponseType<Plan>>(
      "http://localhost:3000/plan/" + id
    );

    if (result.status === StatusCodes.OK) {
      return result.data.response;
    }
  } catch (error) {
    throw new Error((error as any).message);
  }

  return {} as Plan;
};

export const useGet = (id: string) => {
  const { setPlanProperty } = usePlanStore();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["getPlan", id],
    queryFn: async () => await get(id),
  });

  useEffect(() => {
    if (data) {
      setPlanProperty("dateStart", new Date(data.dateStart));
      setPlanProperty("dateEnd", new Date(data.dateEnd));
      setPlanProperty("id", data.id!);
    }
  }, [data]);

  return { isLoading, isError };
};
