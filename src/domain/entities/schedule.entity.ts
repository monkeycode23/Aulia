import { GroupSubject } from "./group.subject.entity";
import { Teacher } from "./teacher.entity";
import { AcademicPeriod } from "./academic.period.entity";

export interface Schedule {
    id: string;
    academicPeriod: AcademicPeriod;

    groupId: string;
    subjectId: string;
    groupSubject: GroupSubject;

    teacher: Teacher;
    createdAt: Date;
    updatedAt: Date;
}

export class Schedule {
    constructor(
        public id: string,
        public academicPeriod: AcademicPeriod,

        public groupId: string,
        public subjectId: string,
        public groupSubject: GroupSubject,

        public teacher: Teacher,
        public createdAt: Date,
        public updatedAt: Date,
    ) {}
}
