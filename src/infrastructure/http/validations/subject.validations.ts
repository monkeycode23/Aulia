import { body } from "express-validator";

export const createSubjectValidation = [
    body("name")
        .trim()
        .notEmpty()
        .withMessage("El nombre es obligatorio")
        .escape()
        .isLength({ min: 3, max: 100 })
        .withMessage("El nombre debe tener entre 3 y 100 caracteres"),
    body("code")
        .optional()
        .trim()
        .escape()
        .isLength({ min: 2, max: 20 })
        .withMessage("El código debe tener entre 2 y 20 caracteres"),
    body("schoolId")
        .notEmpty()
        .withMessage("El ID de la escuela es obligatorio")
        .isUUID()
        .withMessage("ID de escuela inválido")
];

export const updateSubjectValidation = [
    body("name")
        .optional()
        .trim()
        .notEmpty()
        .withMessage("El nombre no puede estar vacío")
        .escape()
        .isLength({ min: 3, max: 100 })
        .withMessage("El nombre debe tener entre 3 y 100 caracteres"),
    body("code")
        .optional()
        .trim()
        .escape()
        .isLength({ min: 2, max: 20 })
        .withMessage("El código debe tener entre 2 y 20 caracteres"),
    body("schoolId")
        .optional()
        .isUUID()
        .withMessage("ID de escuela inválido")
];
