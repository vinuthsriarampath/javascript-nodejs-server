import Joi from "joi";

export const createUserSchema = Joi.object({
    firstName: Joi.string().required().messages({
        "any.required": "First name is required!",
        "string.base": "First name must be a string",
        "string.empty": "First name cannot be empty",
    }),
    lastName: Joi.string().required().messages({
        "any.required": "Last name is required!",
        "string.base": "Last name must be a string",
        "string.empty": "Last name cannot be empty",
    }),
    email: Joi.string().email().required().messages({
        "any.required": "Email is required",
        "string.email": "Email must be a valid email address",
        "string.empty": "Email cannot be empty",
    }),
});