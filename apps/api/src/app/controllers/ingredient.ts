import { Handler } from "express";
import { StatusCodes } from "http-status-codes";

import {
  Ingredient,
  IngredientRepository,
} from "@/repositories/ingredients/Ingredients";
import { postgressRepository as defaultRepo } from "@/repositories/ingredients/ingredientsPostGres";

const ingredientRepository: IngredientRepository = defaultRepo;

export const get: Handler = async (_, res) => {
  const ingredients = await ingredientRepository.get();

  res.reply<Ingredient[]>(StatusCodes.OK, ingredients);
};

export const create: Handler = async (req, res) => {
  const ingredient = req.body as Ingredient;

  console.log(ingredient);

  const newIngredient = await ingredientRepository.create(ingredient);

  res.reply<Ingredient>(StatusCodes.CREATED, newIngredient);
};
