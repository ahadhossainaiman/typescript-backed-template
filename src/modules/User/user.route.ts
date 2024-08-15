import { Router } from "express";
import { signUp } from "./user.controller";


const router = Router();

router.post(
  '/register',
//   validationMiddleware(UserValidations.userRegistrationValidationSchema),
signUp,
);
// router.post(
//   '/login',
//   validationMiddleware(UserValidations.userLoginUserValidationSchema),
//   UserControllers.loginUser,
// );
// router.post(
//   '/change-password',
//   authMiddleware("admin","user"),
//   validationMiddleware(UserValidations.passwordChangeValidationSchema),
//   UserControllers.userChangePassword,
// );

export const UserRoutes = router;