import { Handler } from "express";
import { StatusCodes } from "http-status-codes";
import { Ingredient } from "shared-types";

import {
  IngredientRepository,
} from "@/app/repositories/ingredients/ingredients";
import { postgressRepository as defaultRepo } from "@/app/repositories/ingredients/ingredientsPostGres";

const ingredientRepository: IngredientRepository = defaultRepo;

export const list: Handler = async (_, res) => {
  try {
    const ingredients = await ingredientRepository.list();

    res.reply<Ingredient[]>(StatusCodes.OK, ingredients);
  } catch (error) {
    res.reply<Error>(StatusCodes.INTERNAL_SERVER_ERROR, error);
  }
};

export const create: Handler = async (req, res) => {
  try {
    const ingredient = req.body as Ingredient;
    const newIngredient = await ingredientRepository.create(ingredient);

    res.reply<Ingredient>(StatusCodes.CREATED, newIngredient);
  } catch (error) {
    res.reply<Error>(StatusCodes.INTERNAL_SERVER_ERROR, error);
  }
};

export const get: Handler = async (req, res) => {
  try {
    const id = req.params.id as string;
    const ingredient = await ingredientRepository.get(id);

    res.reply<Ingredient>(StatusCodes.OK, ingredient);
  } catch (error) {
    res.reply<Error>(StatusCodes.INTERNAL_SERVER_ERROR, error);
  }
};

export const edit: Handler = async (req, res) => {
  try {
    const ingredient = req.body as Ingredient;
    const newIngredient = await ingredientRepository.edit(ingredient);

    res.reply<Ingredient>(StatusCodes.OK, newIngredient);
  } catch (error) {
    res.reply<Error>(StatusCodes.INTERNAL_SERVER_ERROR, error);
  }
};
