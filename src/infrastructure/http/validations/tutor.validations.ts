import { body } from "express-validator";

export const createTutorValidation = [
    body("personId")
        .trim()
        .notEmpty()
        .withMessage("El ID de la persona es obligatorio")
        .isUUID()
        .withMessage("ID de persona inválido"),
];

export const updateTutorValidation = [
    body("personId")
        .optional()
        .trim()
        .isUUID()
        .withMessage("ID de persona inválido"),
];
