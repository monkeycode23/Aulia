import { Person } from "./person.entity"
import { School } from "./school.entity"
import { Group } from "./group.entity"
import { Tutor } from "./tutor.entity"

export interface Student {
    id: string;
    person: Person;
    enrollmentNumber: string;
    gradeLevel: string;
    section: string;
    status: string;
    enrollmentDate: Date;
    graduationDate: Date;
    school: School;
    group: Group | null;
    createdAt: Date;
    updatedAt: Date;
    tutor: Tutor[];
    
}

export class Student {
    constructor(
        public id: string,
        public person: Person,
        public enrollmentNumber: string,
        public gradeLevel: string,
        public section: string,
        public status: string,
        public enrollmentDate: Date,
        public graduationDate: Date,
        public school: School,
        public group: Group | null,
        public createdAt: Date,
        public updatedAt: Date,
        public tutor: Tutor[],
    ) {}
}
