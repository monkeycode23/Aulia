import { User } from "./user.type";
import { Student } from "./student.type";
import { Teacher } from "./teacher.type";
import { Tutor } from "./tutor.type";

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
