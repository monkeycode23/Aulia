import { Router } from "express";
//import authController from "../controllers/auth/auth.contorller";
import { authRequired,noAuthRequired } from "../middlewares/auth.middleware";
import { permissionsRequired } from "../middlewares/role.middleware";

import { PersonController } from "../controllers/person.controller";
import { PERMISSIONS } from "@/types/actions";
const personContorller = new PersonController()

const router = Router();


router.post("/",authRequired,permissionsRequired([PERMISSIONS.PERSON_CREATE]),personContorller.create);


router.put("/:id",authRequired,permissionsRequired([PERMISSIONS.PERSON_EDIT]), personContorller.update);


router.delete("/:id",authRequired,permissionsRequired([PERMISSIONS.PERSON_DELETE]),personContorller.delete)


    
//router.post("/verify",authRequired, authContorller.verifyAction());
//router.post("/logout",authRequired, authRequired, authContorller.logoutAction()); 
/* router.post("/resend-code",authRequired, authContorller.resendAction());
router.post("/refresh", authContorller.refreshAction());
router.post("/forgot-password",noAuthRoute, forgotEmailValidationRules,validateRequest, authContorller.forgotAction());
router.post("/forgot-password/code",noAuthRoute,forgotCodeValidationRules,validateRequest, authContorller.forgotCodeAction());
router.post("/forgot-password/reset",noAuthRoute,forgotPasswordValidationRules,validateRequest,  authContorller.forgotResetAction() );
 */


/* 





//router.get("/verify/:token",authRequired, verify);
*/
export default router;