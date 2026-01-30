import  {Person} from "../domain/entities/person.entity";
import {Group} from "../domain/entities/group.entity";
import {School} from "../domain/entities/school.entity";
import {Tutor} from "../domain/entities/tutor.entity";

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

export interface StudentCreate {
    id: string;
    enrollmentNumber: string;
    gradeLevel: string | null;
    section: string | null;
    status: string;
    enrollmentDate: Date;
    graduationDate: Date | null;
    createdAt: Date;
    updatedAt: Date;
    personId: string;
    schoolId: string | null;
    groupId: string | null;
    tutorId: string | null;
}

export interface StudentUpdate {
    enrollmentNumber?: string;
    gradeLevel?: string | null;
    section?: string | null;
    status?: string;
    enrollmentDate?: Date;
    graduationDate?: Date | null;
    personId?: string;
    schoolId?: string | null;
    groupId?: string | null;
    tutorId?: string | null;
}

