import { body } from "express-validator";

export const createClassRoomValidation = [
    body("name")
        .trim()
        .notEmpty()
        .withMessage("El nombre es obligatorio")
        .escape()
        .isLength({ min: 2, max: 50 })
        .withMessage("El nombre debe tener entre 2 y 50 caracteres"),
    body("description")
        .optional()
        .trim()
        .escape()
        .isLength({ max: 500 })
        .withMessage("La descripción no puede exceder los 500 caracteres"),
    body("capacity")
        .notEmpty()
        .withMessage("La capacidad es obligatoria")
        .isInt({ min: 1 })
        .withMessage("La capacidad debe ser un número entero mayor a 0"),
    body("schoolId")
        .notEmpty()
        .withMessage("El ID de la escuela es obligatorio")
        .isUUID()
        .withMessage("ID de escuela inválido")
];

export const updateClassRoomValidation = [
    body("name")
        .optional()
        .trim()
        .notEmpty()
        .withMessage("El nombre no puede estar vacío")
        .escape()
        .isLength({ min: 2, max: 50 })
        .withMessage("El nombre debe tener entre 2 y 50 caracteres"),
    body("description")
        .optional()
        .trim()
        .escape()
        .isLength({ max: 500 })
        .withMessage("La descripción no puede exceder los 500 caracteres"),
    body("capacity")
        .optional()
        .isInt({ min: 1 })
        .withMessage("La capacidad debe ser un número entero mayor a 0"),
    body("schoolId")
        .optional()
        .isUUID()
        .withMessage("ID de escuela inválido")
];
