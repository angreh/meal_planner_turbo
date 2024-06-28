import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { ReplyResponseType } from "shared-types";
import { StatusCodes } from "http-status-codes";
import { Plan } from "shared-types";
import axios from "axios";

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

export const useList = (): UseQueryResult<Plan[], Error> => {
  return useQuery({
    queryKey: ["plans"],
    queryFn: list,
  });
};
