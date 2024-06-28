import { ReplyResponseType } from "shared-types";
import axios from "axios";
import { UseMutationResult, useMutation } from "@tanstack/react-query";

import { Meal } from "shared-types";
import { useMealStore } from "@/stores/meal";

export const create = async (meal: Meal): Promise<boolean> => {
	try {
		const result = await axios.post<ReplyResponseType<Meal>>(
			"http://localhost:3000/meal",
			meal,
		);

		if (result.status === 201) {
			return true;
		}
	} catch (error) {
		throw new Error((error as any).message);
	}

	throw new Error("Error creating program");
};

export const useCreate = (): UseMutationResult<boolean, Error, void, unknown> => {
	const { meal } = useMealStore();

	return useMutation<boolean>({
		mutationKey: ["createMeal", meal.name],
		mutationFn: async () => {
			return await create({
				name: meal.name,
			});
		},
	});
};
