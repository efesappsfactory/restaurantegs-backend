import * as Joi from 'joi';

export const COMBO_SCHEMA = Joi
  .object()
  .keys({
    nombreCombo: Joi
      .string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
  });