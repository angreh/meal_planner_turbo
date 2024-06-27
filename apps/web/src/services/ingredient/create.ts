// import axios from "axios";
// import { UseQueryResult, useQuery } from "@tanstack/react-query";
// import { ReplyResponseType } from "shared-types";
// import { StatusCodes } from "http-status-codes";

// import { Ingredient } from "@/types/ingredient";

// export const list = async (): Promise<Ingredient[]> => {
//   try {
//     const result = await axios.get<ReplyResponseType<Ingredient[]>>(
//       "http://localhost:3000/ingredient"
//     );

//     if (result.status === StatusCodes.OK) {
//       return result.data.response;
//     }
//   } catch (error) {
//     throw new Error((error as any).message);
//   }

//   return [];
// };

// export const useList = (): UseQueryResult<Ingredient[], Error> => {
//   return useQuery({
//     queryKey: ["ingredients"],
//     queryFn: list,
//   });
// };
import { ReplyResponseType } from "shared-types";
import axios from "axios";
import { UseMutationResult, useMutation } from "@tanstack/react-query";

import { Ingredient } from "@/types/ingredient";
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
		mutationKey: ["create", ingredient.name],
		mutationFn: async () => {
			return await create({
				name: ingredient.name,
			});
		},
	});
};
