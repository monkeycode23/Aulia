import { body } from "express-validator";


export const loginValidationRules = [
    body("email")
        .trim()
        .notEmpty()
        .withMessage("El email es obligatorio")
        .isEmail()
        .withMessage("Email inválido")
        .normalizeEmail(),
    body("password")
        .notEmpty()
        .withMessage("La contraseña es obligatoria")
        .isLength({ min: 6, max: 100 })
        .withMessage("La contraseña debe tener entre 6 y 100 caracteres"),
]

export const registerValidationRules = [
    body("username")
        .trim()
        .notEmpty()
        .withMessage("El nombre de usuario es obligatorio")
        .escape()
        .isLength({ min: 3, max: 50 })
        .withMessage("El nombre de usuario debe tener entre 3 y 50 caracteres"),
    body("email")
        .trim()
        .isEmail()
        .withMessage("Email inválido")
        .normalizeEmail(),
    body("terms")
        .notEmpty()
        .withMessage("Terminos y condiciones requerido")
        .custom((value) => {
            if (!value) {
                throw new Error("Debes aceptar los terminos y condiciones");
            }
            return true;
        }),
    body("password")
        .isLength({ min: 6, max: 100 })
        .withMessage("La contraseña debe tener entre 6 y 100 caracteres"),

    body("confirmPassword").custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error("Las contraseñas no coinciden");
        }
        return true;
    }),
]




export const forgotEmailValidationRules = [
    body("email")
        .trim()
        .notEmpty()
        .withMessage("El email es obligatorio")
        .isEmail()
        .withMessage("Email inválido")
        .normalizeEmail(),
]



export const forgotCodeValidationRules = [
    body("code")
        .trim()
        .notEmpty()
        .withMessage("El codigo es obligatorio")
        .isNumeric()
        .withMessage("El código debe contener solo números")
        .isLength({ min: 4, max: 4 })
        .withMessage("El código debe tener 4 dígitos"),

    body("token")
        .trim()
        .notEmpty()
        .withMessage("token no proveido")
]



export const forgotPasswordValidationRules = [
    body("password")
        .isLength({ min: 6, max: 100 })
        .withMessage("La contraseña debe tener entre 6 y 100 caracteres")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/)
        .withMessage(
            "La contraseña debe incluir al menos una mayúscula, una minúscula y un carácter especial"
        ),

    body("confirmPassword").custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error("Las contraseñas no coinciden");
        }
        return true;
    }),
]
