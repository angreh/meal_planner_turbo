import e, { Handler } from "express";
import { StatusCodes } from "http-status-codes";
import { Ingredient, Meal } from "shared-types";

import { MealRepository } from "@/app/repositories/meals/meals";
import { postgressRepository as defaultRepo } from "@/app/repositories/meals/mealsPostGres";

const mealRepository: MealRepository = defaultRepo;

export const list: Handler = async (_, res) => {
  try {
    const meals = await mealRepository.list();

    res.reply<Meal[]>(StatusCodes.OK, meals);
  } catch (error) {
    res.reply<Error>(StatusCodes.INTERNAL_SERVER_ERROR, error);
  }
};

export const create: Handler = async (req, res) => {
  try {
    const meal = req.body as Meal;
    const newMeal = await mealRepository.create(meal);

    res.reply<Meal>(StatusCodes.CREATED, newMeal);
  } catch (error) {
    res.reply<Error>(StatusCodes.INTERNAL_SERVER_ERROR, error);
  }
};

export const get: Handler = async (req, res) => {
  try {
    const id = req.params.id as string;
    const meal = await mealRepository.get(id);

    res.reply<Meal>(StatusCodes.OK, meal);
  } catch (error) {
    res.reply<Error>(StatusCodes.INTERNAL_SERVER_ERROR, error);
  }
};

export const edit: Handler = async (req, res) => {
  try {
    const Meal = req.body as Meal;
    const newMeal = await mealRepository.edit(Meal);

    res.reply<Meal>(StatusCodes.OK, newMeal);
  } catch (error) {
    res.reply<Error>(StatusCodes.INTERNAL_SERVER_ERROR, error);
  }
};

export const listIngredients: Handler = async (req, res) => {
  try {
    const mealId = req.params.id as string;
    const ingredients = await mealRepository.listIngredients(mealId);

    return res.reply<Ingredient[]>(StatusCodes.OK, ingredients);
  } catch (error) {
    res.reply<Error>(StatusCodes.INTERNAL_SERVER_ERROR, error);
  }
};

export const addIngredient: Handler = async (req, res) => {
  try {
    const mealId = req.params.id as string;
    const ingredientId = req.body.id as string;

    await mealRepository.addIngredient(mealId, ingredientId);
    return res.reply<boolean>(StatusCodes.OK, true);
  } catch (error) {
    res.reply<Error>(StatusCodes.INTERNAL_SERVER_ERROR, error);
  }
};
