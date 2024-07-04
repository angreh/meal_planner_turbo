import axios from "axios";
import { useEffect } from "react";
import { ReplyResponseType, Plan } from "shared-types";
import { StatusCodes } from "http-status-codes";
import { useQuery } from "@tanstack/react-query";

import { usePlanStore } from "@/stores/plan";

export const list = async (): Promise<Plan[]> => {
  try {
    const result = await axios.get<ReplyResponseType<Plan[]>>(
      "http://localhost:3000/plan"
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
  const { setPlans } = usePlanStore();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["plans"],
    queryFn: list,
  });

  useEffect(() => {
    if (data) {
      setPlans(data);
    }
  }, [data]);

  return { isLoading, isError };
};
