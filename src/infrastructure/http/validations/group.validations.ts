import { body } from "express-validator";

export const createGroupValidation = [
    body("name")
        .notEmpty()
        .withMessage("El nombre es obligatorio"),
    body("gradeLevel")
        .notEmpty()
        .withMessage("El nivel de grado es obligatorio"),
    body("schoolId")
        .notEmpty()
        .withMessage("El ID de la escuela es obligatorio")
        .isUUID()
        .withMessage("ID de escuela inválido")
];

export const updateGroupValidation = [
    body("name")
        .optional()
        .notEmpty()
        .withMessage("El nombre no puede estar vacío"),
    body("gradeLevel")
        .optional()
        .notEmpty()
        .withMessage("El nivel de grado no puede estar vacío"),
    body("schoolId")
        .optional()
        .isUUID()
        .withMessage("ID de escuela inválido")
];
