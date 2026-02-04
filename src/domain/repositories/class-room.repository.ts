import { ClassRoom } from "../entities/class-room.entity";

export interface ClassRoomRepository {
    create(classRoom: any): Promise<ClassRoom>;
    findAll(): Promise<ClassRoom[]>;
    findById(id: string): Promise<ClassRoom | null>;
    findByName(name: string): Promise<ClassRoom | null>;
    update(id: string, classRoom: any): Promise<ClassRoom | null>;
    delete(id: string): Promise<void>;
}
