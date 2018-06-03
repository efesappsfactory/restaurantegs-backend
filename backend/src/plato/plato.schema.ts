import * as Joi from 'joi';

export const PLATO_SCHEMA = Joi
  .object()
  .keys({
    nombrePlato: Joi
      .string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
  });