import { Subject } from "../entities/subject.entity";

export interface SubjectRepository {
    create(subject: any): Promise<Subject>;
    findAll(): Promise<Subject[]>;
    findById(id: string): Promise<Subject | null>;
    findByCode(code: string): Promise<Subject | null>;
    update(id: string, subject: any): Promise<Subject | null>;
    delete(id: string): Promise<void>;
}
