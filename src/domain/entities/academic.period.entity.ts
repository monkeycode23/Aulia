import { School } from "./school.entity";
import { Schedule } from "./schedule.entity";

export interface AcademicPeriod {
    id: string;
    name: string;
    status: string;
    startDate: Date;
    endDate: Date;
    createdAt: Date;
    updatedAt: Date;
    school: School[];
    schedules: Schedule[];
}

export class AcademicPeriod{
    constructor(
        public id: string,
        public name: string,
        public status: string,
        public startDate: Date,
        public endDate: Date,
        public createdAt: Date,
        public updatedAt: Date,
        public school: School[],
        public schedules: Schedule[]
    ) {}
}
