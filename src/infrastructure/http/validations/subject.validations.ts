import { body } from "express-validator";

export const createSubjectValidation = [
    body("name")
        .notEmpty()
        .withMessage("El nombre es obligatorio"),
    body("schoolId")
        .notEmpty()
        .withMessage("El ID de la escuela es obligatorio")
        .isUUID()
        .withMessage("ID de escuela inválido")
];

export const updateSubjectValidation = [
    body("name")
        .optional()
        .notEmpty()
        .withMessage("El nombre no puede estar vacío"),
    body("schoolId")
        .optional()
        .isUUID()
        .withMessage("ID de escuela inválido")
];
