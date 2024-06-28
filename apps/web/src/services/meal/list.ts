import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { ReplyResponseType } from "shared-types";
import { StatusCodes } from "http-status-codes";
import { Meal } from "shared-types";
import axios from "axios";

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

export const useList = (): UseQueryResult<Meal[], Error> => {
  return useQuery({
    queryKey: ["meals"],
    queryFn: list,
  });
};
