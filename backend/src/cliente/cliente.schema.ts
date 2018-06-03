import * as Joi from 'joi';

export const CLIENTE_SCHEMA = Joi
  .object()
  .keys({
    nombreCliente: Joi
      .string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
    apellidoCliente: Joi
      .string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
    emailCliente: Joi
      .string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
  });