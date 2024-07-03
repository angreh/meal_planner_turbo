import { Handler } from "express";
import { StatusCodes } from "http-status-codes";
import { Ingredient, Meal, Plan } from "shared-types";

import { PlanRepository } from "@/app/repositories/plans/plans";
import { postgressRepository as defaultRepo } from "@/app/repositories/plans/plansPostGres";

const planRepository: PlanRepository = defaultRepo;

export const list: Handler = async (_, res) => {
  try {
    const plans = await planRepository.list();

    res.reply<Plan[]>(StatusCodes.OK, plans);
  } catch (error) {
    res.reply<Error>(StatusCodes.INTERNAL_SERVER_ERROR, error);
  }
};

export const create: Handler = async (req, res) => {
  try {
    const plan = req.body;
    const newPlan = await planRepository.create({
      dateStart: new Date(plan.dateStart),
      dateEnd: new Date(plan.dateEnd),
    } as Plan);

    res.reply<Plan>(StatusCodes.CREATED, newPlan);
  } catch (error) {
    res.reply<Error>(StatusCodes.INTERNAL_SERVER_ERROR, error);
  }
};

export const get: Handler = async (req, res) => {
  try {
    const id = req.params.id as string;
    const plan = await planRepository.get(id);

    res.reply<Plan>(StatusCodes.OK, plan);
  } catch (error) {
    res.reply<Error>(StatusCodes.INTERNAL_SERVER_ERROR, error);
  }
};

export const edit: Handler = async (req, res) => {
  try {
    const plan = req.body;
    const newPlan = await planRepository.edit({
      id: plan.id,
      dateStart: new Date(plan.dateStart),
      dateEnd: new Date(plan.dateEnd),
    } as Plan);

    res.reply<Plan>(StatusCodes.OK, newPlan);
  } catch (error) {
    res.reply<Error>(StatusCodes.INTERNAL_SERVER_ERROR, error);
  }
};

export const addMeal: Handler = async (req, res) => {
  try {
    const planId = req.params.id as string;
    const mealId = req.body.id as string;

    await planRepository.addMeal(planId, mealId);
    return res.reply<boolean>(StatusCodes.OK, true);
  } catch (error) {
    res.reply<Error>(StatusCodes.INTERNAL_SERVER_ERROR, error);
  }
};

export const listMeals: Handler = async (req, res) => {
  try {
    const planId = req.params.id as string;
    const meals = await planRepository.listMeals(planId);

    res.reply<Meal[]>(StatusCodes.OK, meals);
  } catch (error) {
    res.reply<Error>(StatusCodes.INTERNAL_SERVER_ERROR, error);
  }
};

export const listIngredients: Handler = async (req, res) => {
  try {
    const planId = req.params.id as string;
    const ingredients = await planRepository.listIngredients(planId);

    res.reply<Ingredient[]>(StatusCodes.OK, ingredients);
  } catch (error) {
    res.reply<Error>(StatusCodes.INTERNAL_SERVER_ERROR, error);
  }
};