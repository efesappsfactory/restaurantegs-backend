import * as Joi from 'joi';

export const MENU_SCHEMA = Joi
  .object()
  .keys({
    codigoMenu: Joi
      .string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
  });