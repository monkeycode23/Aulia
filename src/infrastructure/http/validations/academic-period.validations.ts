import { body } from "express-validator";

export const createAcademicPeriodValidation = [
    body("name")
        .notEmpty()
        .withMessage("El nombre es obligatorio"),
    body("startDate")
        .notEmpty()
        .withMessage("La fecha de inicio es obligatoria")
        .isISO8601()
        .withMessage("Fecha de inicio inválida"),
    body("endDate")
        .notEmpty()
        .withMessage("La fecha de fin es obligatoria")
        .isISO8601()
        .withMessage("Fecha de fin inválida"),
    body("schoolId")
        .notEmpty()
        .withMessage("El ID de la escuela es obligatorio")
        .isUUID()
        .withMessage("ID de escuela inválido")
];

export const updateAcademicPeriodValidation = [
    body("name")
        .optional()
        .notEmpty()
        .withMessage("El nombre no puede estar vacío"),
    body("startDate")
        .optional()
        .isISO8601()
        .withMessage("Fecha de inicio inválida"),
    body("endDate")
        .optional()
        .isISO8601()
        .withMessage("Fecha de fin inválida"),
    body("schoolId")
        .optional()
        .isUUID()
        .withMessage("ID de escuela inválido")
];
