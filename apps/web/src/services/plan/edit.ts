import axios from "axios";
import { ReplyResponseType, Plan } from "shared-types";
import { StatusCodes } from "http-status-codes";
import { UseMutationResult, useMutation } from "@tanstack/react-query";

import { usePlanStore } from "@/stores/plan";

export const edit = async (plan: Plan): Promise<boolean> => {
  try {
    const result = await axios.put<ReplyResponseType<Plan>>(
      "http://localhost:3000/plan",
      plan
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
  const { plan } = usePlanStore();

  return useMutation<boolean>({
    mutationKey: ["editPlan", `${plan.dateStart}-${plan.dateEnd}`],
    mutationFn: async () => await edit(plan),
  });
};
