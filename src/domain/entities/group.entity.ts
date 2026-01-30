import { School } from "./school.entity";
import { Student } from "./student.entity";
import { Teacher } from "./teacher.entity";
import { Subject } from "./subject.entity";
import { GroupSubject } from "./group.subject.entity";

export interface Group {
    id: string;
    name: string;
    gradeLevel: string;
    status: string;
    teachers: Teacher[];
    students: Student[];
    subjects: Subject[];
    school: School;
    createdAt: Date;
    updatedAt: Date;
    groupSubjects: GroupSubject[];
}


export class Group{
    constructor(
        public id: string,
        public name: string,
        public gradeLevel: string,
        public status: string,
        public teachers: Teacher[],
        public subjects: Subject[],
        public school: School,
        public createdAt: Date,
        public updatedAt: Date,
        public groupSubjects: GroupSubject[]
    ) {}
}

