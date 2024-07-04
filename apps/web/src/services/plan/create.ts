import axios from "axios";
import { ReplyResponseType, Plan } from "shared-types";
import { UseMutationResult, useMutation } from "@tanstack/react-query";

import { usePlanStore } from "@/stores/plan";

export const create = async (plan: Plan): Promise<boolean> => {
  try {
    const result = await axios.post<ReplyResponseType<Plan>>(
      "http://localhost:3000/plan",
      plan
    );

    if (result.status === 201) {
      return true;
    }
  } catch (error) {
    throw new Error((error as any).message);
  }

  throw new Error("Error creating program");
};

export const useCreate = (): UseMutationResult<
  boolean,
  Error,
  void,
  unknown
> => {
  const { plan } = usePlanStore();

  return useMutation<boolean>({
    mutationKey: ["createPlan", `${plan.dateStart}-${plan.dateEnd}`],
    mutationFn: async () => {
      return await create({
        dateStart: plan.dateStart,
        dateEnd: plan.dateEnd,
      });
    },
  });
};
