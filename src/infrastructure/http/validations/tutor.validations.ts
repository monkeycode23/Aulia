import { body } from "express-validator";

export const createTutorValidation = [
    body("personId")
        .notEmpty()
        .withMessage("El ID de la persona es obligatorio")
        .isUUID()
        .withMessage("ID de persona inválido")
];

export const updateTutorValidation = [
    body("personId")
        .optional()
        .isUUID()
        .withMessage("ID de persona inválido")
];
