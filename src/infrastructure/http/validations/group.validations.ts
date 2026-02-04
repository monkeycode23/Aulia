import { body } from "express-validator";

export const createGroupValidation = [
    body("name")
        .trim()
        .notEmpty()
        .withMessage("El nombre es obligatorio")
        .escape()
        .isLength({ min: 2, max: 50 })
        .withMessage("El nombre debe tener entre 2 y 50 caracteres"),
    body("gradeLevel")
        .trim()
        .notEmpty()
        .withMessage("El nivel de grado es obligatorio")
        .escape()
        .isLength({ min: 2, max: 50 })
        .withMessage("El nivel de grado debe tener entre 2 y 50 caracteres"),
    body("schoolId")
        .notEmpty()
        .withMessage("El ID de la escuela es obligatorio")
        .isUUID()
        .withMessage("ID de escuela inválido")
];

export const updateGroupValidation = [
    body("name")
        .optional()
        .trim()
        .notEmpty()
        .withMessage("El nombre no puede estar vacío")
        .escape()
        .isLength({ min: 2, max: 50 })
        .withMessage("El nombre debe tener entre 2 y 50 caracteres"),
    body("gradeLevel")
        .optional()
        .trim()
        .notEmpty()
        .withMessage("El nivel de grado no puede estar vacío")
        .escape()
        .isLength({ min: 2, max: 50 })
        .withMessage("El nivel de grado debe tener entre 2 y 50 caracteres"),
    body("schoolId")
        .optional()
        .isUUID()
        .withMessage("ID de escuela inválido")
];
