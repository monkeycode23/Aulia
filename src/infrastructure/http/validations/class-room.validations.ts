import { body } from "express-validator";

export const createClassRoomValidation = [
    body("name")
        .notEmpty()
        .withMessage("El nombre es obligatorio"),
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
        .notEmpty()
        .withMessage("El nombre no puede estar vacío"),
    body("capacity")
        .optional()
        .isInt({ min: 1 })
        .withMessage("La capacidad debe ser un número entero mayor a 0"),
    body("schoolId")
        .optional()
        .isUUID()
        .withMessage("ID de escuela inválido")
];
