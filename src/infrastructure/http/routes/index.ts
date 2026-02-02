import { Router } from "express";
import authRoutes from "./auth.routes";
import academicPeriodRoutes from "./academic-period.routes";
import groupRoutes from "./group.routes";
import subjectRoutes from "./subject.routes";
import scheduleRoutes from "./schedule.routes";
import tutorRoutes from "./tutor.routes";
import classRoomRoutes from "./class-room.routes";



const apiRouter = Router();


apiRouter.use("/auth", authRoutes);
apiRouter.use("/academic-periods", academicPeriodRoutes);
apiRouter.use("/groups", groupRoutes);
apiRouter.use("/subjects", subjectRoutes);
apiRouter.use("/schedules", scheduleRoutes);
apiRouter.use("/tutors", tutorRoutes);
apiRouter.use("/class-rooms", classRoomRoutes);



export default apiRouter;
