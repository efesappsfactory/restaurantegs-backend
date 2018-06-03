import * as Joi from 'joi';

export const RESTAURANTE_SCHEMA = Joi
  .object()
  .keys({
    nombreRestaurante: Joi
      .string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
  });