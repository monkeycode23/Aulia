import { Student } from "../entities/student.entity";
import { StudentCreate, StudentUpdate } from "../../types/student";

export interface StudentRepository {
    create(student: StudentCreate): Promise<Student>;
    update(id: string, student: StudentUpdate): Promise<Student>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<Student | null>;
    findAll(): Promise<Student[]>;
}