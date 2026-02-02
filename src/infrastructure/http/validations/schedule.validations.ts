import { body } from "express-validator";

export const createScheduleValidation = [
    body("academicPeriodId")
        .notEmpty()
        .withMessage("El ID del periodo académico es obligatorio")
        .isUUID()
        .withMessage("ID de periodo académico inválido"),
    body("teacherId")
        .notEmpty()
        .withMessage("El ID del docente es obligatorio")
        .isUUID()
        .withMessage("ID de docente inválido"),
    body("groupId")
        .notEmpty()
        .withMessage("El ID del grupo es obligatorio")
        .isUUID()
        .withMessage("ID de grupo inválido"),
    body("subjectId")
        .notEmpty()
        .withMessage("El ID de la materia es obligatorio")
        .isUUID()
        .withMessage("ID de materia inválido")
];

export const updateScheduleValidation = [
    body("academicPeriodId")
        .optional()
        .isUUID()
        .withMessage("ID de periodo académico inválido"),
    body("teacherId")
        .optional()
        .isUUID()
        .withMessage("ID de docente inválido"),
    body("groupId")
        .optional()
        .isUUID()
        .withMessage("ID de grupo inválido"),
    body("subjectId")
        .optional()
        .isUUID()
        .withMessage("ID de materia inválido")
];
