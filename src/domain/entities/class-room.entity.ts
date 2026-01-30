import { School } from "./school.entity";

export interface ClassRoom {
    id: string;
    name: string;
    status: string;
    capacity: number;
    resources: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    school: School;
}

export class ClassRoom {
    constructor(
        public id: string,
        public name: string,
        public status: string,
        public capacity: number,
        public resources: string,
        public description: string,
        public createdAt: Date,
        public updatedAt: Date,
        public school: School,
    ) {}
}
