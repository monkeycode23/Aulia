import { Student } from "./student.entity"
import { Person } from "./person.entity"

export interface Tutor {
    id: string;
    person: Person;
    students: Student[];
}

export class Tutor {
    constructor(
        public id: string,
        public person: Person,
        public students: Student[],
    ) {}
}
