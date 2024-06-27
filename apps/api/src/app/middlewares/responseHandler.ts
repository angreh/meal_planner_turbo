import { Handler } from "express";
import { StatusCodes } from "http-status-codes";
import { ReplyResponseType } from "shared-types";

const responseHandler: Handler = (req, res, next) => {
  res.reply = <T>(httpStatus: StatusCodes, response: T) => {
    res.status(httpStatus).send({
      response: response,
      date: new Date(),
    } as ReplyResponseType<T>);
  };

  next();
};

export default responseHandler;
