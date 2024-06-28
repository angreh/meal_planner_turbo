import { Handler } from "express";
import { StatusCodes } from "http-status-codes";
import { Plan } from "shared-types";

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
    const plan = req.body as Plan;
    const newPlan = await planRepository.create(plan);

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
    const Plan = req.body as Plan;
    const newPlan = await planRepository.edit(Plan);

    res.reply<Plan>(StatusCodes.OK, newPlan);
  } catch (error) {
    res.reply<Error>(StatusCodes.INTERNAL_SERVER_ERROR, error);
  }
};
