import { User } from "./user.entity"
import { Student } from "./student.entity"
import { Teacher } from "./teacher.entity"
import { Tutor } from "./tutor.entity"

export interface Person {
    id: string;
    identification: string;
    firstName: string;
    lastName: string;
    middleName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    gender: string;
    birthDate: Date;
    nationality: string;
    additionalInfo: any;
    createdAt: Date;
    updatedAt: Date;
    user: User;
    student: Student;
    teacher: Teacher;
    tutor: Tutor;
}

export class Person {
    constructor(
        public id: string,
        public identification: string,
        public firstName: string,
        public lastName: string,
        public middleName: string,
        public email: string,
        public phone: string,
        public address: string,
        public city: string,
        public state: string,
        public country: string,
        public postalCode: string,
        public gender: string,
        public birthDate: Date,
        public nationality: string,
        public additionalInfo: any,
        public createdAt: Date,
        public updatedAt: Date,
        public user: User,
        public student: Student,
        public teacher: Teacher,
        public tutor: Tutor,
    ) {}
}
