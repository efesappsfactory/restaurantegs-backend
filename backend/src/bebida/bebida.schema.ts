import * as Joi from 'joi';

export const BEBIDA_SCHEMA = Joi
  .object()
  .keys({
    tipoBebida: Joi
      .string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
    saborBebida: Joi
      .string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
  });