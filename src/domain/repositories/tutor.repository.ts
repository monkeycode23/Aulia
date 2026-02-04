import { Tutor } from "../entities/tutor.entity";

export interface TutorRepository {
    create(tutor: any): Promise<Tutor>;
    findAll(): Promise<Tutor[]>;
    findById(id: string): Promise<Tutor | null>;
    findByPersonId(personId: string): Promise<Tutor | null>;
    update(id: string, tutor: any): Promise<Tutor | null>;
    delete(id: string): Promise<void>;
}
