import { Teacher } from "./teacher.entity";
import { GroupSubject } from "./group.subject.entity";
import { School } from "./school.entity";
import { Group } from "./group.entity";

export interface Subject {
    id: string;
    name: string;
    code: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    school: School;
    teachers: Teacher[];
    groups: Group[];
    groupSubjects: GroupSubject[];
}

export class Subject {
    constructor(
        public id: string,
        public name: string,
        public code: string,
        public status: string,
        public createdAt: Date,
        public updatedAt: Date,
        public school: School,
        public teachers: Teacher[],
        public groups: Group[],
        public groupSubjects: GroupSubject[],
    ) {}
}
