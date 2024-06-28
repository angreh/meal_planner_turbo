import { ReplyResponseType } from "shared-types";
import axios from "axios";
import { UseMutationResult, useMutation } from "@tanstack/react-query";

import { Ingredient } from "shared-types";
import { useIngredientStore } from "@/stores/ingredient";

export const create = async (ingredient: Ingredient): Promise<boolean> => {
	try {
		const result = await axios.post<ReplyResponseType<Ingredient>>(
			"http://localhost:3000/ingredient",
			ingredient,
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
	const { ingredient } = useIngredientStore();

	return useMutation<boolean>({
		mutationKey: ["createIngredient", ingredient.name],
		mutationFn: async () => {
			return await create({
				name: ingredient.name,
			});
		},
	});
};
